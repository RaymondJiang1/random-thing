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

	async getDog() {
		const Dog = await fetch('https://random.dog/woof.json');
		const dog = await Joke.json();

		if (!dog.url) {
			throw new Error(
				'Dog could not be gotten. Please wait for the developers to fix this',
			);
		}

		let content = {
			embed: {
				color: 'RANDOM',
				title: 'Random dog',
				description: 'Look at this cute dog!',
				image: dog.url,
				footer: new Date(),
			},
		};
		return content;
	}
}

module.exports = Random;
