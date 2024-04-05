<script lang="ts">
	interface Props {
		style?: string;
		activeTab?: string;
		list: string[];
	}
	let { list, activeTab = $bindable(""), style = "" }:Props = $props();
	// export let list: string[] = [];
	// export let activeTab = "";
	// export let style = "";

	function toggleActiveTab(tabItem: string) {
		if (activeTab == tabItem) {
			activeTab = "";
		} else {
			activeTab = tabItem;
		}
	}
</script>

<section class="container" {style}>
	{#each ["", ...list] as tabItem}
		<button
			class="tab-item"
			class:active={tabItem == activeTab}
			on:click={() => toggleActiveTab(tabItem)}
		>
			{tabItem == "" ? "全部" : tabItem}
		</button>
	{/each}
</section>

<style>
	.container {
		--active-color: blue;
		width: 100%;
		overflow: auto;
		/* border: 1px solid black; */
		display: flex;
		flex-wrap: nowrap;
		/* margin-bottom: 1em; */
	}

	.tab-item {
		padding: 0.5em 0;
		border-bottom: 2px solid transparent;
		cursor: pointer;
		transition: all 0.25s;
		flex: 0 0 auto;
		margin-right: 1em;
	}

	.tab-item.active,
	.tab-item:hover {
		border-bottom-color: var(--active-color);
	}

	.tab-item.active {
		color: var(--active-color);
	}
	.tab-item + .tab-item {
		margin-left: 1em;
	}
</style>
