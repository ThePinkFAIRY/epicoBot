/* Imports */
const { inspect } = require('util');
const { post } = require('snekfetch');
const { RichEmbed } = require('discord.js');

module.exports = {
	name: 'eval',
    description: 'Evaluates Javascript Code (Only Staff Can Use This)',
    
	execute(message, args, bot) {
        if (!bot.guilds.get('663915667384172545').members.get(message.author.id).roles.has('663916405363703808')) return;

		if (!args[0]) {

			var embed = new RichEmbed()
			.setTitle('Eval')
			.setDescription('You need to enter javascript code to evaluate!')
            .setTimestamp(message.createdTimestamp)
            .setColor(bot.colors.presets.error);
			message.channel.send(embed);
			return;

		}

		var embed = new RichEmbed()
		.setTitle('Eval')
		.setDescription('Working on it...')
        .setTimestamp(message.createdTimestamp)
        .setColor(bot.colors.presets.almost);

		message.channel.send(embed).then(async msg => {
		try {

			let code = await eval(args.join(" ")); // Store the eval code to a variable
			let inspected = await inspect(code); // inspect the code eval output
			
			if (inspected.toString().length < (1900 - message.content.length)) {
				embed = new RichEmbed()
				.setTitle('Eval')
				.setDescription(`\`\`\`js\n${args.join(' ')}\n\`\`\`\n\n\`\`\`js\n${inspected}\n\`\`\``)
                   .setTimestamp(message.createdTimestamp)
                   .setColor(bot.colors.presets.done);
				msg.edit(embed);
			} else {
				await post("https://hastebin.com/documents").send(inspected.toString()).then(response => {

				embed = new RichEmbed()
				.setTitle('Eval')
				.setDescription(`\`\`\`js\n${args.join(' ')}\`\`\`\n\nhttps://hastebin.com/${response.body.key}`)
                .setTimestamp(message.createdTimestamp)
                .setColor(bot.colors.presets.done);

				msg.edit(embed);

				}).catch(err => {

					embed = new RichEmbed()
					.setTitle('Eval')
					.setDescription(`:warning: Hastebin is down [0-1800] \`\`\`js\n${inspected.toString().substring(0, 1800)}\`\`\``)
                    .setTimestamp(message.createdTimestamp)
                    .setColor(bot.colors.presets.error);

					return msg.edit(embed);
				})

		
			}



		} catch (e) {

			embed = new RichEmbed()
			.setTitle('Eval')
			.setDescription(`There was an error with eval.\n\n:x: Error: \`\`\`js\n${e}\`\`\``)
            .setTimestamp(message.createdTimestamp)
            .setColor(bot.colors.presets.error);
			msg.edit(embed)
		}

		
	
	});

}

}
