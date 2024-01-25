const mineflayer = require("mineflayer");
const {WebhookClient} = require('discord.js');
const bridgeHook = new WebhookClient({ url: 'https://discord.com/api/webhooks/1198817499353976923/3oyCUc1FcQ5FZkKr1-m5CEjPPPBFxci4qYFlcZ8z-gHZVA5EtNdAftWfysNdeYhm5yVS' });

/**
 * @param {mineflayer.Bot} bot
 */

const DEVS = [
  "0comment",
  "ItzFezy",
  "basefind"
]

module.exports = (bot) => {
    bot.on('chat', async(username, message) => {
        const userToBlacklist = message.match(/^!blacklist (.*)$/);
        if(!username===DEVS) return
        if(userToBlacklist && userToBlacklist[1]) {
            bot.chat(`/ignore ${userToBlacklist[1]}`)
            bridgeHook.send({
            content: `Person blacklisted: ${userToBlacklist[1]}`,
            username: `Dev who blacklisted: ${username}`,
            avatarURL: `https://mc-heads.net/head/${username}`,
            flags: [4096] // thanks diamondFTW!
        })
        bot.chat(`/w ${userToBlacklist[1]} You have been blacklisted by: ${username}`)
        }
    })
    bot.on('chat', async(username, message) => {
        const userToBlacklist = message.match(/^!unblacklist (.*)$/);
        if(!username===DEVS) return
        if(userToBlacklist && userToBlacklist[1]) {
            bot.chat(`/unignore ${userToBlacklist[1]}`)
            bridgeHook.send({
            content: `Person unblacklisted: ${userToBlacklist[1]}`,
            username: `Dev who unblacklisted: ${username}`,
            avatarURL: `https://mc-heads.net/head/${username}`,
            flags: [4096] // thanks diamondFTW!
        })
        bot.chat(`/w ${userToBlacklist[1]} You have been unblacklisted by: ${username}`)
        }
    })
}
