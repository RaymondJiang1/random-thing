### Random Thing

Below are the things that this package offers you.

- Get a random joke
- Get a cute dog
- Get a cute cat

# SETUP

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
