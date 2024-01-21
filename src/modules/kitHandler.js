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
    "construction": new Vec3(9649421, 63, -29737099),
    "pvp": new Vec3(9649421, 63, -29737098),
    "fireworks": new Vec3(9649419, 63, -29737094),
    "wither": new Vec3(9649421, 64, -29737101),
    "concrete": new Vec3(9649421, 63, -29737100),
    "ores": new Vec3(9649417, 63, -29737096),
    "signs": new Vec3(9649421, 63, -29737102),
    "totems": new Vec3(9649421, 63, -29737101),
    "elytra": new Vec3(9649421, 64, -29737102),
    "grass": new Vec3(9649421, 63, -29737097),
    "beacon": new Vec3(9649420, 63, -29737094),
    "grief": new Vec3(9649421, 63, -29737095),
    "storage": new Vec3(9649417, 63, -29737095),
    "building": new Vec3(9649421, 63, -29737096),
    "gaps": new Vec3(9649418, 63, -29737094),
    "dyes": new Vec3(9649417, 63, -29737097),
    "light": new Vec3(9649417, 63, -29737098),
    "netherite": new Vec3(9649417, 63, -29737099),
    "cpvp": new Vec3(9649417, 63, -29737100),
    "trident": new Vec3(9649417, 63, -29737101),
    "obby": new Vec3(9649417, 63, -29737102),
    "quartz": new Vec3(9649417, 64, -29737102)
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
let running = false;
module.exports = (bot) => {
    let usernamee
    //handling kit commands
    bot.on('chat', async(username, message) => {
        const kitselection = message.match(/^!kit (.*)$/);
        if(message==='!kit') {
            if (running === true) {
                bot.chat(`/w ${username} bot is busy right now!`)
                return
            }
            const fileContents = fs.readFileSync(filePath, { encoding: encoding });
            const lines = fileContents.split('\n');
            for (const line of lines) {
                const num = parseInt(fileContents)
                const written = num + 1
                const text = written.toString()
                fs.writeFile(filePath, text, (err) => {
                    if (err) throw err;
                })
            }
            running = true;
            usernamee = username
            const chest = await bot.openContainer(bot.blockAt(kitPos.pvp));
            await chest.withdraw(bot.registry.itemsByName.lime_shulker_box?.id, 0, 1);
            await chest.close
            console.log(`${username} has used the command!`)
            bot.chat('/tpa ' + username)
        }
        if(kitselection && kitselection[1]) {
            console.log(`${username} has used kit: ${kitselection[1]}`)
            if(username==blacklisted) {
                bot.chat(`/w ${username} you are blacklisted from the bot!`)
                return
            };
            if(kitselection[1]==='construction') {
                if (running === true) {
                    bot.chat(`/w ${username} bot is busy right now!`)
                    return
                }
                running = true;
                usernamee = username
                const chest = await bot.openContainer(bot.blockAt(kitPos.construction));
                await chest.withdraw(bot.registry.itemsByName.magenta_shulker_box?.id, 0, 1);
                await chest.close
                console.log(`${username} has used the command!`)
                bot.chat('/tpa ' + username)    
            }
            if(kitselection[1]==='pvp') {
                if (running === true) {
                    bot.chat(`/w ${username} bot is busy right now!`)
                    return
                }
                running = true;
                usernamee = username
                const chest = await bot.openContainer(bot.blockAt(kitPos.pvp));
                await chest.withdraw(bot.registry.itemsByName.lime_shulker_box?.id, 0, 1);
                await chest.close
                console.log(`${username} has used the command!`)
                bot.chat('/tpa ' + username)
            }
            if(kitselection[1]==='fireworks') {
                if (running === true) {
                    bot.chat(`/w ${username} bot is busy right now!`)
                    return
                }
                running = true;
                usernamee = username
                const chest = await bot.openContainer(bot.blockAt(kitPos.fireworks));
                await chest.withdraw(bot.registry.itemsByName.blue_shulker_box?.id, 0, 1);
                await chest.close
                console.log(`${username} has used the command!`)
                bot.chat('/tpa ' + username)
            }
            if(kitselection[1]==='wither') {
                if (running === true) {
                    bot.chat(`/w ${username} bot is busy right now!`)
                    return
                }
                running = true;
                usernamee = username
                const chest = await bot.openContainer(bot.blockAt(kitPos.wither));
                await chest.withdraw(bot.registry.itemsByName.red_shulker_box?.id, 0, 1);
                await chest.close
                console.log(`${username} has used the command!`)
                bot.chat('/tpa ' + username)
            }
            if(kitselection[1]==='concrete') {
                if (running === true) {
                    bot.chat(`/w ${username} bot is busy right now!`)
                    return
                }
                running = true;
                usernamee = username
                const chest = await bot.openContainer(bot.blockAt(kitPos.concrete));
                await chest.withdraw(bot.registry.itemsByName.gray_shulker_box?.id, 0, 1);
                await chest.close
                console.log(`${username} has used the command!`)
                bot.chat('/tpa ' + username)
            }
            if(kitselection[1]==='ores' || kitselection[1]==='ore') {
                if (running === true) {
                    bot.chat(`/w ${username} bot is busy right now!`)
                    return
                }
                running = true;
                usernamee = username
                const chest = await bot.openContainer(bot.blockAt(kitPos.ores));
                await chest.withdraw(bot.registry.itemsByName.yellow_shulker_box?.id, 0, 1);
                await chest.close
                console.log(`${username} has used the command!`)
                bot.chat('/tpa ' + username)
            }
            if(kitselection[1]==='signs' || kitselection[1]==='sign') {
                if (running === true) {
                    bot.chat(`/w ${username} bot is busy right now!`)
                    return
                }
                running = true;
                usernamee = username
                const chest = await bot.openContainer(bot.blockAt(kitPos.signs));
                await chest.withdraw(bot.registry.itemsByName.light_gray_shulker_box?.id, 0, 1);
                await chest.close
                console.log(`${username} has used the command!`)
                bot.chat('/tpa ' + username)
            }
            if(kitselection[1]==='totems' || kitselection[1]==='totem') {
                if (running === true) {
                    bot.chat(`/w ${username} bot is busy right now!`)
                    return
                }
                running = true;
                usernamee = username
                const chest = await bot.openContainer(bot.blockAt(kitPos.totems));
                await chest.withdraw(bot.registry.itemsByName.light_gray_shulker_box?.id, 0, 1);
                await chest.close
                console.log(`${username} has used the command!`)
                bot.chat('/tpa ' + username)
            }
            if(kitselection[1]==='grass') {
                if (running === true) {
                    bot.chat(`/w ${username} bot is busy right now!`)
                    return
                }
                running = true;
                usernamee = username
                const chest = await bot.openContainer(bot.blockAt(kitPos.grass));
                await chest.withdraw(bot.registry.itemsByName.lime_shulker_box?.id, 0, 1);
                await chest.close
                console.log(`${username} has used the command!`)
                bot.chat('/tpa ' + username)
            }
            if(kitselection[1]==='beacon' || kitselection[1]==='beacon') {
                if (running === true) {
                    bot.chat(`/w ${username} bot is busy right now!`)
                    return
                }
                running = true;
                usernamee = username
                const chest = await bot.openContainer(bot.blockAt(kitPos.beacon));
                await chest.withdraw(bot.registry.itemsByName.black_shulker_box?.id, 0, 1);
                await chest.close
                console.log(`${username} has used the command!`)
                bot.chat('/tpa ' + username)
            }
            if(kitselection[1]==='grief' || kitselection[1]==='tnt') {
                if (running === true) {
                    bot.chat(`/w ${username} bot is busy right now!`)
                    return
                }
                running = true;
                usernamee = username
                const chest = await bot.openContainer(bot.blockAt(kitPos.grief));
                await chest.withdraw(bot.registry.itemsByName.red_shulker_box?.id, 0, 1);
                await chest.close
                console.log(`${username} has used the command!`)
                bot.chat('/tpa ' + username)
            }
            if(kitselection[1]==='storage') {
                if (running === true) {
                    bot.chat(`/w ${username} bot is busy right now!`)
                    return
                }
                running = true;
                usernamee = username
                const chest = await bot.openContainer(bot.blockAt(kitPos.storage));
                await chest.withdraw(bot.registry.itemsByName.orange_shulker_box?.id, 0, 1);
                await chest.close
                console.log(`${username} has used the command!`)
                bot.chat('/tpa ' + username)
            }
            if(kitselection[1]==='building') {
                if (running === true) {
                    bot.chat(`/w ${username} bot is busy right now!`)
                    return
                }
                running = true;
                usernamee = username
                const chest = await bot.openContainer(bot.blockAt(kitPos.building));
                await chest.withdraw(bot.registry.itemsByName.white_shulker_box?.id, 0, 1);
                await chest.close
                bot.chat('/tpa ' + username)
            }
            if(kitselection[1]==='elytra') {
                if (running === true) {
                    bot.chat(`/w ${username} bot is busy right now!`)
                    return
                }
                running = true;
                usernamee = username
                const chest = await bot.openContainer(bot.blockAt(kitPos.elytra));
                await chest.withdraw(bot.registry.itemsByName.red_shulker_box?.id, 0, 1);
                await chest.close
                console.log(`${username} has used the command!`)
                bot.chat('/tpa ' + username)
            }
            if(kitselection[1]==='gaps' || kitselection[1]==='food') {
                if (running === true) {
                    bot.chat(`/w ${username} bot is busy right now!`)
                    return
                }
                running = true;
                usernamee = username
                const chest = await bot.openContainer(bot.blockAt(kitPos.gaps));
                await chest.withdraw(bot.registry.itemsByName.red_shulker_box?.id, 0, 1);
                await chest.close
                console.log(`${username} has used the command!`)
                bot.chat('/tpa ' + username)
            }
            if(kitselection[1]==='dyes') {
                if (running === true) {
                    bot.chat(`/w ${username} bot is busy right now!`)
                    return
                }
                running = true;
                usernamee = username
                const chest = await bot.openContainer(bot.blockAt(kitPos.dyes));
                await chest.withdraw(bot.registry.itemsByName.magenta_shulker_box?.id, 0, 1);
                await chest.close
                console.log(`${username} has used the command!`)
                bot.chat('/tpa ' + username)
            }
            if(kitselection[1]==='light' || kitselection[1]==='lighting') {
                if (running === true) {
                    bot.chat(`/w ${username} bot is busy right now!`)
                    return
                }
                running = true;
                usernamee = username
                const chest = await bot.openContainer(bot.blockAt(kitPos.light));
                await chest.withdraw(bot.registry.itemsByName.shulker_box?.id, 0, 1);
                await chest.close
                console.log(`${username} has used the command!`)
                bot.chat('/tpa ' + username)
            }
            if(kitselection[1]==='netherite') {
                if (running === true) {
                    bot.chat(`/w ${username} bot is busy right now!`)
                    return
                }
                running = true;
                usernamee = username
                const chest = await bot.openContainer(bot.blockAt(kitPos.netherite));
                await chest.withdraw(bot.registry.itemsByName.blue_shulker_box?.id, 0, 1);
                await chest.close
                console.log(`${username} has used the command!`)
                bot.chat('/tpa ' + username)
            }
            if(kitselection[1]==='cpvp' || kitselection[1]==='refill') {
                if (running === true) {
                    bot.chat(`/w ${username} bot is busy right now!`)
                    return
                }
                running = true;
                usernamee = username
                const chest = await bot.openContainer(bot.blockAt(kitPos.cpvp));
                await chest.withdraw(bot.registry.itemsByName.orange_shulker_box?.id, 0, 1);
                await chest.close
                console.log(`${username} has used the command!`)
                bot.chat('/tpa ' + username)
            }
            if(kitselection[1]==='trident' || kitselection[1]==='tridents') {
                if (running === true) {
                    bot.chat(`/w ${username} bot is busy right now!`)
                    return
                }
                running = true;
                usernamee = username
                const chest = await bot.openContainer(bot.blockAt(kitPos.trident));
                await chest.withdraw(bot.registry.itemsByName.black_shulker_box?.id, 0, 1);
                await chest.close
                console.log(`${username} has used the command!`)
                bot.chat('/tpa ' + username)
            }
            if(kitselection[1]==='obby' || kitselection[1]==='obsidian') {
                if (running === true) {
                    bot.chat(`/w ${username} bot is busy right now!`)
                    return
                }
                running = true;
                usernamee = username
                const chest = await bot.openContainer(bot.blockAt(kitPos.obby));
                await chest.withdraw(bot.registry.itemsByName.black_shulker_box?.id, 0, 1);
                await chest.close
                console.log(`${username} has used the command!`)
                bot.chat('/tpa ' + username)
            }
            if(kitselection[1]==='quartz') {
                if (running === true) {
                    bot.chat(`/w ${username} bot is busy right now!`)
                    return
                }
                running = true;
                usernamee = username
                const chest = await bot.openContainer(bot.blockAt(kitPos.quartz));
                await chest.withdraw(bot.registry.itemsByName.magenta_shulker_box?.id, 0, 1);
                await chest.close
                console.log(`${username} has used the command!`)
                bot.chat('/tpa ' + username)
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
