import type { ArticleMetaData } from '$lib/types/Article';
import articleMetaData from './[slug]/articles/articles.meta.json';
import { parseArticleMetaData } from '$lib/scripts/parseArticleMetaData';
export async function load() {
	return {
		articles: articleMetaData.map(parseArticleMetaData) as ArticleMetaData[]
	};
}
export type PageServerLoad = Awaited<ReturnType<typeof load>>;
