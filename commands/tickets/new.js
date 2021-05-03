
const { MessageEmbed } = require('discord.js')
const config = require('../../config.json');

exports.run = async (client, message, args) => {
  if(message.guild.channels.cache.find(channel => channel.name === `ticket-${message.author.username}`)) {
			return message.reply('you already have a ticket, please close your exsisting ticket first before opening a new one!');
		}

		message.guild.channels.create(`ticket-${message.author.username}`, {
			permissionOverwrites: [
				{
					id: message.author.id,
					allow: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
				},
				{
					id: message.guild.roles.everyone,
					deny: ['VIEW_CHANNEL'],
				},
				{
					id: message.guild.roles.cache.get(config.staffroleid),
					allow: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
				}
				
			],
			type: 'text',
		}).then(async channel => {
			message.reply(`you have successfully created a ticket! Please click on ${channel} to view your ticket.`);

      const embed = new MessageEmbed()
      .setTitle('TICKET')
      .setColor('RANDOM')
      .setTimestamp()
      .setDescription(`Hi ${message.author}, welcome to your ticket! Please be patient, we will be with you shortly. If you would like to close this ticket please run \`${config.prefix}delete\``)

			channel.send(embed);
		});
	}
