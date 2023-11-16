/*
WHATSAPP BOT BY Janith sadanuwan 
WHATSAPP - 94767438882
SUPPORT GROUP - https://t.me/QueenNilu
YOUTUBE - http://youtube.com/janithsadanuwan
*/

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

// PUT YOUR SESSION ID HERE  ##Required 

global.SESSION_ID = 'QueenNilu;;;1yIjVC6R#OIMhbS8kNlzv0xchuD6L_KrDkQNL4F6Ub6fYT3-vxKg' // PUT your session ID BY scan QR 

// databse URL  ##Required 
global.POSTGRESQL_URL = 'postgres://lankesh_user:2RmDq8MmTRnc6dj7gmIVyW1gA0w0lfsm@dpg-clb8ncug1b2c73d2atcg-a.frankfurt-postgres.render.com/lankesh'

 

// ⚙️ OWNER SETTINGS  ⚙️

global.OWNER_NUMBER = '94772609337'

global.OWNER_NAME = 'Lankesh Sandaruwan'

global.TIMEZONE = 'Asia/Colombo' 

global.INBOX_BLOCK_MESSAGE = '' // Inboc Block Message

global.INBOX_BLOCK = 'false' // TO Inbox Block On put true

global.READ_MESSAGE = "true" 

global.OPENAI_API_KEY = "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" 

/*
⚙️ BOT  SETTINGS  ⚙️
*/

global.BOT_NAME = 'ǫᴜᴇᴇɴ ɴɪʟᴜ'

global.FOOTER = 'Queen Nilu 2023'

global.BOT_OFFLINE = false    //  Always Onlne -  | false offline -True

global.STICKER_NAME = '@Lankesh🙂' //sticker

global.LANG = 'SI' // Language (EN-  TO english  ,  SI- TO sinhala )

global.PREFIX = '.' // Bot Prefix

global.CAPTION = 'Poewr by Lankesh © 2023' // Caption

global.ALIVELOGO = 'https://www.facebook.com/share/M4HhvDWx6sQnTGpk/?mibextid=HqNPNq' // Set Alive Logo link 

global.ALIVE_MESSAGE = 'https://wa.me/message/MO5WD73YMT4OK1' // Set Alive Message

global.MAX_SIZE = '500' // Bot Uloading Max size 

global.ANTI_BAD = true // Antibad (on = True , Off = False )

global.ANTI_BAD_ACTION = false

global.ANTI_LINK = true //Anti Link (on = True , Off = False )

global.ANTI_BOTS = false

global.ONLY_GROUP = 'false' // Only group mode

global.GROUP_LINK = 'https://wa.me/message/MO5WD73YMT4OK1' // ur group link


/* 18 + Download Settings */

global.SEX_DL = 'true' // 18 + video dl
      .xnxx.com= 'true'
/* AUTO REPLY SETTINGS */

global.AUTO_STICKER = true

global.AUTO_REPLY = true

global.VOICE_REPLY = true


/* V card */

global.ytname = "YT: Lankesh Sandaruwan " //ur yt chanel name
global.socialm = "GitHub: LankeshSadaruwan" //ur github or insta name
global.location = "Srilanka, colombo" //ur location
