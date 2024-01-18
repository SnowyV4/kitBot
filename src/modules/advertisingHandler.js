const mineflayer = require("mineflayer");
const { promisify } = require('util')
const sleep = promisify(setTimeout)

const interval = 4; //time in minutes

/**
 * @param {mineflayer.Bot} bot
 */

module.exports = (bot) => {
    async function sendMessage() {
        bot.chat("> kits is the best 8b8t kitbot! Use !info for more information!")
        await sleep(interval * 60 * 1000) //converts minutes
        sendMessage()
    }
    bot.on('login', async () => sendMessage())
}
