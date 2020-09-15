### Random Thing

Below are the things that this package offers you.

- Get a random joke
- Get a cute dog
- Get a cute cat
- Get a funny meme!
- Get a random string

# SETUP FOR RANDOM THING

```js
const discord = require('discord.js');
const client = new discord.Client();
const { Random } = require('random-thing');
const random = new Random();

client.on('ready', () => {
	console.log('Ready to go');
});

client.on('message', async (message) => {
	if (message.content === '!joke') {
		let data = await random.getJoke();
		message.channel.send(data);
	}
});

client.login('TOKEN');
```

# SETUP FOR ANIME THING

```js
const discord = require('discord.js');
const client = new discord.Client();
const { Anime } = require('random-thing');
const random = new Anime();

client.on('ready', () => {
	console.log('Ready to go');
});

client.on('message', async (message) => {
	if (message.content === '!joke') {
		let data = await random.getPat();
		message.channel.send(data);
	}
});

client.login('TOKEN');
```

![](https://cdn.discordapp.com/attachments/736669581690536067/755165775765176402/Screen_Shot_2020-09-14_at_3.35.33_PM.png)

## DOCUMENTATION

**getJoke()**: Provides You a Random Funny Joke.

```js
let data = await Random.getJoke();
message.channel.send(data);
```

**getDog()**: Provides you a very cute dog!

```js
let data = await Random.getDog();
message.channel.send(data);
```

**getCat()**: Provides you a very cute cat!

```js
let data = await Random.getCat();
message.channel.send(data);
```

**getMeme()**: Provides you a very funny meme!

```js
let data = await Random.getMeme();
message.channel.send(data);
```

**getRandomString()**: Provides you a very random string!

```js
let data = await Random.getRandomString();
message.channel.send(data);
```

**getNeko()**: Provides you a neko image!

```js
let data = await Anime.getNeko();
message.channel.send(data);
```

**getNeko()**: Provides you a neko image!

```js
let data = await Anime.getNeko();
message.channel.send(data);
```

**getNekolewd()**: Provides you a nekolwed image!

```js
let data = await Anime.getNekolewd();
message.channel.send(data);
```

**getKitsune()**: Provides you a kitsune image!

```js
let data = await Anime.getKitsune();
message.channel.send(data);
```

**getPat()**: Provides you a Pat image/gif!

```js
let data = await Anime.getPat();
message.channel.send(data);
```

**getHug()**: Provides you a Hug image/gif!

```js
let data = await Anime.getHug();
message.channel.send(data);
```

**getWaifu()**: Provides you a Waifu image/gif!

```js
let data = await Anime.getWaifu();
message.channel.send(data);
```

**getKiss()**: Provides you a cry image/gif!

```js
let data = await Anime.getKiss();
message.channel.send(data);
```

**getSlap()**: Provides you a cry image/gif!

```js
let data = await Anime.getSlap();
message.channel.send(data);
```

**getCry()**: Provides you a cry image/gif!

```js
let data = await Anime.getCry();
message.channel.send(data);
```

**getSmug()**: Provides you a cry image/gif!

```js
let data = await Anime.getSmug();
message.channel.send(data);
```

**getPunch()**: Provides you a punch image/gif!

```js
let data = await Anime.getPunch();
message.channel.send(data);
```
