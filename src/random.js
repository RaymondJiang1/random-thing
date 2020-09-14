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

	async getCat() {
		const Cat = await fetch('http://aws.random.cat/meow');
		const cat = await Joke.json();

		if (!cat.url) {
			throw new Error(
				'Cat could not be gotten. Please wait for the developers to fix this',
			);
		}

		let content = {
			embed: {
				color: 'RANDOM',
				title: 'Random cat',
				description: 'Look at this cute cat!',
				image: cat.file,
				footer: new Date(),
			},
		};
		return content;
	}

	async getMeme() {
		const meme = await fetch('http://image-api-2.glitch.me/reddit/meme');
		const Meme = await meme.json();

		if (!Meme.img) {
			throw new Error(
				'Meme could not be gotten. Please wait for the developers to fix this',
			);
		}

		let content = {
			embed: {
				color: 'RANDOM',
				title: 'Random meme',
				description: 'Look at this funny meme!',
				image: Meme.img,
				footer: new Date(),
			},
		};
		return content;
	}
}

module.exports = Random;
