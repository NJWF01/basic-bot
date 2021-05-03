exports.run = async (client, message, args) => {
  // const ping = message.createdTimestamp - message.createdTimestamp;
  const msg = await message.channel.send("Pinging...");
  msg.edit(`Pong!🏓 Response ping is: \`${msg.createdTimestamp - message.createdTimestamp}\`ms | Discord API latency is: \`${client.ws.ping}\`ms`);
}
