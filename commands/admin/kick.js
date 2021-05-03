const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args) => {

              if (message.member.hasPermission("KICK_MEMBERS")) {
                const member = message.guild.member(message.mentions.users.first());
                if (!member) return message.channel.send("no member was mentioned \n Please try again");
                let reason = args.slice(1).join(" ")
                if (!reason) reason = 'No reason given';
                if (message.member.roles.highest.position < member.roles.highest.position) return message.channel.send("You can not kick people with roles higher then you");

                member.kick(member, `Authorized by ${message.author.tag}`).then(() => {
                    const kickedEmbed = new MessageEmbed()
                        .setColor('RANDOM')
                        .setDescription(`${member.user.username} has been kicked by ${message.author.tag}`)
                        .setTimestamp()
                        .setFooter(`command ran by ${message.author.username}`)
                    message.channel.send(kickedEmbed)
                })
            } else return message.channel.send("You have insuffient permissions to run this command")
    }
