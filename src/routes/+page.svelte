<script>
	import { Button } from '$lib/components/ui/button';
	import { Card, CardContent } from '$lib/components/ui/card';
	import { Input } from '$lib/components/ui/input';
	import * as Dialog from '$lib/components/ui/dialog';
	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';
	import { auth, db } from '$lib/firebase/firebaseConfig.js';
	import { collection, doc, getDoc, getDocs, query, setDoc, where } from 'firebase/firestore';
	import WaveSurfer from 'wavesurfer.js';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	inject({ mode: dev ? 'development' : 'production' });

	let vms = [];
	let uid;
	let email;
	let displayName;
	let username;
	let usernameInput;
	let errorMessage;
	let showToast = false;
	let waveSurfer;
	let isPlaying = false;
	let playerLoading = false;
	let noVMMessage = 'Create your username and share your Veil link to your friends.';

	onMount(() => {
		auth.onAuthStateChanged(async (user) => {
			if (!user) {
				window.location.href = '/auth';
			}

			uid = user.uid;
			email = user.email;
			displayName = user.displayName;

			const docRef = doc(db, 'users', uid);
			const docSnap = await getDoc(docRef);

			if (docSnap.exists()) {
				username = docSnap.data().username;
				noVMMessage = 'Share your Veil link to receive anonymous voice messages.';

				const messagesRef = collection(docRef, 'messages');
				const messagesSnap = await getDocs(messagesRef);
				messagesSnap.forEach((doc) => {
					vms.push(doc.data());
					vms = vms;
				});
			}
		});
	});

	async function submitUsername() {
		document.getElementById('username-error').setAttribute('hidden', '');
		if (usernameInput === undefined) {
			errorMessage = 'Please enter username';
			document.getElementById('username-error').removeAttribute('hidden');
		} 
		else if (/[^A-Za-z0-9_@.]/.test(usernameInput)) {
			errorMessage = 'Username contains invalid characters';
			document.getElementById('username-error').removeAttribute('hidden');
		}
		else {
			const usernameRef = collection(db, 'users');
			const usernameQuery = query(usernameRef, where('username', '==', usernameInput));
			const usernameQuerySnapshot = await getDocs(usernameQuery);

			if (!usernameQuerySnapshot.empty) {
				errorMessage = 'Username already exist';
				document.getElementById('username-error').removeAttribute('hidden');
			} else {
				await setDoc(doc(db, 'users', uid), {
					username: usernameInput
				});
				try {
					await setDoc(doc(db, 'users', uid), {
						username: usernameInput.replace(/[^A-Za-z0-9_@.]/g, ''), //sanitize username to exclude special characters and whitespaces
						email: email,
						displayName: displayName
					});
					username = usernameInput;
					noVMMessage = 'Share your Veil link to receive anonymous voice messages listed here.';
				} catch (error) {
					console.error('Error setting username:', error);
				}
			}
		}
	}

	function copyToClipboard() {
		navigator.clipboard.writeText(window.location.href + 'send-vm/' + username);
		showToast = true;

		setTimeout(() => {
			showToast = false;
		}, 5000);
	}

	function selectVM(vm) {
		isPlaying = false;
		playerLoading = true;
		setTimeout(() => {
			waveSurfer = WaveSurfer.create({
				container: '#waveform',
				waveColor: 'rgb(225 29 72)',
				progressColor: 'rgb(216 91 118)',
				url: vm
			});

			waveSurfer.on('ready', (percent) => {
				playerLoading = false;
			});
		}, 500);
	}

	function playRecording() {
		waveSurfer.play();
		isPlaying = true;
	}

	function pauseRecording() {
		waveSurfer.pause();
		isPlaying = false;
	}
</script>

<main class="h-screen">
	<div class="px-5 py-2 mb-2 bg-secondary flex justify-between">
		<div class="flex flex-col">
			{#if username}
				<div class="flex gap-4">
					<span class="font-black text-lg my-auto">@{username}</span>
					<Button on:click={copyToClipboard}>Copy link</Button>
				</div>
			{:else}
				<form
					class="flex w-full max-w-sm items-center space-x-2"
					on:submit|preventDefault={submitUsername}
				>
					<Input placeholder="Username" bind:value={usernameInput} />
					<Button type="submit" class="bg-secondary px-2"
						><Icon class="text-2xl" icon="prime:send" /></Button
					>
				</form>
				<p id="username-error" class="text-sm text-primary" hidden>{errorMessage}</p>
			{/if}
		</div>
		<Button variant="destructive" on:click={() => auth.signOut()}>Sign out</Button>
	</div>
	<div class="grid grid-cols-6 gap-4 px-5">
		{#each vms as vm}
			<Dialog.Root>
				<Dialog.Trigger class="lg:col-span-1 col-span-2">
					<Card class="h-24 lg:h-36" on:click={selectVM(vm.vmURL)}>
						<CardContent class="flex h-full items-end lg:items-center">
							<Icon class="text-primary text-5xl mx-auto " icon="emojione:mouth" />
						</CardContent>
					</Card>
				</Dialog.Trigger>
				<Dialog.Content>
					<!-- <Dialog.Header>
						<Dialog.Title>Are you sure absolutely sure?</Dialog.Title>
						<Dialog.Description>
							This action cannot be undone. This will permanently delete your account and remove
							your data from our servers.
						</Dialog.Description>
					</Dialog.Header> -->
					<div id="waveform" class="grid h-auto p-2 m-3 rounded-sm border-2 border-primary-500" />
					{#if !playerLoading}
						{#if !isPlaying}
							<Button
								variant="outline"
								class="border-primary h-auto w-24 mx-auto rounded-full"
								on:click={playRecording}
								><Icon class="text-5xl text-primary" icon="mingcute:play-fill" /></Button
							>
						{:else}
							<Button
								variant="outline"
								class="border-primary h-auto w-24 mx-auto rounded-full"
								on:click={pauseRecording}
								><Icon class="text-5xl text-primary" icon="carbon:pause-filled" /></Button
							>
						{/if}
					{/if}
				</Dialog.Content>
			</Dialog.Root>
		{/each}
		{#if vms.length === 0}
			<span class="col-span-6 mx-auto text-2xl text-primary align-middle">{noVMMessage}</span>
		{/if}
	</div>
	{#if showToast}
		<div
			class="animate-bounce bg-primary w-auto fixed bottom-2 left-2 text-center rounded-sm py-2 px-3"
		>
			<span class="text-primary-foreground">Link copied. Share your link to your friends.</span>
		</div>
	{/if}
</main>
