<script lang="ts">
	import 'the-new-css-reset/css/reset.css';
</script>

<main class="main">
	<slot />
</main>

<style lang="scss">
	.main {
		height: 100vh;
		width: 100vw;
		overflow: hidden;
	}
</style>
