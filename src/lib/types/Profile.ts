import type { Social } from './Social';

export interface Profile {
	readonly id: string;
	readonly name: string;
	readonly imageUrl: string;
	readonly featImageUrl: string;
	readonly intro: string;
	socials?: Social[];
}
