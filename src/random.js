const fetch = require('node-fetch');

class Random {
	async getJoke() {
		const Joke = await fetch('https://api.chucknorris.io/jokes/random');
		const joke = await Joke.json();
		if (!joke.value) {
			throw new Error(
				'Joke could not be gotten. Please wait for the developers to fix this',
			);
		}

		let content = {
			embed: {
				color: 'RANDOM',
				title: 'Random joke',
				description: joke.value,
				image: joke.icon_url,
				url: joke.url,
			},
		};
		return content;
	}
}

module.exports = Random;
