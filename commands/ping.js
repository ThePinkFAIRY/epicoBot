const { RichEmbed } = require('discord.js');
module.exports = {
    name: 'ping',
    description: "Hello World, But Not Hello World",
    execute(message, args, bot){
        const embed = new RichEmbed()
        .setTitle('Epico')
        .setDescription(`pong`)
        .setColor(bot.colors.presets.done)
        .setTimestamp(Date.now());
 
 

        message.channel.send(embed);

    }

}

