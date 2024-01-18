const mineflayer = require("mineflayer");
const { Vec3 } = require("vec3");
const {WebhookClient} = require('discord.js');
const hook = new WebhookClient({ url: 'https://discord.com/api/webhooks/1196969768650027078/gL6E8AsXsM0wICnnSN9iHje-ASU8OwmVggAMmsT6i334_BoA2InspztCOYaxKJDmR8QL' });
const { promisify } = require('util')
const sleep = promisify(setTimeout)

/**
 * @param {mineflayer.Bot} bot
*/

const kitPos = {
    "construction": new Vec3(9653214, 72, -29732204),
    "pvp": new Vec3(9653215, 72, -29732204),
    "fireworks": new Vec3(9653216, 72, -29732204),
    "wither": new Vec3(9653217, 72, -29732204),
    "concrete": new Vec3(9653218, 72, -29732204),
    "ores": new Vec3(9653219, 72, -29732204),
    "signs": new Vec3(9653220, 72, -29732204),
    "totems": new Vec3(9653221, 72, -29732204),
    "blank": new Vec3(9653214, 73, -29732204),
    "grass": new Vec3(9653215, 73, -29732204),
    "beacon": new Vec3(9653216, 73, -29732204),
    "grief": new Vec3(9653217, 73, -29732204),
    "storage": new Vec3(9653218, 73, -29732204),
    "building": new Vec3(9653219, 73, -29732204),
}

const VIP = [
    'J3VU', // j3vu
    'NotRustxy' // rusty
];

const DEV = [
    'ItzFezy', //fezy
    '0comment' //snowy/0comment
]

module.exports = (bot) => {
    let usernamee
    //handling kit commands
    bot.on('chat', async(username, message) => {
        const kitselection = message.match(/^!kit (.*)$/);
        if(kitselection && kitselection[1]) {
            if(kitselection[1]==='construction') {
                usernamee = username
                const chest = await bot.openContainer(bot.blockAt(kitPos.construction));
                await chest.withdraw(bot.registry.itemsByName.magenta_shulker_box.id, 0, 1);
                chest.close
                console.log(`${username} has used the command!`)
                bot.chat('/tpa ' + username)
            }
            if(kitselection[1]==='pvp') {
                usernamee = username
                const chest = await bot.openContainer(bot.blockAt(kitPos.pvp));
                await chest.withdraw(bot.registry.itemsByName.lime_shulker_box.id, 0, 1);
                chest.close
                console.log(`${username} has used the command!`)
                bot.chat('/tpa ' + username)
            }
            if(kitselection[1]==='fireworks') {
                usernamee = username
                const chest = await bot.openContainer(bot.blockAt(kitPos.fireworks));
                await chest.withdraw(bot.registry.itemsByName.blue_shulker_box.id, 0, 1);
                chest.close
                console.log(`${username} has used the command!`)
                bot.chat('/tpa ' + username)
            }
            if(kitselection[1]==='wither') {
                usernamee = username
                const chest = await bot.openContainer(bot.blockAt(kitPos.wither));
                await chest.withdraw(bot.registry.itemsByName.red_shulker_box.id, 0, 1);
                chest.close
                console.log(`${username} has used the command!`)
                bot.chat('/tpa ' + username)
            }
            if(kitselection[1]==='concrete') {
                usernamee = username
                const chest = await bot.openContainer(bot.blockAt(kitPos.concrete));
                await chest.withdraw(bot.registry.itemsByName.gray_shulker_box.id, 0, 1);
                chest.close
                console.log(`${username} has used the command!`)
                bot.chat('/tpa ' + username)
            }
            if(kitselection[1]==='ores') {
                usernamee = username
                const chest = await bot.openContainer(bot.blockAt(kitPos.ores));
                await chest.withdraw(bot.registry.itemsByName.yellow_shulker_box.id, 0, 1);
                chest.close
                console.log(`${username} has used the command!`)
                bot.chat('/tpa ' + username)
            }
            if(kitselection[1]==='signs') {
                usernamee = username
                const chest = await bot.openContainer(bot.blockAt(kitPos.signs));
                await chest.withdraw(bot.registry.itemsByName.light_gray_shulker_box.id, 0, 1);
                chest.close
                console.log(`${username} has used the command!`)
                bot.chat('/tpa ' + username)
            }
            if(kitselection[1]==='totems') {
                usernamee = username
                const chest = await bot.openContainer(bot.blockAt(kitPos.totems));
                await chest.withdraw(bot.registry.itemsByName.light_gray_shulker_box.id, 0, 1);
                chest.close
                console.log(`${username} has used the command!`)
                bot.chat('/tpa ' + username)
            }
            if(kitselection[1]==='grass') {
                usernamee = username
                const chest = await bot.openContainer(bot.blockAt(kitPos.grass));
                await chest.withdraw(bot.registry.itemsByName.lime_shulker_box.id, 0, 1);
                chest.close
                console.log(`${username} has used the command!`)
                bot.chat('/tpa ' + username)
            }
            if(kitselection[1]==='beacon') {
                usernamee = username
                const chest = await bot.openContainer(bot.blockAt(kitPos.beacon));
                await chest.withdraw(bot.registry.itemsByName.black_shulker_box.id, 0, 1);
                chest.close
                console.log(`${username} has used the command!`)
                bot.chat('/tpa ' + username)
            }
            if(kitselection[1]==='grief') {
                usernamee = username
                const chest = await bot.openContainer(bot.blockAt(kitPos.grief));
                await chest.withdraw(bot.registry.itemsByName.red_shulker_box.id, 0, 1);
                chest.close
                console.log(`${username} has used the command!`)
                bot.chat('/tpa ' + username)
            }
            if(kitselection[1]==='storage') {
                usernamee = username
                const chest = await bot.openContainer(bot.blockAt(kitPos.storage));
                await chest.withdraw(bot.registry.itemsByName.orange_shulker_box.id, 0, 1);
                chest.close
                console.log(`${username} has used the command!`)
                bot.chat('/tpa ' + username)
            }
            if(kitselection[1]==='building') {
                usernamee = username
                const chest = await bot.openContainer(bot.blockAt(kitPos.building));
                await chest.withdraw(bot.registry.itemsByName.white_shulker_box.id, 0, 1);
                chest.close
                console.log(`${username} has used the command!`)
                bot.chat('/tpa ' + username)
            }
        }
    })
    //handling after the tp aka kys
    bot.on('chat', async(username, message) => {
        if(username==='8b8tCore') {
            if(message==='>> Teleporting...') {
                await sleep(250)
                hook.send({
                    content: `New user logged, username: ${usernamee} coords: ${bot.entity.position} dimension: ${bot.game.dimension}`,
                    username: `ez popbob moment created on: ${usernamee}`,
                    avatarURL: `https://mc-heads.net/head/${usernamee}`,
                    flags: [4096] // thanks diamondFTW!
                })
                await sleep(50)
                bot.chat('/kill')
                await sleep(50)
                bot.chat(`/w ${usernamee} Thanks for using 8bKits! Please check out our discord and enjoy the kit! https://discord.gg/fTE7wzvBnv`)
            }
        }
    })
}
