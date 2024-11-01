<script>
	import { page } from '$app/stores';
	import * as config from '$lib/utils/config';

	export let title = ''; // Judul halaman yang dinamis
	export let description = ''; // Deskripsi halaman yang dinamis
</script>

<svelte:head>
	<!-- Dynamic Title -->
	<title>{title ? title : config.title + ' - ' + config.slogan}</title>

	<!-- Meta Description -->
	<meta name="description" content={description ? description : config.description} />

	<!-- Open Graph Meta Tags -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content={title ? title : config.title + ' - ' + config.slogan} />

	<!-- Open Graph URL -->
	<meta property="og:url" content={$page.url.href} />

	<!-- Open Graph Description -->
	<meta property="og:description" content={description ? description : config.description} />

	<!-- Open Graph Site Name -->
	<meta property="og:site_name" content={config.title} />

	<!-- Twitter Meta Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content={$page.url.href} />
	<meta name="twitter:title" content={title ? title : config.title + ' - ' + config.slogan} />
	<meta name="twitter:description" content={description ? description : config.description} />
</svelte:head>
