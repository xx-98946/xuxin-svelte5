<script lang="ts">
	import SearchBar from './searchBar.svelte';
	let navList = [
		{
			href: '/',
			title: '首页'
		},
		{
			href: '/test',
			title: '测试'
		}
	];
</script>

<header>
	<SearchBar />
	<nav>
		{#each navList as { href, title }}
			<a {href}>{title}</a>
		{/each}
	</nav>
</header>

<style>
	header {
		/* background-color: #eee; */
		display: flex;
		justify-content: space-between;
		padding: 0.5em 1em;
		position: sticky;
		top: 0;
		background-color: #fff;
	}
	a {
		display: inline-flex;
		padding: 0.5em 0 0.5em 1em;
		/* border: 1px solid lightblue; */
	}

	a:not(:last-of-type):after {
		content: '/';
		color: rebeccapurple;
		font-weight: 900;
		padding-left: 0.75em;
	}

	nav {
		display: inline-flex;
		padding-right: 2em;
	}
</style>
