import mf from "mineflayer"

const bot = mf.createBot({
  host: '192.168.0.13', // Minecraft server IP
  port: 25565,       // Port number (default is 25565)
  username: 'Bot',   // Bot username
  auth: 'offline'    // Offline mode authentication
})

bot.on('chat', (username, message) => {
  if (username === bot.username) return
  bot.chat(message)
})

// Log errors and kick reasons:
bot.on('kicked', console.log)
bot.on('error', console.log)
