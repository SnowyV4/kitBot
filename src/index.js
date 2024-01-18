//THIS IS BOT INTIALIZATION
const fs = require("fs");
const path = require("path");
const mineflayer = require("mineflayer");

const OPTIONS = {
    host: "8b8t.me",
    username: "kits",
    port: '25565',
    version: '1.20.1'
};

function injectModules(bot) {
    const MODULES_DIRECTORY = path.join(__dirname, "modules");
    const modules = fs
      .readdirSync(MODULES_DIRECTORY)
      .filter((x) => x.endsWith(".js"))
      .map((pluginName) => require(path.join(MODULES_DIRECTORY, pluginName)));
  
    bot.loadPlugins(modules);
}

const bot = mineflayer.createBot(OPTIONS);
injectModules(bot)
