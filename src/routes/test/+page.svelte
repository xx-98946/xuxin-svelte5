<script lang="ts">
	import { themeStore } from '$lib/stores/theme.svelte';
</script>

<h1>test</h1>
<button onclick={themeStore.toggleTheme}>toggle</button>

<style lang="scss">
	h1 {
		font-size: 2em;
	}
</style>
