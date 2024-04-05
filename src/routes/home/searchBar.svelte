<script lang="ts">
	import bingImg from '$lib/images/bing.svg';

	let searchEngineList = [
		{
			type: 'bing',
			path: 'https://cn.bing.com/search?q=',
			icon: bingImg,
			title: '必应'
		},
		{
			type: 'baidu',
			path: 'https://www.baidu.com/s?wd=',
			icon: 'https://www.baidu.com/favicon.ico',
			title: '百度'
		},
		{
			type: 'google.com',
			path: 'https://www.google.com/search?q=',
			icon: 'https://ts4.cn.mm.bing.net/th?id=ODF.v3kdJ01mVYlAIwAUboY87A&w=60&h=60&rs=1&qlt=100&r=0&o=6&pid=13.1',
			title: '谷歌'
		}
	];

	import { searchContent$ } from '$lib/stores/index.svelte';

	function handleSearch(path: string) {
		if (searchContent$.value.startsWith('http')) {
			window.open(searchContent$.value, '_blank');
		} else {
			window.open(path + searchContent$.value, '_blank');
		}
	}

	function handlePress(e: KeyboardEvent) {
		if (e.key !== 'Enter') {
			return;
		}
		// 默认使用必应搜索
		handleSearch(searchEngineList[0].path);
	}
</script>

<section class="search-bar">
	<input
		placeholder="请输入搜索内容"
		autofocus
		class="search-content"
		bind:value={searchContent$.value}
		on:keypress={handlePress}
	/>
	<span>
		{#each searchEngineList as { title, icon, path }}
			<button class="search-btn" on:click={() => handleSearch(path)}>
				<img src={icon} alt={title} class="search-img" />
			</button>
		{/each}
	</span>
</section>

<style>
	.search-bar {
		display: flex;
		align-items: center;
		border: 1px solid #999;
		border-radius: 1em;
	}

	.search-content {
		/* border: 1px solid gray; */
		border-radius: 1em;
		padding: 0.25em;
		padding-left: 1em;
		font-size: 0.8em;
		width: 40vw;
	}

	.search-btn {
		padding: 0 0.5em;
		cursor: pointer;
	}

	.search-img {
		width: 1.25em;
		height: 1.25em;
		display: inline-block;
	}
</style>
