const { fetchUrl, sleep, clockString } = require("../../lib/Function")

module.exports = {
    name: "salam",
    alias: ["assalamualaikum"],
    desc: "Zen Apakah",
    type: "zen",
    start: async (killua, m, { text }) => {
        m.reply(`Wa'alaikum Sallam\n\nJawaban : ${jawab}`)
    }
}