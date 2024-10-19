require("./database/module")

//GLOBAL PAYMENT
global.storename = "𝐕𝐢𝐩𝐓𝐳𝐲"
global.dana = "085805338638"
global.qris = "https://b.top4top.io/p_3199egvlc0.jpg"


// GLOBAL SETTING
global.owner = "628388198229"
global.namabot = "𝐕𝐢𝐩𝐞𝐫"
global.nomorbot = "6282291507974"
global.namaCreator = "𝐕𝐢𝐩𝐓𝐳𝐲"
global.linkyt = "https://youtube.com/@vipertzyoffc"
global.autoJoin = false
global.antilink = false
global.versisc = '𝐕𝟏'

// DELAY JPM
global.delayjpm = 5500

// SETTING PANEL
global.apikey = 'PLTC'
global.capikey = 'PLTA'
global.domain = 'https://domain.com'
global.eggsnya = '15'
global.location = '1'



//GLOBAL THUMB

global.codeInvite = ""
global.imageurl = 'https://b.top4top.io/p_31995kalq0.jpg'
global.isLink = 'https://whatsapp.com/channel/0029VaNBep7AojYwtfrm3237'
global.packname = "Vip"
global.author = "Viper"
global.jumlah = "5"


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})