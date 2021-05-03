module.exports = client => {
  const { prefix } = require('../config.json')
  console.log(' ===== Bot loaded everything correctly =====')
  client.user.setActivity(`${prefix}help`, {type: 'WATCHING'})
}
