// import { convertToPinyin } from "tiny-pinyin";
import pkg from 'tiny-pinyin';
const { convertToPinyin } = pkg;

/**
 * 搜索内容
 */
export const searchContent$ = (() => {
	let state = $state('');
	const pinyin = $derived(convertToPinyin(state).toLocaleLowerCase());
	return {
		get value() {
			return state;
		},
		get pinyin() {
			return pinyin;
		},
		set value(v) {
			state = v;
		}
	};
})();

/**
 * 编辑状态
 */
export const editable$ = (() => {
	let state = $state(false);
	return {
		get value() {
			return state;
		},
		set value(v) {
			state = v;
		}
	};
})();
