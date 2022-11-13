type Params = {
	author_id: string;
	slug: string;
	title: string;
	date_published: string;
	readTime: number;
	tags: string[];
	image_name: string;
};
export const parseArticleMetaData = ({
	author_id,
	title,
	date_published,
	slug,
	readTime,
	tags,
	image_name
}: Params) => ({
	authorId: author_id,
	slug,
	tags,
	title,
	imageUrl: `${image_name}`,
	datePublished: new Date(date_published).toLocaleDateString('en-gb', {
		timeZone: 'utc',
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	}),
	readTime: String(readTime)
});
