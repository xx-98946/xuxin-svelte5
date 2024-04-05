<script lang="ts">
	import type { ILinkItem } from '$lib/types/linkList';
	import LinkList from './linkList.svelte';
	import Header from './header.svelte';

	let linkList: ILinkItem[] = $state([]);

	async function getLinkList() {
		const res = await fetch('https:/xuxin-server.deno.dev/linkList');
		const data = await res.json();
		linkList = data;
	}

	$effect(() => {
		getLinkList();
	});
</script>

<svelte:head>
	<title>网址导航</title>
</svelte:head>

<Header></Header>

<section class="container">
	<LinkList list={linkList} />
</section>

<style>
	.container {
		padding: 0 1em;
	}
</style>
