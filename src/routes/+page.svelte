<script lang="ts">
	$effect(() => {
		const apiUrl = import.meta.env.API_URL;

		console.log(apiUrl); // 输出：/api
	});
</script>

<p>page</p>
<a href="/demo">测试页</a>
