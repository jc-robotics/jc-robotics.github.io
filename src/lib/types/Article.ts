export interface Article {
	metadata: ArticleMetaData;
}
export interface ArticleMetaData {
	title: string;
	slug: string;
	datePublished: string;
	readTime: string;
	authorId: string;
	imageUrl: string;
	tags: string[];
}
