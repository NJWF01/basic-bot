const { MessageEmbed } = require('discord.js')

exports.run = async (client, message, args) => {
  if (message.member.hasPermission("MANAGE_MESSAGES")) {
            const wUser = message.guild.member(message.mentions.users.first())
            if (wUser.hasPermission("MANAGE_MESSAGES")) return
            if (!wUser) return message.channel.send('You have not mentioned a user')
            let time = args[1]

            const noTimeEmbed = new MessageEmbed()
                .setColor('RANDOM')
                .setDescription("No time was mentioned")


            if (!time) return message.channel.send(noTimeEmbed);

            let muteRole = require('../../config.json').mute_role
            if (muteRole === 'MUTE ROLE HERE') muteRole = message.guild.roles.cache.find(role => role.name === 'Muted')
            if (wUser.roles.cache.has(muteRole)) return message.reply("The user is already muted.")

            wUser.roles.add(muteRole)

            const mutedEmbed = new MessageEmbed()
                .setColor('RANDOM')
                .setDescription(`${wUser.user.username} has been muted for ${time}`)

            message.channel.send(mutedEmbed);



            // fs.writeFile('./database/user-logs.json', JSON.stringify(userlogs), (err) => {
                // if (err) console.log(err);
            }
}
