const fetch = require('node-fetch');

class Anime {
	async getNeko() {
		const main = await fetch('https://neko-love.xyz/api/v1/neko');
		const mat = await main.json();

		if (!mat.url) {
			throw new Error(
				'Image could not be gotten. Please wait for the developers to fix this!',
			);
		}
		let content = {
			embed: {
				color: 'RANDOM',
				title: 'Random neko image',
				description: 'Super cute right?',
				image: { url: mat.url },
			},
		};
		return content;
	}

	async getNekolewd() {
		const main = await fetch('https://neko-love.xyz/api/v1/nekolewd');
		const mat = await main.json();

		if (!mat.url) {
			throw new Error(
				'Image could not be gotten. Please wait for the developers to fix this!',
			);
		}
		let content = {
			embed: {
				color: 'RANDOM',
				title: 'Random nekolewd image',
				description: 'Super cute right?',
				image: { url: mat.url },
			},
		};
		return content;
	}

	async getKitsune() {
		const main = await fetch('https://neko-love.xyz/api/v1/kitsune');
		const mat = await main.json();

		if (!mat.url) {
			throw new Error(
				'Image could not be gotten. Please wait for the developers to fix this!',
			);
		}
		let content = {
			embed: {
				color: 'RANDOM',
				title: 'Random kisune image',
				description: 'Super cute right?',
				image: { url: mat.url },
			},
		};
		return content;
	}

	async getPat() {
		const main = await fetch('https://neko-love.xyz/api/v1/pat');
		const mat = await main.json();

		if (!mat.url) {
			throw new Error(
				'Image could not be gotten. Please wait for the developers to fix this!',
			);
		}
		let content = {
			embed: {
				color: 'RANDOM',
				title: 'Random pat image',
				description: 'Super cute right?',
				image: { url: mat.url },
			},
		};
		return content;
	}

	async getHug() {
		const main = await fetch('https://neko-love.xyz/api/v1/hug');
		const mat = await main.json();

		if (!mat.url) {
			throw new Error(
				'Image could not be gotten. Please wait for the developers to fix this!',
			);
		}
		let content = {
			embed: {
				color: 'RANDOM',
				title: 'Random hug image',
				description: 'Super cute right?',
				image: { url: mat.url },
			},
		};
		return content;
	}

	async getWaifu() {
		const main = await fetch('https://neko-love.xyz/api/v1/waifu');
		const mat = await main.json();

		if (!mat.url) {
			throw new Error(
				'Image could not be gotten. Please wait for the developers to fix this!',
			);
		}
		let content = {
			embed: {
				color: 'RANDOM',
				title: 'Random waifu image',
				description: 'Super cute right?',
				image: { url: mat.url },
			},
		};
		return content;
	}

	async getCry() {
		const main = await fetch('https://neko-love.xyz/api/v1/cry');
		const mat = await main.json();

		if (!mat.url) {
			throw new Error(
				'Image could not be gotten. Please wait for the developers to fix this!',
			);
		}
		let content = {
			embed: {
				color: 'RANDOM',
				title: 'Random cry image',
				description: 'Super cute right?',
				image: { url: mat.url },
			},
		};
		return content;
	}

	async getKiss() {
		const main = await fetch('https://neko-love.xyz/api/v1/kiss');
		const mat = await main.json();

		if (!mat.url) {
			throw new Error(
				'Image could not be gotten. Please wait for the developers to fix this!',
			);
		}
		let content = {
			embed: {
				color: 'RANDOM',
				title: 'Random kiss image',
				description: 'Super cute right?',
				image: { url: mat.url },
			},
		};
		return content;
	}

	async getSlap() {
		const main = await fetch('https://neko-love.xyz/api/v1/slap');
		const mat = await main.json();

		if (!mat.url) {
			throw new Error(
				'Image could not be gotten. Please wait for the developers to fix this!',
			);
		}
		let content = {
			embed: {
				color: 'RANDOM',
				title: 'Random slap image',
				description: 'Super cute right?',
				image: { url: mat.url },
			},
		};
		return content;
	}

	async getSmug() {
		const main = await fetch('https://neko-love.xyz/api/v1/smug');
		const mat = await main.json();

		if (!mat.url) {
			throw new Error(
				'Image could not be gotten. Please wait for the developers to fix this!',
			);
		}
		let content = {
			embed: {
				color: 'RANDOM',
				title: 'Random smug image',
				description: 'Super cute right?',
				image: { url: mat.url },
			},
		};
		return content;
	}

	async getPunch() {
		const main = await fetch('https://neko-love.xyz/api/v1/punch');
		const mat = await main.json();

		if (!mat.url) {
			throw new Error(
				'Image could not be gotten. Please wait for the developers to fix this!',
			);
		}
		let content = {
			embed: {
				color: 'RANDOM',
				title: 'Random punch image',
				description: 'Super cute right?',
				image: { url: mat.url },
			},
		};
		return content;
	}
}

module.exports = Anime;
