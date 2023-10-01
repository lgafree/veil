<script>
	import { Button } from '$lib/components/ui/button';
	import { Progress } from '$lib/components/ui/progress';
	import Icon from '@iconify/svelte';
	import WaveSurfer from 'wavesurfer.js';
	import RecordPlugin from 'wavesurfer.js/plugins/record';
	import { page } from '$app/stores';
	import { db } from '$lib/firebase/firebaseConfig.js';
	import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
	import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
	import { v4 as uuidv4 } from 'uuid';

	let isRecording = false;
	let waveSurfer;
	let record;
	let duration = 0;
	let isPlaying = false;
	let audioBlob;
	let timer;
	let recordLimit = 0;
	let sendButtonIcon = 'mingcute:send-fill';

	async function startRecording() {
		waveSurfer = WaveSurfer.create({
			container: '#waveform',
			waveColor: 'rgb(225 29 72)',
			progressColor: 'purple'
		});
		record = waveSurfer.registerPlugin(RecordPlugin.create());
		record.on('record-end', (blob) => {
			waveSurfer.destroy();
			waveSurfer = WaveSurfer.create({
				container: '#waveform',
				waveColor: 'rgb(225 29 72)',
				progressColor: 'rgb(216 91 118)',
				url: URL.createObjectURL(blob)
			});
			// audioBlob = URL.createObjectURL(blob);
			audioBlob = blob;
		});

		isRecording = true;
		record.startMic();
		record.startRecording();

		//stop recording after 10 seconds
		timer = setInterval(() => {
			recordLimit += 1;

			if (recordLimit >= 100) {
				stopRecording();
			}
		}, 100);
	}

	function stopRecording() {
		if (record.isRecording()) {
			record.stopRecording();
			record.stopMic();

			duration = waveSurfer.getDuration();
		}

		isRecording = false;
		clearInterval(timer);
		recordLimit = 0;
	}

	function playRecording() {
		waveSurfer.play();
		isPlaying = true;
	}

	function pauseRecording() {
		waveSurfer.pause();
		isPlaying = false;
	}

	function deleteRecording() {
		waveSurfer.destroy();
		waveSurfer.empty();
		duration = 0;
		isPlaying = false;
	}

	async function sendVM() {
		const storage = getStorage();
		const storageRef = ref(storage, `${$page.params.username}-${uuidv4()}`);
		document.getElementById('send-vm-button').setAttribute('disabled', true);
		sendButtonIcon = 'eos-icons:three-dots-loading';
		uploadBytes(storageRef, audioBlob).then((snapshot) => {
			getDownloadURL(snapshot.ref).then(async (vmURL) => {
				const userQuery = query(
					collection(db, 'users'),
					where('username', '==', $page.params.username)
				);
				const userSnap = await getDocs(userQuery);
				userSnap.forEach(async (doc) => {
					await addDoc(collection(doc.ref, 'messages'), {
						vmURL: vmURL
					});

					document.getElementById('send-vm-button').removeAttribute('disabled');
					sendButtonIcon = 'mingcute:send-fill';
					deleteRecording();
					alert('VM sent');
				});
			});
		});
	}
</script>

<main>
	<div id="waveform" class="grid h-auto p-2 m-5 rounded-sm border-2 border-primary-500">
		{#if duration === 0 && isRecording === false}
			<span class="h-32 mx-auto text-2xl text-primary align-middle">Say something.</span>
		{/if}
	</div>

	<div class="grid justify-items-center">
		{#if waveSurfer !== undefined && duration > 0}
			<div class="flex gap-4">
				<Button
					variant="outline"
					class="border-primary h-auto rounded-full"
					on:click={deleteRecording}
					><Icon class="text-5xl text-primary" icon="iconamoon:trash-fill" /></Button
				>

				{#if !isPlaying}
					<Button
						variant="outline"
						class="border-primary h-auto rounded-full"
						on:click={playRecording}
						><Icon class="text-5xl text-primary" icon="mingcute:play-fill" /></Button
					>
				{:else}
					<Button
						variant="outline"
						class="border-primary h-auto rounded-full"
						on:click={pauseRecording}
						><Icon class="text-5xl text-primary" icon="carbon:pause-filled" /></Button
					>
				{/if}

				<Button
					id="send-vm-button"
					variant="primary"
					class="border-primary h-auto rounded-full"
					on:click={sendVM}
					><Icon id="send-vm-icon" class="text-5xl text-black" icon={sendButtonIcon} /></Button
				>
			</div>
		{/if}

		{#if duration === 0}
			{#if !isRecording}
				<Button
					variant="outline"
					class="border-primary h-auto w-20  rounded-full"
					on:click={startRecording}><Icon class="text-5xl text-primary" icon="et:mic" /></Button
				>
			{:else}
				<Progress class="w-5/6 mb-2" value={recordLimit} />
				<Button
					variant="outline"
					class="border-primary h-auto  w-20 rounded-full"
					on:click={stopRecording}><Icon class="text-5xl text-primary" icon="ion:stop" /></Button
				>
			{/if}
		{/if}
	</div>
	<div class="flex flex-col place-content mt-10">
		<div class="row text-center">
			<span class="h-32 p-5 mx-auto text-2xl text-primary align-middle"
				>ATM, this app is only supported in the browser. If you're in an app, please copy the link
				and paste it in your browser. (e.g, Chrome)</span
			>
		</div>
		<div class="row text-center">
			<span class="h-32 mx-auto text-xl text-blue-500 align-middle"
				>https://veil-ruddy.vercel.app/send-vm/{$page.params.username}</span
			>
		</div>
	</div>
</main>
