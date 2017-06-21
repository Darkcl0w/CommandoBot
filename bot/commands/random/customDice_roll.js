/* Fichier de commande pour le jet de dé
*/

//Charger le bot
const commando = require('discord.js-commando');

//Initialisation de la commande
class DiceRollCommand extends commando.Command{
	
	//Constructeur de la classe
	constructor(client){
		//appel du super Constructeur
		/* Definition de la commande.
		* name = nom de la commande (celle qui sera tapée dans le chan)
		* group = le dossier dans lequel est situé ce fichier (pour que l'index le trouve)
		* memberName
		* description
		* examples
		* args = les arguments entrés à la suite de la commande
		*/
		super(client, {
			name: 'roll',
			group: 'random',
			memberName: 'roll',
			description: 'Lance un dé customisé',
			examples: ['!roll 6'],
			args: [
			{
				key: 'number',
				prompt: 'Ajoutez un nombre pour faire un dé personnalisé',
				type: 'integer',
				default: 6
			}
			]
		});
	}
	
	/** Méthode asynchrone pour lancer le dé et répondre au client
	* @param message Le mesasge initial.
	* @param args L'argument entré à la suite de la commande.
	*/
	async run (message, args){
		const { number } = args;
		if ( number < 1 )
			message.reply("Fait pas le malin toi !");
		else{			
			var roll = Math.floor(Math.random() * number) + 1;
			message.reply("Vous avez fait : **" + roll + "**");
		}
	}
}

//Export de la commande
module.exports = DiceRollCommand;