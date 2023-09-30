<script>
	import { page } from '$app/stores';
</script>

<main class="flex items-center p-5">
	<p class="font-black text-5xl text-primary">{$page.error.message}</p>
</main>
