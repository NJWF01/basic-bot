const discord = require('discord.js');
const fs = require('fs');
const config = require('./config.json');
const walk = require("walk");
const { resolve } = require("path");
const client = new discord.Client();

client.config = config;

/////////////////////////////////////////////////////////////////////////////////////////


client.on('guildMemberAdd', guildMember =>{
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.id === config.welcomeroleID);

    guildMember.roles.add(welcomeRole);
    guildMember.guild.channels.cache.get(config.WchannelID).send(`Welcome <@${guildMember.user.id}> to our server! \n If your interested in playing our server please go to: \n <#835131271822704658> \n <#835213087111774290>`)
});




///////////////////////////////////////////////////////////////////////////////
         // command handler

 client.commands = new discord.Collection();
 client.categories = new discord.Collection();

 const walker = walk.walk("./commands");

 walker.on("file", function (root, stats, next) {
   if (!stats.name.endsWith(".js")) return;
   const category = resolve(root).split("\\").slice(-1)[0];
   if (!client.categories.has(category)) {
     client.categories.set(category, []);
   }

   let props = require(`${resolve(root)}/${stats.name}`);
   let commandName = stats.name.split(".")[0];
   console.log(`Attempting to load command ${commandName}`);
   client.commands.set(commandName, props);
   client.categories.set(category, [
     ...client.categories.get(category),
     commandName,
   ]);
   next();
 });

console.clear();
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

       // event handler

       fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});


client.login(config.token)
