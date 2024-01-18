const mineflayer = require("mineflayer");

/**
 * @param {mineflayer.Bot} bot
 */

module.exports = (bot) => {
  bot.on("chat", (username, message) => {
    let prefixes = ['!', '#', '%', '&']
    let info = message.split('info')[0];
    let server = message.split('server')[0];
    let prefix = message.split('prefixes')[0];
    let creds = message.split('credits')[0];
    let bkits = message.split('8bkits')[0];
    let list = message.split('list')[0];
    if(prefixes.includes(info)) {
        bot.chat(`/w ${username} > kits is the best 8b8t k1tbot! It is developed by 0comment and ItzFezy. Join our server for more info using !server.`)
    };
    if(prefixes.includes(server)) {
      bot.chat(`/w ${username} Join the official 8bKits discord server for more information! https://discord.gg/zCaeQqTz6k`)
    };
    if(prefixes.includes(prefix)) {
      bot.chat('> The kits official prefixes are: ! # % &')
    };
    if(prefixes.includes(creds)) {
      bot.chat('> The developers of kits are 0comment and ItzFezy. The bot maintainer is j3vu. Kit makers: NotRustxy/UV3J')
    };
    if(prefixes.includes(bkits)) {
      bot.chat('> 8bkits are the kit providers to kits, this group is maintained by all the people who maintain this bot.')
    };
    if(prefixes.includes(list)) {
      bot.chat('> The current kits are: construction, pvp, fireworks, wither, concrete, ores, signs, totems, grass, beacon, grief, storage, building')
    };
  });
};
