<script lang="ts">
	function toDark() {
		document.body.classList.add("dark");
		localStorage.setItem("theme", "dark");
	}

	function toLight() {
		document.body.classList.remove("dark");
		localStorage.setItem("theme", "light");
	}
</script>

<div>
	<button on:click={toDark}>暗夜</button>
	<span>/</span>
	<button on:click={toLight}>白昼</button>
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
