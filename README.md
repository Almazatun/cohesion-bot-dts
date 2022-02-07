# Cohesion-bot 🤖

### Notes

In order to run the application make the following steps:

* Create an App in Discord
  https://discord.com/developers/applications

* Copy from your created application part confirm info:
    * APPLICATION ID ---> CLIENT_ID
    * APPLICATION TOKEN ---> DISCORD_TOKEN
    * GUILD_ID
    * TENOR_APIKEY

### Installation

```bash
# Clone the repository
git clone https://github.com/Almazatun/cohesion-bot-dts.git
# Enter into the directory
cd cohesion-bot-dts/
# Install the dependencies
npm install
```

### Starting the application

```bash
$ npm run build
# prod
$ npm run start
# development
$ npm run dev

```

### Starting the application using Docker

```bash
# Build the image
$ docker build -t cohesion-bot-dts .
# Run the image
$ docker run -d cohesion-bot-dts
# Logs the running docker container
$ docker logs -f <CONTAINER ID>
```

## Deploying commands

Slash commands in server

<img src="./assets/deploy_commands.jpg">

`/info server`

<img src="./assets/info_server.png">

`/info commands`

<img src="./assets/info_commands.png">

`/news vc`

<img src="./assets/vc_news.png">

## Features & Commands

* `>wrd cohesion [you can use any word]`

<img src="./assets/wrd_cohesion.jpg">

* `>react [1, 2, 3]` 

<img src="./assets/react_commands.png">

* `>gif <title>` 

<img src="./assets/writer.gif">

* `>image <title>`  
