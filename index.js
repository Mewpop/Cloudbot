const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
const replies = [
  'Hey I think that your day will be good. If not then Have a nice day!',
  'Bruhh! I think this is the worst day of your life',
  'Hmm! I think this day is average for you.',
  'Ohh I see! Hey My child you are in a big trouble...',
  'Hey this is the best day of your life lets party...',
  'Noooo! You can get a Heart attack(a Very big shock) today..'
]
const reply3 = [
  'Heyy! You Got 2 diamonds. Worth $20000',
  'Hmm! You went deaper and deaper. You didnt found any precious items. You found a snake, That bitten you. You paid $50 for hospital fees',
  'Ahah!! You just found 7 diamonds. And you Got $70000 by selling the diamonds',
  'Ohh! you found nothing',
  'My god!! You just got 2 kg of golds'
]
const reply4 = [
  'Hmm! I am Seeing something. Ohh!! You will rock in your exams..That doesnt mean you will not study for your exams',
  'OHHH!! You will do Bravo in Your Exams..But do study for your exams',
  'Ahh!! I think You will score 100/100 in your exams..But pls study for yourself'
]
const reply5 = [
  'Lol! you suck..You got a 10 days old eaten peice of bread',
  'Heyy!! You got a diamond..You wanna Sell this or gift to your wife/mom.',
  'You got a 1 day old eaten peice of meat/chicken.',
  'You just got O..Like you get in your exams..'
]
const reply6 = [
  'Hey you found 20000000 - 2 = 0000000',
  'you found a daiyl crate',
  'NOO! You found a serial killer. You told him to kill ktg/Your friend..',
  'Heyy!! You found a large pizza',
  'Hmm! You found Pepsi and a pizza slice'
]

const reply2 = [
  'Hi! I think you are the only one who cares about me. And thats why I am giving you a pizza... Hoooraayyy',
  'Hi!',
  'Hi!!! Today my mood is good So i am gonna give You $200 for that'
]
const reply7 = [
  'Ohh! Police caught you red handed While stealing a scrub',
  'Ehh! He was suffering from cancer. You stole $10000 from him.. I think you should be in jail',
  'Hey bruhhh! You got nothing! Bcoz you were stealing a scrub',
  'Hmm!! You stole his $10. I am telling you dont steal from a scrub'
]
client.on('message', gotMessage);

const reply8 = [
  'Your Food bar is 48%, and your Drink bar is 78% I think you should eat a pizza and drink some water.',
  'Your Food bar 98%, and you drink bar 100%. I think you are taking care of your health',
  'Your food and drink bar is below 10 pls eat 2 pizza 1 burger and a pepsi'
]
const reply9 = [
  'Hey!! bro just chill.. Type "^eat burger".. I am giving You a free burger and $200.',
  'Bro i am giving you $2000.. Organize A partyy Type "^create party"'
]
item = [
  'burger',
  'pizza',
  'pepsi'
]
const reply10 = [
  'The delivery buy came and delivered the pizza',
  'Heyy!! The delivery boy came but you didnt open the gate',
  'Bruhh!! The delivery boy came and was delivering the pizza but when he asked for money you killed him..'
]
const reply11 = [
  'The delivery boy came and delivered you the burger',
  'Heyy! The total bill was $126. But You tricked the delivery boy and paid $76. Thats bad',
  'The delivery boy was delivering the burger but when you asked for ketchup, He mudered you.'
]
const reply12 = [
  'The delevery boy was not able to come, to Your place',
  'Delivery was success. But the pepsi was very chilled. When you drank it Then cough catched you paid $200 extra for hospital fees.',
  'Hmm! you shaked the pepsi very hard that its lather fall on you'
]
a = 1
b = 1
sum = a + b
a1 = 1
a2 = 1
sum1 = a1 + a2


function gotMessage(msg) {
  if (msg.content ===  '^how will be my day today') {
    const index = Math.floor(Math.random() * replies.length)
    msg.reply(replies[index])
  }
  if (msg.content === '^buy pizza') {
    msg.reply('Hey! You just Bought a pizza. Though I dont know thats for party or for chilling')
  }
  if (msg.content === '^buy pepsi') {
    msg.reply('Hey! You  Bought a pepsi. Though I think thats for party')
  }
  if (msg.content === '^buy bread') {
    msg.reply('Heyyyy! bro You just Bought a bread. Though I think thats for Your mom.')
  }
  if (msg.content === '^eat pizza') {
    msg.reply('Good! You just ate pizza')
  }
  if (msg.content === '^eat pepsi') {
    msg.reply('Good! You just ate pepsi')
  }
  if (msg.content === '^eat bread') {
    msg.reply('Good! You just ate bread')
  }
  if (msg.content === '^hi') {
    const index2 = Math.floor(Math.random() * reply2.length)
    msg.reply(reply2[index2])
  }
  if (msg.content === '^mine') {
    const index3 = Math.floor(Math.random() * reply3.length)
    msg.reply(reply3[index3])
  }
  if (msg.content === '^daily') {
    const index6 = Math.floor(Math.random() * reply6.length)
    msg.reply(reply6[index6])
  }
  if (msg.content === '^how much will i score in my exams') {
    const index4 = Math.floor(Math.random() * reply4.length)
    msg.reply(reply4[index4])
  }
  if (msg.content === '^open daily crate') {
    const index5 = Math.floor(Math.random() * reply5.length)
    msg.reply(reply5[index5])
  }
  if (msg.content === '^help') {
    msg.reply('|EAT|, |DAILY|, |CRATE|, |DAY|, |HI|, |MINE|, |SCORE IN EXAMS|')
  }
  if (msg.content === '^money') {
    msg.reply('Heyy!! You are suppose to view a scrub/s balance..')
  }
  if (msg.content === '^rob') {
    const index7 = Math.floor(Math.random() * reply7.length)
    msg.reply(reply7[index7])
  }
  if (msg.content === '^bal') {
    msg.reply('Your bal is 0. Like You Loser!!!!!!')
  }
  if (msg.content === '^info') {
    msg.reply('My author is ZYPLO.')
  }
  if (msg.content === '^my info') {
    (a + b)
    const index8 = Math.floor(Math.random() * reply8.length)
    msg.reply(reply8[index8])
  }
  if (msg.content === '^buy burger') {
    msg.reply('You just bought a burger and paid 56$')
  }
  if (msg.content === '^eat burger') {
    msg.reply('You Just ate a burger now your food bar is 99%')
  }
  if (msg.content === '^inventory') {
    msg.reply('You have ' + sum + 'Burgers. And ' + sum1 + 'Pizza') 
  }
  if (msg.content === '^feeling bad') {
    const index9 = Math.floor(Math.random() * reply9.length)
    msg.reply(reply9[index9])
  }
  if (msg.content === '^create party') {
    msg.reply('Hey you organized a party.. Hey tell your friends to type "^join party". And order something by typing "^order <food item>"')
  }
  g = Boolean('there is no party created')
  if (msg.content === '^join party') {
    msg.reply('You have joined the party')
  } if (msg.content === '^join party') {
    msg.reply(g)
  }
  if (msg.content === '^order pizza') {
    msg.reply('You have ordered pizza for $56')
  } if (msg.content === '^order pizza') {
    const index10 = Math.floor(Math.random() * reply10.length)
    msg.reply(reply10[index10])
  }
  if (msg.content === '^order burger') {
    msg.reply('You have ordered burger for $126')
  } if (msg.content === '^order burger') {
    const index11 = Math.floor(Math.random() * reply11.length)
    msg.reply(reply11[index11])
  }
  if (msg.content === '^order pepsi') {
    msg.reply('You have ordered pepsi for $20')
  } if (msg.content === '^order pepsi') {
    const index12 = Math.floor(Math.random() * reply12.length)
    msg.reply(reply12[index12])
  }
  
  


  


};






client.login(process.env.token);