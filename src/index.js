//THIS IS BOT INTIALIZATION
const fs = require("fs");
const path = require("path");
const mineflayer = require("mineflayer");
const { Client, IntentsBitField, GatewayIntentsBitField, EmbedBuilder, SlashCommandBuilder, PermissionsBitField, Permissions, messageLink } = require('discord.js');
const internal = require("stream");
const client = new Client({
  intents: [
      IntentsBitField.Flags.Guilds,
      IntentsBitField.Flags.GuildMembers,
      IntentsBitField.Flags.GuildMessages,
      IntentsBitField.Flags.MessageContent,
  ]
});

client.on('ready', (c) => {
  console.log(`${c.user.tag}`)
  client.user.setActivity('Watching 8b Kits!');

    const online = new SlashCommandBuilder()
    .setName('onlinecheck')
    .setDescription('will check if a player is online')
    .addStringOption(option => option.setName('username').setDescription('players username').setRequired(true));
    client.application.commands.create(online);

    const ignore = new SlashCommandBuilder()
    .setName('ignore')
    .setDescription('will ignore a player')
    .addStringOption(option => option.setName('username').setDescription('players username').setRequired(true));
    client.application.commands.create(ignore);

    const say = new SlashCommandBuilder()
    .setName('say')
    .setDescription('will say ur text')
    .addStringOption(option => option.setName('text').setDescription('text to send').setRequired(true));
    client.application.commands.create(say);

})
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

client.on('interactionCreate', (interaction) => {
  if(!interaction.isChatInputCommand()) return
  if(interaction.commandName==='onlinecheck') {
    const name = interaction.options.getString('username')
    const playerCI = bot.players[name]
    if (!playerCI) {
      interaction.reply(`${name} is not online!`)
    };
    if(playerCI) {
      interaction.reply(`${name} is online!`)
    }
  };
  if(interaction.commandName==='ignore') {
    const name = interaction.options.getString('username')

    if (!interaction.member.roles.cache.has("1196192536126042172")) return interaction.reply('Missing role!')
    if (interaction.member.roles.cache.has("1196192536126042172")) {
      bot.chat(`/ignore ${name}`)
      interaction.reply('Ignored!')
    }
  };
  if(interaction.commandName==='say') {
    const name = interaction.options.getString('text')

    if(name.includes('/tpa')) {
      interaction.reply('Bot contains something related to a TP!')
      return
    }
    if(name.includes('/tpy')) {
      interaction.reply('Bot contains something related to a TP!')
      return
    }
    if(name.includes('/tpayes')) {
      interaction.reply('Bot contains something related to a TP!')
      return
    }
    if(name.includes('/tpaaccept')) {
      interaction.reply('Bot contains something related to a TP!')
      return
    }
    if(name.includes('/tpadeny')) {
      interaction.reply('Bot contains something related to a TP!')
      return
    }
    bot.chat(name)
    interaction.reply('Sent!')
  };
})

bot.on('chat', (username, message) => {
  let msg = message
  let result = message.includes("@everyone");
  client.channels.cache.get('1196272442100953159').send('```[' + username + '] ' + message + '```')
})

client.on('messageCreate', (message) => {
  // Only handle messages in specified channel
  if (message.author.id === client.user.id) return
  if (message.channel.id == 1196272442100953159) {
    bot.chat(`[${message.author.username}]: ${message.content}`)
  }
  // Ignore messages from the bot itself
})

client.login('')
