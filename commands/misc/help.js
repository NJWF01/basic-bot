exports.run = (client, message) => {
  const { MessageEmbed } = require('discord.js')
  const helpMessage = client.categories.map((commands, category) => `***${category}***:
\`\`\`
${commands.map(command => `${client.config.prefix}${command}`).join(", ")}
\`\`\``);

  const embed = new MessageEmbed()
  .setTitle('Help Menu')
  .setDescription(helpMessage)
  .setColor('RANDOM')
  .setTimestamp()
  .setFooter(`Command executed by ${message.author.username}`)
  message.channel.send(embed);
};
