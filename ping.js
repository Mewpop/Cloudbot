module.exports = {
    commands: '^ping',
    callback: (message, arguments, text, client) =>{
        message.reply('Hmm! Wait I am calculating your ping...').then(resultMessage => {
            const ping = resultMessage.createdTimesstamp - message.createdTimesstamp
            message.reply(`My latence is ${ping}, Your Ping is ${client.ws.ping}`)
        })
    }
}