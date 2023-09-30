<script>
	import { Button } from '$lib/components/ui/button';
	import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
	import { auth } from '$lib/firebase/firebaseConfig.js';
	import { onMount } from 'svelte';

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
</script>

<main class="h-screen grid place-content-center">
	<Button size="lg" on:click={login}>Log in</Button>
</main>
