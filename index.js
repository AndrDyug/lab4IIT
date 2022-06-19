const { Telegraf } = require('telegraf')

const bot = new Telegraf("5316113628:AAF01LocCIt3-em6cA-RNgwGc2bLxQcqLRI")
bot.start((ctx) => ctx.reply('start'))
bot.hears(`hello`, (ctx) => ctx.reply(`...`))
bot.launch()

process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
