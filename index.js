//vars

const Discord = require('discord.js');
const bot = new Discord.Client();
const token = 'NjY0MDA4NTM1MjM5Mjk0OTc2.XhQ0LQ.U9jVaGgrCzrw_7x85pfxqYnJn0Y';
const prefix = 'epico ';
const fs = require('fs');

bot.commands = new Discord.Collection();

//comands
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith(".js"));
for (const file of commandFiles){
    const command = require(`./commands/${file}`);

    bot.commands.set(command.name, command);
}


//online
bot.on('ready', () =>{
    console.log("Online!");
    bot.user.setActivity(`epico help`, { type: 'PLAYING' });
    bot.colors = require('./misc/colors.json');
})

//commands

bot.on('message', message =>{

    if (!message.content.toLowerCase().startsWith(prefix)) return;
  const args = message.content.slice(prefix.length).split(/ +/);
        const command = args.shift().toLowerCase();
        if (!bot.commands.get(command)) return;
        try {
bot.commands.get(command).execute(message, args, bot);
} catch (e) {

message.reply('error');
console.log(e);


}


}
  
);


//greetings

bot.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find(ch => ch.name === 'member-log');
    if (!channel) return;
    const joinmessages = [`Welcome to the server, ${member}`, `Fear not, ${member} is hear!`, `big bang bong ${member} has arrived`, `omfg this is very much epico for as ${member} has joined`]
    random = joinmessages[Math.floor(Math.random()*(list.length))];
    channel.send(joinmessages[random]);
  });




//login
bot.login(token);