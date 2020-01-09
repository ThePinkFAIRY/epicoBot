const { RichEmbed } = require('discord.js');

module.exports = {
    name: 'avatar',
    description: "Displays Your Discord Avatar",
    execute(message, args, bot){
        const embed = new RichEmbed()
        .setTitle('Epico')
        .setDescription('Your Avatar')
        .setImage(message.author.avatarURL)
        .setTimestamp(Date.now())
        .setColor(bot.colors.presets.done);
       
        message.channel.send(embed);
    
    }
}