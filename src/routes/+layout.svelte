<script>
	import favicon from '$lib/assets/favicon.svg';
	import '$lib/styles/global.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="preload" href="/fonts/syne-medium.woff2" as="font" type="font/woff2" crossorigin="anonymous">
	<link rel="preload" href="/fonts/syne-extrabold.woff2" as="font" type="font/woff2" crossorigin="anonymous">
	<link rel="preload" href="/fonts/athy.woff2" as="font" type="font/woff2" crossorigin="anonymous">
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}
