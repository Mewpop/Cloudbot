const Commando = require('discord.js-commando')

module.exports = class PlayAudioCommand extends Commando.Command {
    constructor(client){
        super(client, {
            name: 'playaudio',
            gorup: 'music',
            memberName: 'playaudio',
            description: 'plays music'
        })
    }

    async run(message) {
        const { voice } = message.member

        if (!voice.channelID) {
            message.reply('Bruhh!! You must be in a voice channel')
            return
        }

        voice.channel.join()
    }
}