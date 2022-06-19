const { Telegraf } = require('telegraf')

const bot = new Telegraf("api key")
bot.start((ctx) => ctx.reply('start'))
bot.hears(`hi`, (ctx) => ctx.reply(`...`))
bot.launch()

process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
