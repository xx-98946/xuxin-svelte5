<script lang="ts">
	import { themeStore } from '$lib/stores/theme.svelte';
	function toDark() {
		themeStore.theme = 'dark';
	}

	function toLight() {
		themeStore.theme = 'light';
	}
</script>

<div>
	<button onclick={toDark}>暗夜</button>
	<span>/</span>
	<button onclick={toLight}>白昼</button>
</div>

<style lang="scss">
	button {
		cursor: pointer;
	}

	:global(.dark) {
		button {
			// background-color: black;
			// color: white;
		}
	}
</style>
