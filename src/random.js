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
				image: { url: joke.icon_url },
				url: joke.url,
			},
		};
		return content;
	}

	async getDog() {
		const Dog = await fetch('https://random.dog/woof.json');
		const dog = await Dog.json();

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
				image: { url: dog.url },
				footer: new Date(),
			},
		};
		return content;
	}

	async getCat() {
		const Cat = await fetch('http://aws.random.cat/meow');
		const cat = await Cat.json();

		if (!cat.file) {
			throw new Error(
				'Cat could not be gotten. Please wait for the developers to fix this',
			);
		}

		let content = {
			embed: {
				color: 'RANDOM',
				title: 'Random cat',
				description: 'Look at this cute cat!',
				image: { url: cat.file },
				footer: new Date(),
			},
		};
		return content;
	}

	async getMeme() {
		const main = await fetch('https://apis.duncte123.me/meme');
		const mat = await main.json();

		if (!mat.success) {
			return console.log('Error 01: Unable to access the json content of API');
		}

		let content = {
			embed: {
				color: 'RANDOM',
				title: mat.data.title,
				image: { url: mat.data.image },
			},
		};

		return content;
	}

	async getAdvice() {
		const main = await fetch('https://api.adviceslip.com/advice');
		const mat = await main.json();

		if (!mat) {
			return console.log('Error 01: Unable to access the json content of API');
		}

		let content = { embed: { description: mat.slip.advice, color: 'RANDOM' } };

		return content;
	}

	async getString() {
		const main = await fetch('https://apis.duncte123.me/random-string');
		const mat = await main.json();

		if (!mat.data) {
			throw new Error(
				'String could not be gotten. Please wait for the developers to fix this!',
			);
		}
		let content = {
			embed: { color: 'RANDOM', title: 'Random String', description: mat.data },
		};

		return content;
	}
}

module.exports = Random;
