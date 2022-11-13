import gh from 'gh-pages';

gh.publish(
	'build', // path to public directory
	{
		branch: 'gh-pages',
		repo: 'https://github.com/jc-robotics/jc-robotics.github.io', //
		user: {
			name: 'Orville', // update to use your name
			email: 'orvilledaley2004@gmail.com' // Update to use your email
		},
		dotfiles: true
	},
	(param) => {
		console.log('Deploy Complete!');
		console.log(param);
	}
);
