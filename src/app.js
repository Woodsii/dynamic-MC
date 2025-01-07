import mf from "mineflayer"
import { mineflayer as mineflayerViewer } from 'prismarine-viewer';

const bot = mf.createBot({
  host: 'x', // Minecraft server IP, replace x
  port: 25565,       // Port number (default is 25565)
  username: 'Bot',   // Bot username
  auth: 'offline',   // Offline mode authentication
  version: '1.20.1'
})

bot.on('chat', (username, message) => {
  if (username === bot.username) return
  bot.chat(message)
})

bot.once('spawn', () => {
  mineflayerViewer(bot, { 
    port: 3007, 
    firstPerson: true,
    version: '1.20.1'
  }); // port is the viewer port, not the server port
});

// Log errors and kick reasons:
bot.on('kicked', console.log)
bot.on('error', console.log)
