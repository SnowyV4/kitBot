const mineflayer = require("mineflayer");
const { promisify } = require('util')
const sleep = promisify(setTimeout)

/**
 * @param {mineflayer.Bot} bot
 */

module.exports = (bot) => {
    bot.on('login', async() => {
        bot.chat('/login Jake0508')
        await sleep(50)
        bot.chat('/8b8t')
    })
}
