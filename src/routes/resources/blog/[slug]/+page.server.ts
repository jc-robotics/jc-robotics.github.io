import { parseArticleMetaData } from '$lib/scripts/parseArticleMetaData';
import articles from './articles/articles.json';
import articleMetaData from './articles/articles.meta.json';

export const prerender = true;
export async function load({ params }: { params: { slug: string } }) {
	const { slug } = params;
	const post = {
		metadata: articleMetaData.find(({ slug: s }) => s === slug),
		content: articles[slug as keyof typeof articles]
	};

	if (!(post.metadata && post.content)) {
		throw new Error(`Post not found: ${slug}`);
	}

	return {
		metadata: parseArticleMetaData(post.metadata),
		content: post.content
	};
}
export type PageLoad = Awaited<ReturnType<typeof load>>;
