import type { Social } from '$lib/types/Social';
import instagramIconUrl from '$lib/assets/images/instagram.svg';
import githubIconUrl from '$lib/assets/images/github.svg';

export const instagram = (username: string): Social => ({
	name: 'Instagram',
	username,
	href: `https://www.instagram.com/${username}`,
	icon: instagramIconUrl
});

export const github = (username: string): Social => ({
	name: 'Github',
	username,
	href: `https://www.github.com/${username}`,
	icon: githubIconUrl
});
