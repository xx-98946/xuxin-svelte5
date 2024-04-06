/**
 * 目录类型
 */
export type ICategory = '计算机' | '博客' | '视频' | '其他' | '学习' | '办公' | '政府';

/**
 * 链接项
 */
export interface ILinkItem {
	key: string[]
	icon: string;
	title: string;
	category: ICategory;
}

/**
 * 链接列表
 */
export type ILinkList = Record<string, ILinkItem>;
