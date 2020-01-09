const { RichEmbed } = require('discord.js');
module.exports = {
    name: 'help',
    description: "All The Commands",
    execute(message, args, bot){
        const embed = new RichEmbed()
        .setTitle('Epico')
        .setColor(bot.colors.otherColors.uwuBlue)
        .setDescription('Commands:\n\`\`\`asciidoc\n' + bot.commands.map(m=>'== epico ' + m.name + '\n' + m.description).join("\n") + '\`\`\`')
        .setTimestamp(Date.now());

        message.channel.send(embed);

    }

}