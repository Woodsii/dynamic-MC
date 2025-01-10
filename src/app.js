import mineflayer from "mineflayer"

const bot = mineflayer.createBot({
  host: '192.168.0.13', // Minecraft server IP, replace x
  port: 25565,       // Port number (default is 25565)
  username: 'Bot',   // Bot username
  auth: 'offline',   // Offline mode authentication
  version: '1.20.1'
})

// Log errors and kick reasons:
bot.on('kicked', console.log)
bot.on('error', console.log)

// Controlled via chat
bot.on('chat', async (username, message) => {
  if (username === bot.username) return

  let degrees = 0;
  switch (message) {
    case 'MOVE':
      bot.setControlState('forward', true)

      degrees = 0;
      while (degrees <= 360){
        await bot.look(0.0174533, 0, false) // change yaw by 1 degree
        degrees += 1
      }
      
      break;

    case 'STOP':
      bot.setControlState('forward', false)
      break;

    case 'TURN':
      degrees = 0;
      while (degrees <= 360){
        await bot.look(0.0174533, 0, false) // change yaw by 1 degree
        degrees += 1
      }
      break;
  }
});
