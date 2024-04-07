<script lang="ts">
	import SolidSrc from '$lib/images/svelte-logo.svg';
	import Theme from './Theme.svelte';
	import SearchBar from './searchBar.svelte';

	interface Props {
		className?: string;
	}

	const { className = '' }: Props = $props();

	const links = $state([
		{
			title: '测试',
			path: '/demo'
		}
	]);
</script>

<header class={className}>
	<a class="left" href="/">
		<img src={SolidSrc} alt="solid icon" />
		<span>Xuxin.dev</span>
	</a>

	<div class="center">
		<SearchBar />
	</div>

	<nav class="right">
		{#each links as link}
			<a href={link.path}>{link.title}</a>
		{/each}

		<Theme />
	</nav>
</header>

<style lang="scss">
	header {
		display: flex;
		align-items: center;
		overflow: hidden;
		height: 4em;
		border-bottom: 1px solid #ccc;
		padding: 0 2em;

		.left {
			display: flex;
			align-items: stretch;
			height: 2em;

			span {
				margin-left: 0.5em;
				font-weight: 700;
				font-size: 1.25em;
				color: gray;
				line-height: 2em;
			}
		}

		.center {
			margin: 0 2em;
			// border: 1px solid #ddd;
			// padding: 0.25em 2em;
			// font-size: 1em;
			// border-radius: 4em;
		}

		.right {
			display: flex;
			align-items: center;
			a {
				margin-right: 1em;
			}
		}
	}
</style>
