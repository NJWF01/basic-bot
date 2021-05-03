const config = require('../config.json');

module.exports = (client, message) => {
  
  client.on('guildMemberAdd', guildMember =>{
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.id === config.welcomeroleID);

    guildMember.roles.add(welcomeRole);
    guildMember.guild.channels.cache.get(config.WchannelID).send(`Welcome <@${guildMember.user.id}> to our server!`)
    
  });
}
