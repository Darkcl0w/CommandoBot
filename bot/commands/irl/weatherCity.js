/* Fichier de commande pour la météo
*/

//Charger le bot
const commando = require('discord.js-commando');

//Initialisation de la commande
class WeatherCityCommand extends commando.Command{
	
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
			name: 'weather',
			group: 'irl',
			memberName: 'weather',
			description: 'Affiche la météo du jour et du lendemain',
			examples: ['!météo Pluvigner'],
			args: [
			{
				key: 'location',
				prompt: 'Ajoutez le nom de votre ville pour connaître la météo',
				type: 'string'
			}
			]
		});
	}
	
	/** Méthode asynchrone pour lancer le dé et répondre au client
	* @param message Le mesasge initial.
	* @param args L'argument entré à la suite de la commande.
	*/
	async run (message, args){
		//Import de la librairie js
		const weather = require("weather-js");
		
		//Récupération du
		const { location } = args;
		var unit = "C";
    
		try {
			weather.find({search: location, degreeType: unit, lang:'fr-FR'}, function(err, data) {
				if(err) {
					console.log(Date.now(), "DANGER", "Je ne peut pas trouvé d'information pour la méteo de " + location);
					message.reply("\n" + "Je ne peut pas trouvé d'information pour la méteo de " + location);
				} else {
					data = data[0];
				   console.log("**" + data.location.name + " Maintenant : **\n" + data.current.temperature + "°" + unit + " " + data.current.skytext + ", ressentie " + data.current.feelslike + "°, vent " + data.current.winddisplay + "\n\n**Prévisions pour demain :**\nHaut: " + data.forecast[1].high + "°, Bas: " + data.forecast[1].low + "° " + data.forecast[1].skytextday + " avec " + data.forecast[1].precip + "% de chance de precipitation.");
				   message.reply("\n" + "**" + data.location.name + " Maintenant : **\n" + data.current.temperature + "°" + unit + " " + data.current.skytext + ", ressentie " + data.current.feelslike + "°, vent " + data.current.winddisplay + "\n\n**Prévisions pour demain :**\nHaut: " + data.forecast[1].high + "°, Bas: " + data.forecast[1].low + "° " + data.forecast[1].skytextday + " avec " + data.forecast[1].precip + "% de chance de precipitation.");
				}
			});
		} catch(err) {
			console.log(Date.now(), "ERREUR", "Weather.JS a rencontré une erreur");
			message.reply("Marche pas !");
		}
	}
}

//Export de la commande
module.exports = WeatherCityCommand;