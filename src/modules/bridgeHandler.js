const {WebhookClient} = require('discord.js');
const bridgeHook = new WebhookClient({ url: 'https://discord.com/api/webhooks/1196272520618315787/ENVDj7vHhQ65UA66bwuImUj3DXv_JYPamkMXzCYgc6cfJWC9bXfn9k4Fd2qdPAhir47n' });
const mineflayer = require("mineflayer");

/**
 * @param {mineflayer.Bot} bot
 */

module.exports = (bot) => {
    bot.on('chat', async(username, message) => {
        if(username===bot.username) return
        if(username==='EuropaIsStrong1' || username==='EuropaIsStrong1')
        message = message.split('@everyone').join(`*@*everyone`)
        bridgeHook.send({
            content: message,
            username: username,
            avatarURL: `https://mc-heads.net/head/${username}`,
            flags: [4096] // thanks diamondFTW!
        })
    })
}
