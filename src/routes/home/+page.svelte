<script lang="ts">
	import LinkList from './linkList.svelte';
	import Header from './Header/index.svelte';
</script>

<svelte:head>
	<title>徐鑫的网址导航</title>
</svelte:head>

<main>
	<Header className="header" />
	<section class="content">
		<LinkList />
	</section>
</main>

<style lang="scss">
	main {
		height: 100vh;
		width: 100vw;
		overflow: hidden;
	}

	main {
		:global(.header) {
			height: 4em;
		}

		.content {
			color: #789;
			margin-top: 0.5em;
			height: calc(100vh - 4.5em);
			overflow: auto;
			padding: 0 60px;
		}
	}
</style>
