const mineflayer = require("mineflayer");
const { Vec3 } = require("vec3");
const {WebhookClient, messageLink} = require('discord.js');
const { promisify } = require('util')
const sleep = promisify(setTimeout)
const fs = require('fs'); 
const filePath = './uses.txt'; 
const encoding = 'utf8'; 

/**
 * @param {mineflayer.Bot} bot
*/

const kitPos = {
    "construction": new Vec3(),
    "pvp": new Vec3(),
    "fireworks": new Vec3(),
    "wither": new Vec3(),
    "concrete": new Vec3(),
    "ores": new Vec3(),
    "signs": new Vec3(),
    "totems": new Vec3(),
    "elytra": new Vec3(),
    "grass": new Vec3(),
    "beacon": new Vec3(),
    "grief": new Vec3(),
    "storage": new Vec3(),
    "building": new Vec3(),
    "gaps": new Vec3(),
    "dyes": new Vec3(),
    "light": new Vec3(),
    "netherite": new Vec3(),
    "cpvp": new Vec3(),
    "trident": new Vec3(),
    "obby": new Vec3(),
    "quartz": new Vec3(),
    "pearls": new Vec3(),
    "terracotta": new Vec3(),
    "stonebricks": new Vec3()
}

const blacklisted = [
    
]

const VIP = [
    'J3VU', // j3vu
    'NotRustxy' // rusty
];

const DEV = [
    'ItzFezy', //fezy
    '0comment' //snowy/0comment
]

async function kitHandling(pos, shulker, user, bott) {
    try {
        const fileContents = fs.readFileSync(filePath, { encoding: encoding });
        const lines = fileContents.split('\n');
        for (const line of lines) {
            const num = parseInt(fileContents)
            const written = num + 1
            const text = written.toString()
            fs.writeFile(filePath, text, (err) => {
                if (err) console.log(err);
            })
        }
        usernamee = user
        const chest = await bott.openContainer(bott.blockAt(pos));
        await chest.withdraw(shulker, 0, 1);
        await chest.close
        console.log(`${user} has used the command!`)
        bott.chat('/tpa ' + user)
    }
    catch(err) {
        console.log(err)
        bott.chat(`/w ${user} There was an error! Please try again in a second!`)
    }
}
let usernamee
module.exports = (bot) => {
    //handling kit commands
    bot.on('chat', async(username, message) => {
        const kitselection = message.match(/^!kit (.*)$/);
        if(message==='!kit') {
            kitHandling(kitPos.pvp, bot.registry.itemsByName.red_shulker_box.id, username, bot)
        }
        if(kitselection && kitselection[1]) {
            console.log(`${username} has used kit: ${kitselection[1]}`)
            if(username==blacklisted) {
                bot.chat(`/w ${username} you are blacklisted from the bot!`)
                return
            };
            if(kitselection[1]==='construction') {
                kitHandling(kitPos.construction, bot.registry.itemsByName.magenta_shulker_box.id, username, bot)
            }
            if(kitselection[1]==='pvp') {
                kitHandling(kitPos.pvp, bot.registry.itemsByName.red_shulker_box.id, username, bot)
            }
            if(kitselection[1]==='fireworks') {
                kitHandling(kitPos.fireworks, bot.registry.itemsByName.blue_shulker_box.id, username, bot)
            }
            if(kitselection[1]==='wither') {
                kitHandling(kitPos.wither, bot.registry.itemsByName.red_shulker_box.id, username, bot)
            }
            if(kitselection[1]==='concrete') {
                kitHandling(kitPos.fireworks, bot.registry.itemsByName.gray_shulker_box.id, username, bot)
            }
            if(kitselection[1]==='ores' || kitselection[1]==='ore') {
                kitHandling(kitPos.fireworks, bot.registry.itemsByName.yellow_shulker_box.id, username, bot)
            }
            if(kitselection[1]==='signs' || kitselection[1]==='sign') {
                kitHandling(kitPos.signs, bot.registry.itemsByName.light_gray_shulker_box.id, username, bot)
            }
            if(kitselection[1]==='totems' || kitselection[1]==='totem') {
                kitHandling(kitPos.totems, bot.registry.itemsByName.light_gray_shulker_box.id, username, bot)
            }
            if(kitselection[1]==='grass') {
                kitHandling(kitPos.grass, bot.registry.itemsByName.lime_shulker_box.id, username, bot)
            }
            if(kitselection[1]==='beacon' || kitselection[1]==='beacon') { 
                kitHandling(kitPos.beacon, bot.registry.itemsByName.black_shulker_box.id, username, bot)
            }
            if(kitselection[1]==='grief' || kitselection[1]==='tnt') {
                kitHandling(kitPos.grief, bot.registry.itemsByName.red_shulker_box.id, username, bot)
            }
            if(kitselection[1]==='storage' || kitselection[1]==='stash') {
                kitHandling(kitPos.storage, bot.registry.itemsByName.orange_shulker_box.id, username, bot)
            }
            if(kitselection[1]==='building') {
                kitHandling(kitPos.building, bot.registry.itemsByName.white_shulker_box.id, username, bot)
            }
            if(kitselection[1]==='elytra' || kitselection[1]==='elytras') {
                kitHandling(kitPos.elytra, bot.registry.itemsByName.red_shulker_box.id, username, bot)
            }
            if(kitselection[1]==='gaps' || kitselection[1]==='food') {
                kitHandling(kitPos.gaps, bot.registry.itemsByName.red_shulker_box.id, username, bot)
            }
            if(kitselection[1]==='dyes') {
                kitHandling(kitPos.dyes, bot.registry.itemsByName.magenta_shulker_box.id, username, bot)
            }
            if(kitselection[1]==='light' || kitselection[1]==='lighting') {
                kitHandling(kitPos.light, bot.registry.itemsByName.shulker_box.id, username, bot)
            }
            if(kitselection[1]==='netherite') {
                kitHandling(kitPos.netherite, bot.registry.itemsByName.blue_shulker_box.id, username, bot)
            }
            if(kitselection[1]==='cpvp' || kitselection[1]==='refill') {
                kitHandling(kitPos.cpvp, bot.registry.itemsByName.orange_shulker_box.id, username, bot)
            }
            if(kitselection[1]==='trident' || kitselection[1]==='tridents') {
                kitHandling(kitPos.trident, bot.registry.itemsByName.black_shulker_box.id, username, bot)
            }
            if(kitselection[1]==='obby' || kitselection[1]==='obsidian') {
                kitHandling(kitPos.obby, bot.registry.itemsByName.black_shulker_box.id, username, bot)
            }
            if(kitselection[1]==='quartz') {
                kitHandling(kitPos.quartz, bot.registry.itemsByName.magenta_shulker_box.id, username, bot)
            }
            if(kitselection[1]==='pearls') {
                kitHandling(kitPos.pearls, bot.registry.itemsByName.lime_shulker_box.id, username, bot)
            }
            if(kitselection[1]==='terracotta') {
                kitHandling(kitPos.terracotta, bot.registry.itemsByName.magenta_shulker_box.id, username, bot)
            }
            if(kitselection[1]==='stone-bricks') {
                kitHandling(kitPos.stonebricks, bot.registry.itemsByName.light_gray_shulker_box.id, username, bot)
            }
        }
    })
    //handling after the tp aka kys
    bot.on('chat', async(username, message) => {
        if(username==='8b8tCore') {
            if(message==='>> Teleporting...') {
                const fileContents = fs.readFileSync(filePath, { encoding: encoding });
                const lines = fileContents.split('\n');
                for (const line of lines) {
                const num = parseInt(fileContents)
                const written = num + 1
                const text = written.toString()
                fs.writeFile(filePath, text, (err) => {
                    if (err) throw err;
                })
                await sleep(250)
                bot.chat('/kill')
                await sleep(50)
                bot.chat(`/w ${usernamee} Thanks for using 8bKits! Please check out our discord and enjoy the kit! https://discord.gg/fTE7wzvBnv`)
            }
        }
    }})
    //handling the tp timeou
    //handling tps
}
