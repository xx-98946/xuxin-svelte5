import api from "./index";
import type { ILinkItem } from "$lib/types/linkList"

/**
 * 获取链接列表
 * @returns 
 */
export async function getLinkList(): Promise<ILinkItem[]> {
    const res = await api('/api/linkList');
    return res.json();
}