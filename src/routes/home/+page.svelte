<script lang="ts">
	import type { ILinkItem } from "$lib/types/linkList";
	import LinkList from "./linkList.svelte";
	import Header from "./header.svelte";

	let listPromise: Promise<ILinkItem[]> = getLinkList();

	async function getLinkList() {
		const res = await fetch("/api/linkList");
		return res.json();
	}
</script>

<svelte:head>
	<title>网址导航</title>
</svelte:head>

<Header></Header>

<section class="container">
	{#await listPromise}
		<p>加载中……</p>
	{:then list}
		<LinkList {list} />
	{/await}
</section>

<style>
	.container {
		padding: 0 1em;
	}
</style>
