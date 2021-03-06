let discord = require("discord.js");

module.exports = {
     path: "../../commands/Misc/regextest.js",
     help: {
          name: "regextest",
          aliases: "regex"
     },
     run: async (client,message) => {
        		let regex = message.content.split(" | ")[0].split(" ").slice(1);
	      		let match = message.content.split(" | ")[1].match(regex);
        		let i = 0;
			  if(match){
					let embed = new discord.RichEmbed()
					.setTitle("Regex Match")
					.setColor("#00ff00")
					.addField("Regex:",regex)
					.addField("Input:",match.input)
					match.slice(1,match.length).forEach(m => {
            				m == undefined ? ++i : embed.addField(`Group ${++i}`,m);
          				})
					embed.setFooter(`by: ${message.member.displayName}`, message.author.displayAvatarURL)
					message.channel.send(embed);
			   } else {
					let eembed = new discord.RichEmbed()
					.setTitle("No Match")
					.setColor("#ff0000")
					.addField("Regex:",regex)
					.addField("Input:",message.content.split(" | ")[1])
					.setFooter(`by: ${message.member.displayName}`, message.author.displayAvatarURL)
					message.channel.send(eembed);
			   }
     }
}
