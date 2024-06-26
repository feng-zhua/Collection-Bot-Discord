const {REST, Routes} = require('discord.js')
require('dotenv').config();

const commands = [
    {
        name: 'hey',
        description: 'Replies with hey!',
    },
];

const rest = new REST({ version: '10'}).setToken(process.env.TOKEN);

(async() => {
    try {
        console.log('Registring slash commands');
        await rest.put(
            Routes.applicationGuildCommands(process.env.USER_ID, process.env.GUILD_ID),
            {body: commands}
        )
        console.log('Slash commands were registered')
    } catch (error) {
        console.log(`'There was an error', ${error}`);
    }
})();
