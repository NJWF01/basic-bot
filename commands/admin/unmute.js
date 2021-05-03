const { MessageEmbed } = require('discord.js')

exports.run = async (client, message, args) => {
  if (message.member.hasPermission("BAN_MEMBERS")) {
            const user = message.guild.member(message.mentions.users.first());
            if (!user) return message.channel.send('No member was mentionde');

            let muteRole = require('../../config.json').mute_role

            user.roles.remove(muteRole).then(() => {

                const removed = new MessageEmbed()
                    .setColor('RANDOM')
                    .setDescription(`I have unmuted <@${user.id}>`)

                message.channel.send(removed)
            })
        } else return message.channel.send('You do not have the right permission');
}
