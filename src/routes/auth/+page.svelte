<script>
	import { Button } from '$lib/components/ui/button';
	import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
	import { auth } from '$lib/firebase/firebaseConfig.js';
	import { onMount } from 'svelte';

	let showToast = false;

	onMount(() => {
		auth.onAuthStateChanged((user) => {
			if (user) {
				window.location.href = '/';
			}
		});
	});

	function login() {
		const provider = new GoogleAuthProvider();
		signInWithPopup(auth, provider).then(async (result) => {
			if (result.user) {
				window.location.href = '/';
			}
		});
	}

	function copyToClipboard() {
		navigator.clipboard.writeText('https://veil-ruddy.vercel.app/auth');
		showToast = true;

		setTimeout(() => {
			showToast = false;
		}, 5000);
	}
</script>

<main class="h-screen grid place-content-center mx-5">
	<div>
		<span class="h-32 mx-auto text-2xl text-primary align-middle"
			>ATM, log in is only supported in the browser. If you're in an app, please copy the link and
			paste it in your browser. (e.g, Chrome)</span
		>
		<Button variant="outline" size="sm" class="text-primary" on:click={copyToClipboard}
			>Copy link</Button
		>
	</div>

	<div class="width-full items-center mt-5">
		<Button size="lg" on:click={login}>Log in</Button>
	</div>

	{#if showToast}
		<div
			class="animate-bounce bg-primary w-auto fixed bottom-2 left-2 text-center rounded-sm py-2 px-3"
		>
			<span class="text-primary-foreground">Link copied. You can now paste it in your browser.</span
			>
		</div>
	{/if}
</main>
