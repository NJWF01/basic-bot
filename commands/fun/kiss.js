const { MessageEmbed } = require('discord.js')

exports.run = async (client, message, args) => {

  function doKissAction() {
    var rand = [
        'https://media1.tenor.com/images/a847660ade42682bfb74b07d940ddfcc/tenor.gif?itemid=13287601',
        'https://media.tenor.com/images/b6568cd61850430f6b7b74dbda505fc4/tenor.gif',
        'https://media.tenor.com/images/db9133b2f027c16ad9fdd89cae218da8/tenor.gif',
        'https://media.giphy.com/media/ZRSGWtBJG4Tza/giphy.gif',
        'https://media.giphy.com/media/oHZPerDaubltu/giphy.gif',
        'https://acegif.com/wp-content/uploads/anime-kiss-m.gif',
        'https://media.giphy.com/media/bm2O3nXTcKJeU/giphy.gif',
        'https://media.giphy.com/media/nyGFcsP0kAobm/giphy.gif',
        'https://media0.giphy.com/media/KH1CTZtw1iP3W/source.gif'
    ];

    return rand[Math.floor(Math.random() * rand.length)];
}
  const personTagged = message.mentions.members.first();


  const embed = new MessageEmbed()
  .setTitle('KISS')
  .setDescription('`' + message.author.tag + '`' + ' has kissed ' + personTagged.displayName)
  .setImage(doKissAction())
  .setColor('RANDOM')


                   message.channel.send(embed)


        }
