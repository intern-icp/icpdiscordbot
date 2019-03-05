const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on('message', (message) => {
    if(message.content == 'Hello'){
        message.reply('Hello, How arey you?');
        message.reply(bot.user.presence.status)
    }
});

bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag}!`);
    bot.user.setStatus("online");
    

})

bot.on("disconnected", () => {
    bot.user.setStatus("offline");
    console.log(bot.user)
})

bot.on("message", (message) => {
    
        if(message.content == 'showUsers'){
            message.reply(bot.users);
            console.log(bot.users);
        }
    }
)

bot.on("presenceUpdate", (ICPMember) => {
    let ICPMemberStatus = ICPMember.user.presence.status;
    let textChannel = ICPMember.guild.channels.get('535390383312601118');
    if (!textChannel) throw new Error("That channel does not exist.");
    textChannel.send(`${ICPMember} is now ${ICPMemberStatus}`)
})

bot.on("message", (message) => {
    let textChannel = message.guild.channels.get('535390383312601118')
    if(message.content == 'leave'){
        if(message.author.id !== '497871783559561216'){
            textChannel.send(`*»** ${message.author}, you don't have permission to do that!`)
        }
        else {
            message.guild.leave()
        }
    }
}
)

bot.login(process.env.BOT_TOKEN);

