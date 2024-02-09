const mineflayer = require("mineflayer");
const {WebhookClient} = require('discord.js');
const bridgeHook = new WebhookClient({ url: '' });
const fs = require('fs'); 
const filePath = './uses.txt'; 
const encoding = 'utf8'; 

/**
 * @param {mineflayer.Bot} bot
 */

const DEVS = [
  "0comment",
  "ItzFezy",
  "basefind"
]

module.exports = (bot) => {
  bot.on("chat", (username, message) => {
    let prefixes = ['!', '#', '%', '&']
    const kitselection = message.match(/^!suggest (.*)$/);
    let info = message.split('info')[0];
    let server = message.split('server')[0];
    let prefix = message.split('prefixes')[0];
    let creds = message.split('credits')[0];
    let bkits = message.split('8bkits')[0];
    let list = message.split('list')[0];
    let command = message.split('commands')[0];
    let uses = message.split('uses')[0];
    if(prefixes.includes(info)) {
        bot.chat(`/w ${username} > kits is the best 8b8t k1tbot! It is developed by 0comment and ItzFezy. Join our server for more info using !server.`)
    };
    if(prefixes.includes(uses)) {
      const fileContents = fs.readFileSync(filePath, { encoding: encoding });
      const lines = fileContents.split('\n'); 
      for (const line of lines) {
        bot.chat(`I have been used ${fileContents} times!`)
      }
    }
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
      bot.chat(`/w ${username} The current kits are: construction, pvp, fireworks, wither, concrete, ores, signs, totems, grass, beacon, grief, storage, building, elytra, gaps, dyes, light, netherite`)
      bot.chat(`/w ${username} cpvp/refill, trident, obsidian, pearls, terracotta, stone-bricks`)
    };
    if(prefixes.includes(command)) {
      bot.chat(`> The current commands are: !list, !kit, !prefixes, !credits, !server, !info, !suggest, !uses`)
    };
    if(kitselection && kitselection[1]) {
      bridgeHook.send({
        content: kitselection[1],
        username: username,
        avatarURL: `https://mc-heads.net/head/${username}`,
        flags: [4096] // thanks diamondFTW!
    })
    }
    if(username==='0comment') {
      if(message==='!kill') {
        bot.chat('/kill')
      }
    }
  });
};
