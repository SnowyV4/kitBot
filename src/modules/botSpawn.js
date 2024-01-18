const mineflayer = require("mineflayer");

/**
 * @param {mineflayer.Bot} bot
 */

module.exports = (bot) => {
    bot.on('login', () => {
        bot.chat('/8b8t')
    })
}
