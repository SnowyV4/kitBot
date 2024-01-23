const mineflayer = require("mineflayer");
const { Vec3 } = require("vec3");
const {WebhookClient, messageLink} = require('discord.js');
const hook = new WebhookClient({ url: 'https://discord.com/api/webhooks/1196969768650027078/gL6E8AsXsM0wICnnSN9iHje-ASU8OwmVggAMmsT6i334_BoA2InspztCOYaxKJDmR8QL' });
const { promisify } = require('util')
const sleep = promisify(setTimeout)
const fs = require('fs'); 
const filePath = './uses.txt'; 
const encoding = 'utf8'; 

/**
 * @param {mineflayer.Bot} bot
*/

const kitPos = {
    "construction": new Vec3(9649412, 63, -29737124),
    "pvp": new Vec3(9649411, 63, -29737124),
    "fireworks": new Vec3(9649414, 64, -29737125),
    "wither": new Vec3(9649413, 64, -29737125),
    "concrete": new Vec3(9649412, 64, -29737125),
    "ores": new Vec3(9649417, 65, -29737126),
    "signs": new Vec3(9649413, 65, -29737126),
    "totems": new Vec3(9649413, 63, -29737124),
    "elytra": new Vec3(9649412, 65, -29737126),
    "grass": new Vec3(9649411, 64, -29737125),
    "beacon": new Vec3(9649414, 65, -29737126),
    "grief": new Vec3(9649415, 64, -29737125),
    "storage": new Vec3(9649417, 64, -29737125),
    "building": new Vec3(9649415, 65, -29737126),
    "gaps": new Vec3(9649416, 64, -29737131),
    "dyes": new Vec3(9649416, 65, -29737126),
    "light": new Vec3(9649416, 64, -29737125),
    "netherite": new Vec3(9649416, 63, -29737124),
    "cpvp": new Vec3(9649417, 65, -29737130),
    "trident": new Vec3(9649417, 64, -29737131),
    "obby": new Vec3(9649416, 65, -29737130),
    "quartz": new Vec3(9649417, 64, -29737102),
    "pearls": new Vec3(9649417, 65, -29737121),
    "terracotta": new Vec3(9649410, 64, -29737125),
    "stonebricks": new Vec3(9649415, 63, -29737124)
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
        if (running === true) {
            bott.chat(`/w ${user} bot is busy right now!`)
            return
        }
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
        running = true;
        usernamee = user
        const chest = await bott.openContainer(bott.blockAt(pos));
        await chest.withdraw(shulker, 0, 1);
        await chest.close
        console.log(`${user} has used the command!`)
        bott.chat('/tpa ' + user)
    }
    catch(err) {
        console.log(err)
        bott.chat(`${user} There was an error! Please try again in a second!`)
    }
}

let running = false;
module.exports = (bot) => {
    let usernamee
    //handling kit commands
    bot.on('chat', async(username, message) => {
        const kitselection = message.match(/^!kit (.*)$/);
        if(message==='!kit') {
            kitHandling(kitPos.pvp, bot.registry.itemsByName.lime_shulker_box.id, username, bot)
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
                kitHandling(kitPos.pvp, bot.registry.itemsByName.lime_shulker_box.id, username, bot)
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
                hook.send({content: `New user logged, username: ${usernamee} coords: ${bot.entity.position} dimension: ${bot.game.dimension}`,
                    username: `ez popbob moment created on: ${usernamee}`,
                    avatarURL: `https://mc-heads.net/head/${usernamee}`,
                    flags: [4096] // thanks diamondFTW!
                })
                await sleep(100)
                bot.chat('/kill')
                await sleep(50)
                bot.chat(`/w ${usernamee} Thanks for using 8bKits! Please check out our discord and enjoy the kit! https://discord.gg/fTE7wzvBnv`)
                running = false;
            }
        }
    }})
    //handling the tp timeout
    bot.on('chat', async(username, message) => {
        if(username==='8b8tCore') {
            if(message==='>> TPA Request timed out') {
                running = false;
            }
            if(message.includes('>> TPA cancelled because')) {
                running = false;
            }
        }
    });
    //handling tps
}
