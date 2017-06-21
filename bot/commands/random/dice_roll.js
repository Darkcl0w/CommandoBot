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
			name: 'dice',
			group: 'random',
			memberName: 'dice',
			description: 'Lance un dé à 6 faces',
			examples: ['!dice'],
		});
	}
	
	/** Méthode asynchrone pour lancer le dé et répondre au client
	* @param message Le mesasge initial.
	* @param args L'argument entré à la suite de la commande.
	*/
	async run (message, args){
		var roll = Math.floor(Math.random() * 6) + 1;
		message.reply("Vous avez fait : **" + roll + "**");
	}
}

//Export de la commande
module.exports = DiceRollCommand;