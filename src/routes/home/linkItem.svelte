<script lang="ts">
	import type { ILinkItem } from '$lib/types/linkList';
	import { searchContent$, editable$ } from '$lib/stores/index.svelte';

	interface Props {
		item: ILinkItem;
	}

	let { item }: Props = $props();

	// import { convertToPinyin } from "tiny-pinyin";
	import pkg from 'tiny-pinyin';
	const { convertToPinyin } = pkg;

	const titlePinYin = convertToPinyin(item.title).toLocaleLowerCase();

	let isActive = $derived(titlePinYin.includes(searchContent$.pinyin));

	function openMenu(e: MouseEvent) {
		e.preventDefault();
		editable$.value = true;
	}

	function closeMenu() {
		editable$.value = false;
	}

	async function deleteItem(e: MouseEvent, link: string) {
		e.stopPropagation();
		e.preventDefault();
		const res = await fetch('/api/linkList', {
			method: 'DELETE',
			body: link
		});
		const message = await res.text();
		console.log(message);
		location.reload();
	}
</script>

<a
	href={item.link}
	class="link-item"
	class:active={searchContent$.value && isActive}
	class:editable={editable$.value}
	title={item.title}
	target="_blank"
	oncontextmenu={openMenu}
	onclick={closeMenu}
>
	<img src={item.icon} alt="" class="link-icon" />
	<span class="link-title">
		{item.title}
	</span>

	<span class="delete" onclick={(e) => deleteItem(e, item.link)}>×</span>
</a>

<style>
	.link-item {
		padding: 0.5em;
		border: 1px solid #666;
		display: inline-flex;
		align-items: center;
		width: 100%;
		overflow: hidden;
		border-radius: 0.3em;
		position: relative;
	}

	.link-item.active {
		background-color: blueviolet;
		color: white;
	}

	@keyframes jelly {
		20% {
			transform: rotate3d(0, 0, 1, 0.25deg);
		}

		40% {
			transform: rotate3d(0, 0, 1, -0.25deg);
		}

		60% {
			transform: rotate3d(0, 0, 1, 0.25deg);
		}

		80% {
			transform: rotate3d(0, 0, 1, -0.25deg);
		}

		to {
			transform: rotate3d(0, 0, 1, 0deg);
		}
	}

	.link-item.editable {
		animation: jelly; /* referring directly to the animation's @keyframe declaration */
		animation-duration: 0.5s; /* don't forget to set a duration! */
		animation-iteration-count: infinite;
	}
	.link-item .delete {
		display: none;
	}

	.link-item.editable .delete {
		background-color: red;
		border-radius: 50%;
		height: 1em;
		width: 1em;
		position: absolute;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		top: 50%;
		right: 0;
		transform: translate3d(-50%, -50%, 0);
		color: white;
	}

	.link-icon {
		width: 1.25em;
		height: 1.25em;
		margin-right: 0.5em;
	}

	.link-title {
		/* 单行省略 */
		overflow: hidden;
		text-overflow: ellipsis;
		word-break: break-all;
		white-space: nowrap;
	}
</style>
