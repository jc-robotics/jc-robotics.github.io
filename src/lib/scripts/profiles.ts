import { github, instagram } from './socials';
import type { Profile } from '$lib/types/Profile';
import type { Social } from '$lib/types/Social';
const profilesWithoutImage = [
	{
		name: 'Paul Pounall',
		intro: "Howdy! I'm Pablo, the Engineer coach. Jamaica College Alumnus."
	},
	{
		name: 'Gavin Samuels',
		intro:
			"Greetings! I'm Gavin, the Head coach. Jamaica College Alumnus. 8+ years coaching experience."
	},
	{
		name: 'Stephanie Williams',
		socials: [instagram('_stephnathwill_')],
		intro: "Hi! I'm Steph, the Team Captain and Engineer. Immaculate Conception High School."
	},
	{
		name: 'Ajani Hickling',
		socials: [github('42-Life'), instagram('renzu_photos')],
		intro:
			"Hi! I'm Ajani (Macbook), I serve as the Deputy Spokesperson and programmer. Coming from American International School of Kingston (AISK)."
	},
	{
		name: 'Chelsea Rerrie',
		socials: [github('cherry-java'), instagram('cherrysoda.jpeg')],
		intro:
			"Hi! I'm Chels. Spokesperson and programmer dabbling in CAD. Coming from Immaculate Conception High School."
	},
	{
		name: 'Orville Daley',
		socials: [github('crypto-cmd'), instagram('oj.frxst')],
		intro: "Hey! I'm Orville. Lead Programmer. From Jamaica College. PS: I made the website."
	}
];
const loadProfileImageUrl = async ({ id }: { id: string }) => {
	const image = await import(`$lib/assets/images/profiles/${id}.webp`);
	const featimage = await import(`$lib/assets/images/profiles/${id}--feat.webp`);
	return {
		imageUrl: image.default as string,
		featImageUrl: featimage.default as string
	} as const;
};

export const profiles: Profile[] = await Promise.all(
	profilesWithoutImage.map(async (profile) => {
		const id = profile.name.toLowerCase().replace(/ /g, '-');
		return {
			id,
			...profile,
			...(await loadProfileImageUrl({ id }))
		} as const;
	})
);

export const getProfile = ({ id }: { id: string }): Profile => {
	const profile = profiles.find((profile) => profile.id === id);
	if (!profile) {
		console.log(`Profile with id ${id} not found`);
		console.log(profiles);
		throw new Error(`Profile not found: ${id}`);
	}
	return profile as unknown as Profile;
};
