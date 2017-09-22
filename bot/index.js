/*
APP DETAILS
Client ID: 
Client Secret:


APP BOT USER
Username: Wall-E#1484
Token:
*/

//Initialisation du bot Client
const commando = require('discord.js-commando');
const bot = new commando.Client({
    commandPrefix: '!',
    //owner: '<@243060086170189824>8251',
    owner: '243060086170189824',
    disableEveryone: true,	
    unknownCommandResponse: false
});

//Fichiers de commandes
bot.registry.registerGroup('random', 'Random'); //Jets de dé
bot.registry.registerGroup('irl', 'Irl'); //Météo et autre
bot.registry.registerGroup('music', 'Music'); //Météo
bot.registry.registerDefaults(); //Commandes par défauts
//Path pour le directory des commandes
bot.registry.registerCommandsIn(__dirname + "/commands");


//Initialisation des prefixes
const token = "";
var mention = "";
var memberCount = bot.users.size;
var servercount = bot.guilds.size;
/*
bot.on("ready", () => {
	var servers = bot.guilds.array().map(g => g.name).join(',');
	console.log("--------------------------------------");
console.log('[!]Connexion en cours... \n[!]Veuillez Patienter! \n[!]Les évenement sont après ! :)  \n[!]Les pr�fix actuels:  ' + prefix + "\n[!]Mentions = " + mention + "\n[!]Nombre de membres: " + memberCount + "\n[!]Nombre de serveurs: " + servercount);
});*/
/*
bot.on('message', message => {
	if (message.content === ("ping")){
	message.reply('...\n PONG !!!!!');
} else if (message.content === ("bonjour") || message.content === ("yo") || message.content === ("yop")){
	message.reply('bonjour à toi ');
} else if(message.content.startsWith('!botname')){
	bot.user.setUsername(message.content.substr(9));
} else if (message.content === "!stats") {
	let m = " ";
	m += "Il y a actuellement  ${message.guild.channels.size} channels sur ce serveurs \n";
	m += "je suis en compagnie de ${message.guild.members.size} membres \n";
	m += "je suis présent dans ${bot.guild.size} serveurs \n";
	message.reply(m);
	message.author.sendMessage(m).catch(console.log); 
	}*/
// });

bot.login(token)
