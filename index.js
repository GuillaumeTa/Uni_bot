const Discord = require('discord.js');

const {prefix, token} = require('./config.json');

// eslint-disable-next-line one-var
const client = new Discord.Client();

client.login(token);

client.once(
    'ready',
    () => {

        // eslint-disable-next-line no-console
        console.log('Ready!');

    }
);

client.on(
    'message',
    (message) => {

        if (message.content.startsWith(`${prefix}ping`)) {

            const ping = `${Date.now() - message.createdTimestamp} ms`;

            message.channel.send(`Le ping est ${ping}`);

        } else if (message.content.startsWith(`${prefix}server`)) {

            message.channel.send(`Le nom du serveur est : 
            ${message.guild.name}\n
            Nombre d'utilisateurs : 
            ${message.guild.memberCount}`);

        } else if (message.content.startsWith(`${prefix}avatar`)) {

            if (!message.mentions.users.size) {

                return message.channel.send(`Votre avatar est : 
                ${message.author.displayAvatarURL({'format': 'gif'})}`);

            }

        }

    }
);