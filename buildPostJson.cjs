const frontmatter = require('front-matter');
const { readFile, readdir, writeFile } = require('fs/promises');
(async () => {
	try {
		const articleDir = './src/routes/resources/blog/[slug]/articles';
		const postDir = `${articleDir}/markdown`;
		const files = await readdir(postDir);
		const posts = files.filter((file) => file.endsWith('.md'));
		const metadatas = [];
		const postsContent = {};
		for (const filename of posts) {
			const file = await readFile(`${postDir}/${filename}`, 'utf8');
			const { attributes, body } = frontmatter(file);
			const slug = filename.replace('.md', '');
			metadatas.push({ ...attributes, slug });
			postsContent[slug] = body;
		}
		await writeFile(`${articleDir}/articles.meta.json`, JSON.stringify(metadatas));
		console.log('Successfully built articles.meta.json');
		await writeFile(`${articleDir}/articles.json`, JSON.stringify(postsContent));
		console.log('Successfully built articles.json');
	} catch (error) {
		console.log(error);
	}
})();
