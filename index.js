const Discord = require('discord.js');
const { callback } = require('./ping');
const client = new Discord.Client();



client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setPresence({ activity: { name: "GOOD BOII" } });

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
const reply13 = [
  'You started matchmaking.. Not able to enter the matchmaking. Pls Check your Network/Internet connection.. ',
  'You started matchmaking.. You entered the match!! You played like a bot. You killed 0 players',
  'You started matchmaking.. You entered the match!! You played like KTG/Pro. You killed 11 players, and got BOYAAH!!',
  'You started matchmaking.. You entered the match!! You played average. You killed 4 players.. Next time practice well..'
]
const reply14 = [
  'You started matchmaking of clash squad.. You entered the match!! You killed 7 players',
  'You started matchmaking.. Not able to enter the matchmaking. Pls check your Network/Internet connection..',
  'You started matchmaking.. You entered the match!! You played average. You killed 9 players'
]

const reply15 = [
  'You entered the match.. You killed 12 players.. You leveled up to 1 > 3',
  'You are not able to enter the match.. Pls check your network and try again',
  'You entered the match.. You were in the middle of the match, but your girlfriend called you.. You talked 3 hours with you girlfriend.. You forgot about the match.. But its okay. You didnt get any minus coz its tdm. Dont do this in classic...'
]

const reply16 = [
  'You entered the match.. You killed 6 players.. You leveled up to 1 > 4',
  'You are not able to enter the match.. Check you internet connection and try again',
  'You entered the match.. You were in the middle of the match, but your friend called you.. You went into his house and killed him.. His mother called the police and now you are in the prison.. Congo'
]
const reply17 = [
  'You went into his house.. and came back.. coz it was 12 o clock of midnight',
  'You went into his house.. You drank some booze',
  'You went into his house.. now whay you want to do ? steal, drink, or come back.. Type - "^friend <action>"'
]
const reply18 = [
  'You successfully stole $400. Thats not a good thing..',
  'You were caught stealing..',
  'You successfully stole 100 bucks..',
  'You tried to steal but, you were not able to find the money..'
]
const reply19 = [
   {files: ["https://i.pinimg.com/originals/d3/2c/0b/d32c0b69e97ddeaa2def5a87ec8d2e6e.png"]},
   {files: ["https://i.pinimg.com/originals/7b/fb/08/7bfb08d064145b0216dccce283f70b59.png"]},
   {files: ["https://i.pinimg.com/564x/9c/88/56/9c8856d60e2c9b32c2ea8c522728b895.jpg"]},
   {files: ["https://i.pinimg.com/564x/0b/fb/0c/0bfb0c6a53c8226f02fe3732ee23c754.jpg"]},
   {files: ["https://i.pinimg.com/564x/61/5a/fd/615afd86126ad825c636f1d071c6811f.jpg"]},
   {files: ["https://i.pinimg.com/564x/8e/2f/d0/8e2fd02dc6c2048f5e44fcb5b9a5092b.jpg"]},
   {files: ["https://i.pinimg.com/564x/12/3e/90/123e904667cfcaf78745fa4f43902274.jpg"]}
]
const embed2 = [
  new Discord.MessageEmbed()
  .setTitle("We rolled 8.. And You rolled 10")
  .setDescription("You won $100")
  .setAuthor("You won the game")
  .setFooter("What a scrub!")
  .setColor("GREEN"),
  new Discord.MessageEmbed()
  .setTitle("We rolled 7.. And you rolled 6")
  .setDescription("You lost $100")
  .setAuthor("You have lost")
  .setFooter("Nooooooob")
  .setColor("RED"),
  new Discord.MessageEmbed()
  .setTitle("We rolled 9.. You also rolled 9")
  .setDescription("TIED!!")
  .setAuthor("You didnt lost anything..")
  .setFooter("Bad boi in the house..")
  .setColor("YELLOW")
]
let pref = '^';
p1 = 1
p2 = 1
shaurya = p1 - p2


a = 1 
b = 1
sum = a + b
a1 = 1
a2 = 1
sum1 = a1 + a2
const reply21 = [
  '<@588397196660047885>',
  '<@708598229058584669>',
  '<@716179745418772481>',
  '<@818437800680095744>',
  '<@820917775949496321>',
  '<@741195791967715358>',
  '<@820918445428047882>',
  '<@727885346305605714>',
  '<@819552840354889728>'
]

client.on('message', msg => {
  if (msg.content ===  '^how will be my day today') {
    const index = Math.floor(Math.random() * replies.length)
    msg.channel.send(replies[index])
  }
  if (msg.content === '^buy pizza') {
    msg.channel.send('Hey! You just Bought a pizza. Though I dont know thats for party or for chilling')
  }
  if (msg.content === '^buy pepsi') {
    msg.channel.send('Hey! You  Bought a pepsi. Though I think thats for party <819768726412722189>')
  }
  if (msg.content === '^buy bread') {
    msg.channel.send('Heyyyy! bro You just Bought a bread. Though I think thats for Your mom.')
  }
  if (msg.content === '^eat pizza') {
    msg.channel.send('Good! You just ate pizza')
  }
  if (msg.content === '^eat pepsi') {
    msg.channel.send('Good! You just ate pepsi')
  }
  if (msg.content === '^eat bread') {
    msg.channel.send('Good! You just ate bread')
  }
  if (msg.content === '^hi') {
    const index2 = Math.floor(Math.random() * reply2.length)
    msg.channel.send(reply2[index2])
  }
  if (msg.content === '^mine') {
    const index3 = Math.floor(Math.random() * reply3.length)
    msg.channel.send(reply3[index3])
  }
  if (msg.content === '^daily') {
    const index6 = Math.floor(Math.random() * reply6.length)
    msg.channel.send(reply6[index6])
  }
  if (msg.content === '^how much will i score in my exams') {
    const index4 = Math.floor(Math.random() * reply4.length)
    msg.channel.send(reply4[index4])
  }
  if (msg.content === '^open daily crate') {
    const index5 = Math.floor(Math.random() * reply5.length)
    msg.channel.send(reply5[index5])
  }
  if (msg.content === '^bal' && msg.mentions.users.first()) {
    msg.channel.send('Heyy!! You are not supposed to view a scrub/s balance..')
  }
  if (msg.content === '^balance' && msg.mentions.users.first()) {
    msg.channel.send('Heyy!! You are not supposed to view a scrub/s balance..')
  }
  if (msg.content === '^Balance' && msg.mentions.users.first()) {
    msg.channel.send('Heyy!! You are not supposed to view a scrub/s balance..')
  }
  if (msg.content === '^rob') {
    const index7 = Math.floor(Math.random() * reply7.length)
    msg.channel.send(reply7[index7])
  }
  if (msg.content === '^bal') {
    msg.channel.send('Your bal is 0. Like You Loser!!!!!!')
  }

  if (msg.content === '^info') {
    msg.channel.sendy('My author is ZYPLO.')
  }
  if (msg.content === '^my info') {

    (a + b)
    const index8 = Math.floor(Math.random() * reply8.length)
    msg.channel.send(reply8[index8])
  }
  if (msg.content === '^buy burger') {
    msg.channel.send('You just bought a burger and paid 56$')
  }
  if (msg.content === '^eat burger') {
    msg.channel.send('You Just ate a burger now your food bar is 99%')
  }
  if (msg.content === '^inventory') {
    msg.channel.send('You have ' + shaurya + 'Burgers. And ' + sum1 + 'Pizza') 
  } else {
    if (msg.content === 'eat burger') {
      msg.channel.send("You ate a burger now you have " + shaurya + 'burgers')
    }
  }
  if (msg.content === '^feeling bad') {
    const index9 = Math.floor(Math.random() * reply9.length)
    msg.channel.send(reply9[index9])
  }
  if (msg.content === '^create party') {
    msg.channel.send('Hey you organized a party.. Hey tell your friends to type "^join party". And order something by typing "^order <food item>"')
  }
  if (msg.content === '^join party') {
    msg.channel.send('You have joined the party')
  } 
  if (msg.content === '^order pizza') {
    msg.channel.send('You have ordered pizza for $56')
  } if (msg.content === '^order pizza') {
    const index10 = Math.floor(Math.random() * reply10.length)
    msg.channel.send(reply10[index10])
  }
  if (msg.content === '^order burger') {
    msg.channel.send('You have ordered burger for $126')
  } if (msg.content === '^order burger') {
    const index11 = Math.floor(Math.random() * reply11.length)
    msg.channel.send(reply11[index11])
  }
  if (msg.content === '^order pepsi') {
    msg.channel.send('You have ordered pepsi for $20')
  } if (msg.content === '^order pepsi') {
    const index12 = Math.floor(Math.random() * reply12.length)
    msg.channel.send(reply12[index12])
  }
  if (msg.content === '^play free fire') {
    msg.channel.send('Which Mode do you wanna play? We currently have 2 modes enabled. Classic and Clash squad. Type "^classic to play classic, and "^royal" to play clash squad')
  }
  if (msg.content === '^classic') {
    const index13 = Math.floor(Math.random() * reply13.length)
    msg.channel.send(reply13[index13])
  }
  if (msg.content === '^royal') {
    const index14 = Math.floor(Math.random() * reply14.length)
    msg.channel.send(reply14[index14])
  }
  if (msg.content === '^play music') {
    msg.channel.send('Tere baap ka naukar nhi hu me')
  }
  if (msg.content === '^play pubg') {
    msg.channel.send('We have currently two mode available TDM and Classic.. Type "^play pubg tdm" to play tdm mode. And type "^play pubg classic <map>" to play classic mode. We only have erangle map available.')
  }
  if (msg.content === '^play pubg tdm') {
    msg.channel.send('You have started match making')
  }
  if (msg.content === '^play pubg tdm') {
    const index15 = Math.floor(Math.random() * reply15.length)
    msg.channel.send(reply15[index15])
  }
  if (msg.content === '^play pubg classic') {
    msg.channel.send('You have started the match making')
  }
  if (msg.content === '^play pubg classic') { 
    const index16 = Math.floor(Math.random() * reply16.length)
    msg.channel.send(reply16[index16])
  }
  if (msg.content === '^market') {
    msg.channel.send('You have entered the Market.. In which section do you want to go?. 1 - Food, Car, pets') 
  }
  if (msg.content === '^market food') {
    msg.channel.send('Which item do you want to buy from the food market?.. Do you think You can buy')
  }
  if (msg.content === '^market car') {
    msg.channel.send('Cant access the car maret becoz you are noooob')
  }
  if (msg.content === '^market food 1') {
    msg.channel.send('Current available items are : tomato, brinjal, onions.. To buy a item type "^market food <item>".')
  }
  if (msg.content === '^market food tomato') {
    msg.channel.send('You purchased a tomato')
  }
  if (msg.content === '^market food onions') {
    msg.channel.send('You purchased some onions')
  }
  if (msg.content === '^market food brinjal') {
    msg.channel.send('You purchased brinjals')
  }
  if (msg.content === '^status') {
    msg.channel.send('To check the status of @mr.everything, check #our-bots-status')
  }
  if (msg.content === '^drive') {
    msg.channel.send('Where do you want to go?. The currently availbale places where you can go are - HOSPITAL, Your friend"s apartment. To drive to any of the locations as listed, type - "^drive <location name>"')
  }
  if (msg.content === '^drive hospital') {
    msg.channel.send('You are not wounded. You cant go in the hospital')
  }
  if (msg.content === '^drive friend apartment') {
    const index17 = Math.floor(Math.random() * reply17.length)
    msg.channel.send(reply17[index17])
  }
  if (msg.content === '^friend steal') {
    const index18 = Math.floor(Math.random() * reply18.length)
    msg.channel.send(reply18[index18])
  }
  if (msg.content === '^firend come back') {
    msg.channel.send('You came back from your friend"s apartment')
  }
  if (msg.content === '^friend drink') {
    msg.channel.send('You drank some booze')
  }
  if (msg.content === '^song') {
    msg.channel.send('Go to youtube and listen by yourself')
  }
  if (msg.content === '^profile') {
    msg.channel.send('go to dank memer and type pls profile.')
  }
  if (msg.content === '^meme') {
    const index19 = Math.floor(Math.random() * reply19.length)
    msg.channel.send(reply19[index19])
  }
  if (msg.content === '^i wanna fry some eggs') {
    msg.channel.send('You fried some eggs')
  }
  if (msg.content === '^i wanna fry some eggs') {
    msg.channel.send({files: ["https://i.pinimg.com/564x/7b/37/a4/7b37a4e1fa8eb927a3ba2a69855b303b.jpg"]})
  }
  if (msg.content === '^pro') {
    const embed = new Discord.MessageEmbed()
    .setTitle("PROFILE")
    .setDescription("JUST A SCRUB. Hey noob cant show your profile coz you are a noob")
    .setColor("RANDOM")
    .setFooter("Just a scrub.")
    msg.channel.send(embed)
  }
  if (msg.content === '^bet') {
    const index20 = Math.floor(Math.random() * embed2.length)
    msg.channel.send(embed2[index20])
  }
  if (msg.content === '^help' && '^HELP' && '^Help') {
    const embed100 = new Discord.MessageEmbed()
    .setAuthor("HELP!")
    .addField("1. MARKET = ^market")
    .addField("2. ^drive")
    .addField("3. profile = ^pro")
    .addField("gamble = ^bet")
    .addField("memes = ^meme")
    .addField("Buy food = ^buy <item name>. currently available are burger, pizza, pepsi.")
    .addField("eggs = ^i wanna fry some eggs")
    .addField("song = ^song/^play music. this isnt a real feature.")
    .addField("eat = ^eat <food item>. currently available items for eating are burger, pizza and pepsi")
    .addField("WANNA KNOW YOU SCORE IN EXAMS? TYPE = ^score in exams")
    .addField("HI = ^hi. only for bot(dont mention someone)")
    .addField("OPEN CRATE = ^open daily crate")
    .addField("WANNA DO SOME MINING = ^mine")
    .addField("wanna check our status = ^status")
    .addField("WANNA PLAY PUBG? TYPE = ^play pubg")
    .addField("WANNA PLAY FREE FIRE? TYPE = ^play free fire")
    .addField("ORDER = ^order <food item>")
    .addField("party = ^create party")
    .addField("^feeling bad")
    .addField("INVENTORY = ^inventory")
    .addField("WANNA KNOW HOW WILL BE YOUR DAY TODAY? TYPE = ^how will be my day today")
    .addField('^rob, ^money, ^bal')
    .addField("^info, ^my info")
    .addField("WANNA KNOW YOUR PING? TYPE - ^ping")
    .addField("^who is dumb")
    .setColor("RANDOM")
    .setFooter("HELPING A SCRUB..")
    msg.channel.send(embed100)
  }
  if (msg.content === '^ping') {
    msg.channel.send(`🏓Your ping is ${Date.now() - msg.createdTimestamp}ms.`)
  }
  if (msg.content === '^start jarvis') {
    msg.channel.send("You have to download some packages to start jarvis in your computer.. First is, install python.. second is install pyaudio.. third is install speech recognition.. fourth is pyttsx3.. fifth is pywhatkit.. 6th is webbrowser and subprocess.. Once you have downloaded all the packages type ^jarvis done..")
  }
  if (msg.content === pref + 'jarvis done')
  {
    msg.react("📱")
    msg.channel.send("NOW LEARN SOME CODING AND CODE JARVIS BY YOURSELF")
  }
  if (msg.content.startsWith("^kill") && msg.mentions.users.first()) {
    msg.channel.send("HE/SHE IS DEAD.. CONGO")
  } else if(msg.content === "^kill") {
    msg.channel.send("MENTION SOMEONE TO KILL")
  }
  if (msg.content === '^who is dumb') {
    msg.author.send("THIS IS A SPECIFIC SERVER COMMAND. JOIN THE OFFICIAL SERVER TO USE THE ACTUALL COMMAND." + ' https://discord.gg/N8NUXS4mbZ')
   
  }
  if (msg.content === '^who is dumb') {
    const index21 = Math.floor(Math.random() * reply21.length)
    msg.channel.send(reply21[index21] + 'IS DUMB')
  }
  
  
        
  

  
  
  

  


});



client.login(process.env.token);