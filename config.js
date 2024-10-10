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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_35_10_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxODksXG4gICAgICAgIDIwMixcbiAgICAgICAgMTg3LFxuICAgICAgICA5OCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyLFxuICAgICAgICA2NCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTAsXG4gICAgICAgIDgwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDMzLFxuICAgICAgICAyMyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTM5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMCxcbiAgICAgICAgMTk3LFxuICAgICAgICA5MCxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDY4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTY5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDU4LFxuICAgICAgICA1MCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTY4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDU2LFxuICAgICAgICA1MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxODUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDQyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDExMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNzYsXG4gICAgICAgIDk5LFxuICAgICAgICA0OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxOSxcbiAgICAgICAgNjIsXG4gICAgICAgIDQwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIxLFxuICAgICAgICA2MixcbiAgICAgICAgMTgxLFxuICAgICAgICA4NixcbiAgICAgICAgMTYzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDQ4LFxuICAgICAgICAxODAsXG4gICAgICAgIDE3LFxuICAgICAgICAyNCxcbiAgICAgICAgMzMsXG4gICAgICAgIDIzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgODQsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTIsXG4gICAgICAgIDk2LFxuICAgICAgICAyMTksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMSxcbiAgICAgICAgMzIsXG4gICAgICAgIDEyLFxuICAgICAgICAyNixcbiAgICAgICAgMTMwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxODcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTM5LFxuICAgICAgICA1NSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTU5LFxuICAgICAgICA4MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgODEsXG4gICAgICAgIDgzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDQ2LFxuICAgICAgICAzNyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjQsXG4gICAgICAgIDE1MixcbiAgICAgICAgODMsXG4gICAgICAgIDE1MixcbiAgICAgICAgNzUsXG4gICAgICAgIDY2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDIzNixcbiAgICAgICAgNixcbiAgICAgICAgNzksXG4gICAgICAgIDIzMixcbiAgICAgICAgMTE1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMjksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDYxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjYsXG4gICAgICAgIDYzLFxuICAgICAgICAxODcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjExLFxuICAgICAgICAyNCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyOSxcbiAgICAgICAgMTgsXG4gICAgICAgIDk2LFxuICAgICAgICA0NyxcbiAgICAgICAgMTg1LFxuICAgICAgICA4MSxcbiAgICAgICAgOSxcbiAgICAgICAgMjQwLFxuICAgICAgICA0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDMsXG4gICAgICAgIDgyLFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDg0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgODMsXG4gICAgICAgIDgzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNTksXG4gICAgICAgIDI0NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgOTIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTMsXG4gICAgICAgIDMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTkyLFxuICAgICAgICA5OSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMTksXG4gICAgICAgIDEzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDU5LFxuICAgICAgICA2NCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDkzLFxuICAgICAgICA2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDg4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDU4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMyxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNjMsXG4gICAgICAgIDgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTAxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTU4LFxuICAgICAgICA4OSxcbiAgICAgICAgMjM2LFxuICAgICAgICA2NCxcbiAgICAgICAgMjA1LFxuICAgICAgICA3OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDk5LFxuICBcImFkdlNlY3JldEtleVwiOiBcImhvaktVS3IvbHprZGZ2RGFxTDJRQ25jbnRXWWtVTVV6ZjBoN2IxYlNoWEU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiNDQ3NDcyMDE1NzYzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzQUI2NEYzOURCN0NCNUNEREYwQVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3Mjg1NTI5MzdcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI0NDc0NzIwMTU3NjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNBMTkxNDFBQ0VCNTMwMkVCMkJDXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyODU1Mjk0MVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzQsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzQsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJGbE40ZUQ5M1IyNmpTRTRsamhYMU53XCIsXG4gIFwicGhvbmVJZFwiOiBcImQwNmI5ZWVmLTNlZjMtNDlmYy1hYWM0LTcwZDBjZTgwMTRjYVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1MixcbiAgICAgIDgyLFxuICAgICAgMTgxLFxuICAgICAgMTE1LFxuICAgICAgMTI5LFxuICAgICAgMTgzLFxuICAgICAgMTc4LFxuICAgICAgMjMsXG4gICAgICA2NixcbiAgICAgIDE3MSxcbiAgICAgIDI0MyxcbiAgICAgIDE1OSxcbiAgICAgIDE3OCxcbiAgICAgIDExNCxcbiAgICAgIDIwLFxuICAgICAgMjMsXG4gICAgICA5MCxcbiAgICAgIDI1MyxcbiAgICAgIDk1LFxuICAgICAgMTgyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQyLFxuICAgICAgMTQ2LFxuICAgICAgMjQ1LFxuICAgICAgMTksXG4gICAgICAxMTcsXG4gICAgICAxNjgsXG4gICAgICAzMCxcbiAgICAgIDk5LFxuICAgICAgMjE5LFxuICAgICAgMTMwLFxuICAgICAgMjMsXG4gICAgICAxOTIsXG4gICAgICAxODAsXG4gICAgICAxNTIsXG4gICAgICAyNTAsXG4gICAgICAxMTcsXG4gICAgICAxNjYsXG4gICAgICA2LFxuICAgICAgMTQ4LFxuICAgICAgMTQyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIldITFJOU0Y4XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI0NDc0NzIwMTU3NjM6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjYyNzg4MTEwOTM0MDI1OjVAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi8J2Xp/Cdl7XwnZiC8J2XmuKcsOKcnlwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xPSXQva09FT0svbnJnR0dBUWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiWGxReHNBN0haOVB4Zi92a1BDdTNNSkF6M0tGZ2xYLytmSHNMOEFmWEpYND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJoRmZiekdzTHg2ZkdIM0R0SGpMMEwxWktBQkMxT0dVVGRvRkRPcCtsckh1TUlUUUFPSFNVN09UTzBVOUhRVkx2dGhORXR4aklFVEwwZ2ZMSGV6VjhBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJXeFhKemlFLzd3ZGJaZnlxeC8xUmhUQ2VNd3BtSGRkVzZLM21XUzJSejJoQWRVL1gzM2NLQXI0RjNOaWdWa1BHOTA5cHVKS1NmOW1wZjBLMEx3bVhEUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI0NDc0NzIwMTU3NjM6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDEyNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3Mjg1NTI5MzUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFIYVVcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUhhVS5qc29uIjogIntcImtleURhdGFcIjpcInN6NWdUZm5Rb1MyNW1nT2dJemFId1RHbDNGM0RpYXBjTWZtNFBpRG9Td289XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NDAxMjc1Mzk3MSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzEsMF19LFwidGltZXN0YW1wXCI6XCIxNzI3MzUwOTA0MTYzXCJ9Igp9"  // PUT your SESSION_ID 


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
