const { MessageEmbed } = require('discord.js')

exports.run = async (client, message, args) => {
  if (message.member.hasPermission("MANAGE_CHANNELS")) {
            let nukeChannel = message.mentions.channels.first();
            if (!nukeChannel) nukeChannel = message.channel
            const position = nukeChannel.position

            const embed = new MessageEmbed()
               .setColor('RANDOM')
               .addField(":bomb: Channel Nuked by", `${message.author.username}`)
               .addField('Nuked Time', message.createdAt)
               .setImage("https://i.pinimg.com/originals/6c/48/5e/6c485efad8b910e5289fc7968ea1d22f.gif");

               let clonedChannel;
              try {
                  clonedChannel = await nukeChannel.clone();
              } catch (e) {
                  console.log("cloning", e);
                  return
              }
              try {
                  await nukeChannel.delete()
              } catch (e) {
                  console.log("deleting", e);
              }
              await clonedChannel.send(embed);
              await clonedChannel.setPosition(position);
            } else return message.channel.send('You do not have permission for this command');
        }
