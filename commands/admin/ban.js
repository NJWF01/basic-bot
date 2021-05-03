const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args) => {
  if (message.member.hasPermission("BAN_MEMBERS")) {
            const member = message.guild.member(message.mentions.users.first());
            if (!member) return message.channel.send("No member was mentioned");
            let reason = args.slice(1).join(" ");
            if (!reason) reason = 'no reason given';
            if (message.member.roles.highest.position < member.roles.highest.position) return message.channel.send('You can not ban roles higher then yours!');
            if (member.bannable) {
                try {
                    await member.send(`You've been banned from ${message.guild.name} for "${reason}"`);
                } catch (e) {
                    // ignore
                }
                member.ban({
                    reason: `Authorized by ${message.author.tag}`
                }).then(() => {
                    // const banEmbed = new MessageEmbed()
                    //     .setColor('RANDOM')
                    //     .setImage('https://tenor.com/view/trump-donaldtrump-interview-banned-cnn-gif-7677105')
                    //     .setTimestamp()
                    //     .setFooter(`Command ran by ${message.author.tag}`)
                    //     .setDescription(`${member.user.username} has been banned`);
                    // message.channel.send(banEmbed);

                    message.channel.send(`${member.user.username} has been banned \n https://tenor.com/view/trump-donaldtrump-interview-banned-cnn-gif-7677105`)
                });
            } else {
                return;
            }
        } else {
            return message.channel.send('You do not have the correct Permissions for this');
        }
      }
