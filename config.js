const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2348027007795";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348027007795";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text"  // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_57_09_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxNjksXG4gICAgICAgIDMwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDM5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTkyLFxuICAgICAgICA0NCxcbiAgICAgICAgMCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDM3LFxuICAgICAgICAxMjksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNjAsXG4gICAgICAgIDAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA1MixcbiAgICAgICAgMTg3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NSxcbiAgICAgICAgODksXG4gICAgICAgIDEyMixcbiAgICAgICAgNjMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNDksXG4gICAgICAgIDYxLFxuICAgICAgICA3MixcbiAgICAgICAgMTM5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDI0LFxuICAgICAgICA4MyxcbiAgICAgICAgNzgsXG4gICAgICAgIDk5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDY4LFxuICAgICAgICAxODgsXG4gICAgICAgIDE5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDcsXG4gICAgICAgIDU0LFxuICAgICAgICA3MixcbiAgICAgICAgODIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTM3LFxuICAgICAgICA0NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDk2LFxuICAgICAgICAxMSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI5LFxuICAgICAgICAxMjksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE5NixcbiAgICAgICAgNzgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxODEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTE1LFxuICAgICAgICA4OCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNjksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcsXG4gICAgICAgIDIwMixcbiAgICAgICAgNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyOSxcbiAgICAgICAgNyxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTg3LFxuICAgICAgICA2NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDUxLFxuICAgICAgICA1NyxcbiAgICAgICAgMjAyLFxuICAgICAgICA5NyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDMxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNSxcbiAgICAgICAgMzgsXG4gICAgICAgIDI5LFxuICAgICAgICAzNCxcbiAgICAgICAgODYsXG4gICAgICAgIDcyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxODcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTY5LFxuICAgICAgICA3MCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjgsXG4gICAgICAgIDMxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDg1LFxuICAgICAgICAxODIsXG4gICAgICAgIDU4LFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIzNixcbiAgICAgICAgODIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDMwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjIsXG4gICAgICAgIDkwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDYxLFxuICAgICAgICA0MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNjcsXG4gICAgICAgIDU2LFxuICAgICAgICAyMjksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDc1LFxuICAgICAgICAyMCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDkxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDk2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDQxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMyLFxuICAgICAgICA5MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDExMyxcbiAgICAgICAgOTAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgODIsXG4gICAgICAgIDk1LFxuICAgICAgICAxMDksXG4gICAgICAgIDEzMixcbiAgICAgICAgMTcyLFxuICAgICAgICAxNzksXG4gICAgICAgIDQ1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNDUsXG4gICAgICAgIDQwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTA4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDk2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDU3LFxuICAgICAgICA0MCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNjksXG4gICAgICAgIDQzLFxuICAgICAgICAxMjksXG4gICAgICAgIDUwLFxuICAgICAgICAxODMsXG4gICAgICAgIDc0LFxuICAgICAgICAxMCxcbiAgICAgICAgMjMzLFxuICAgICAgICA2NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMTksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTgzLFxuICAgICAgICA5MixcbiAgICAgICAgMjI0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDc1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDQxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjQ1LFxuICAgICAgICA5NixcbiAgICAgICAgMTAyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTg1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDY5LFxuICAgICAgICAxNDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDExMCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJPYnFyUW0xeEtQZlJ1NU1PMDFZdWpQZkQzWFhrSXk1SlFiUTM1aGFraUhzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogNjEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogNjEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJKQ2FqU2xZTFQzR29VUHB2TWtZWHVBXCIsXG4gIFwicGhvbmVJZFwiOiBcImE3NmViN2JkLTU4MTktNDk1NS1iMWUwLTllMTA0MTIwZjY1NFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTUsXG4gICAgICA2NyxcbiAgICAgIDE3NyxcbiAgICAgIDI0MCxcbiAgICAgIDExNyxcbiAgICAgIDQ2LFxuICAgICAgMjAwLFxuICAgICAgNyxcbiAgICAgIDI0MyxcbiAgICAgIDIyMyxcbiAgICAgIDE5OCxcbiAgICAgIDYxLFxuICAgICAgMjA3LFxuICAgICAgMTM1LFxuICAgICAgMTAyLFxuICAgICAgMTYwLFxuICAgICAgMTczLFxuICAgICAgMTE5LFxuICAgICAgNTUsXG4gICAgICAxMzJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU3LFxuICAgICAgMjAzLFxuICAgICAgODYsXG4gICAgICAxODAsXG4gICAgICAxMjIsXG4gICAgICA4NixcbiAgICAgIDIyOCxcbiAgICAgIDg1LFxuICAgICAgMTk4LFxuICAgICAgNTMsXG4gICAgICAxODUsXG4gICAgICAxNTQsXG4gICAgICAyMjksXG4gICAgICAxMixcbiAgICAgIDI1MCxcbiAgICAgIDU4LFxuICAgICAgMjM1LFxuICAgICAgMTc4LFxuICAgICAgMTUyLFxuICAgICAgMTE0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSlRpNlo4SkVMeVk4N1lHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJSSDZlQm81S0RUSjZjV0pnWVpYQTkveFZLa2w5MVR3NVBDNXhmS2VZV0JNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInc2VGFrVlBaMGx6S1dSQXBkMjkxd0ZvZHo4KzRGMUtkSFNDWHZLY2lUdWR2UFQxUi8rOGY2VHp3b25pTTNYMVFObXpIREZoRVE3ekIyYjFVMG5mZmlRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIi9RcG41VVFEb0llZkNnbzg3UU5uWmo5L1ExckM2YnA0QjVGa0gwdytteForNG9vNFhsSTZCK3RTM3c3ck5WLzVMYVZIclZwL1h4cG5HMHo1QjdIYWd3PT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODAyNzAwNzc5NTo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI0MTcwNDMwMDU0NTM3OjZAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiWW9zZW1pdGUg8J+Ng1wiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODAyNzAwNzc5NTo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjU3NDYyNDAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFLdkdcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUt2Ry5qc29uIjogIntcImtleURhdGFcIjpcIkVzWVFMK0J5NElpRmJFbStkdlZWdFJYZWVpc3lnSnF5R29tOWg1d2FXZms9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjQ4MjY2MzcwMCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzI1NzM0NTAwMjA5XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.9",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
