const { Telegraf } = require('telegraf')

const bot = new Telegraf("5437006460:AAFQM3cXmSGHwTQBOsb7Nu6I7SMK60cgPMc")
bot.start((ctx) => ctx.reply('start'))
bot.hears(`hello`, (ctx) => ctx.reply(`Hello World`))
bot.launch()

process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
