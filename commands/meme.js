const { RichEmbed } = require('discord.js');
const fetch = require("node-fetch")
module.exports = {
    name: 'meme',
    description: "Sends A Meme",
    execute: async (message, args, bot) =>{
        let msg = await message.channel.send("Generating...")

        fetch("https://api.ksoft.si/images/random-meme", {
            method: "GET",
            headers: { Authorization: "Bearer TOKENHERE" }
            })
        .then(res => res.json()).then(body => {
            if(!body) return message.reply("Whoops I Broke, Try Again")
        })

        
        const embed = new RichEmbed()
        .setTitle('Epico')
        .setDescription(`${body.title} - ${body.source}`)
        .setImage(body.image_url)
        .setColor(bot.colors.presets.done)
        .setTimestamp(Date.now());
 
 

        message.edit(embed);
        

    }

}