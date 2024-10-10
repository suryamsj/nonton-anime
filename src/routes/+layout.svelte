<script>
	import Navbar from '$lib/components/Navbar.svelte';
import '../app.css';
</script>

<Navbar />

<main class="flex-shrink-0">
	<slot></slot>
</main>
