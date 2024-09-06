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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2348066727741";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348066727741";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_01_09_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICA1OCxcbiAgICAgICAgMTg5LFxuICAgICAgICA0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDk2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDgsXG4gICAgICAgIDU2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDQzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDg0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDMyLFxuICAgICAgICA5NCxcbiAgICAgICAgMTIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTU4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjExLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNTMsXG4gICAgICAgIDg4LFxuICAgICAgICA2NixcbiAgICAgICAgMTYxLFxuICAgICAgICAxNDksXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzOSxcbiAgICAgICAgMTcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNzUsXG4gICAgICAgIDY5LFxuICAgICAgICAwLFxuICAgICAgICAxODEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTUwLFxuICAgICAgICA1NCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxODQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTIsXG4gICAgICAgIDEzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDg4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDU3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIwLFxuICAgICAgICA1OSxcbiAgICAgICAgMzksXG4gICAgICAgIDM0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgNzcsXG4gICAgICAgIDc0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDk5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEwNixcbiAgICAgICAgNCxcbiAgICAgICAgMTcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjQsXG4gICAgICAgIDc1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxLFxuICAgICAgICAxNixcbiAgICAgICAgMTYzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTA4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNTcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTE0LFxuICAgICAgICAzMCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDY3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDYzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTA0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDIyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMTExLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjIyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDgyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDExOCxcbiAgICAgICAgOSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxODUsXG4gICAgICAgIDU5LFxuICAgICAgICA1MixcbiAgICAgICAgODAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI0MixcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjksXG4gICAgICAgIDIwMixcbiAgICAgICAgNzksXG4gICAgICAgIDIwLFxuICAgICAgICAxLFxuICAgICAgICAyNSxcbiAgICAgICAgMTYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE4LFxuICAgICAgICAzNixcbiAgICAgICAgMTQsXG4gICAgICAgIDgyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTI2LFxuICAgICAgICA4MyxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDQ1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTA0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTcyLFxuICAgICAgICAyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDUyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDk1LFxuICAgICAgICAyNixcbiAgICAgICAgMjIzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIxMixcbiAgICAgICAgNTQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTMzLFxuICAgICAgICAxNSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTY2LFxuICAgICAgICA5NCxcbiAgICAgICAgOTYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgODgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTI0LFxuICAgICAgICAzNixcbiAgICAgICAgMTkwLFxuICAgICAgICA5NSxcbiAgICAgICAgNjksXG4gICAgICAgIDU1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNzksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgOTYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgODQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxLFxuICAgICAgICA1NCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMzksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSjJSM1cyek9SMTVkMDZ5OEpMSmsvVmtyaENJR3VHVlZWSVhQVlNuRStlST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiVW1KR2FiM1NSYnFQU3M0RGtKYlMtZ1wiLFxuICBcInBob25lSWRcIjogXCI3ODY1NmU3ZS1jYzk2LTRmNzEtOWFlNC0zYTM4MWQzZTE1MjZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQxLFxuICAgICAgMTM4LFxuICAgICAgOTYsXG4gICAgICA3OCxcbiAgICAgIDg4LFxuICAgICAgMTUwLFxuICAgICAgOTIsXG4gICAgICAyMzUsXG4gICAgICA0MixcbiAgICAgIDEzMyxcbiAgICAgIDExNyxcbiAgICAgIDI1MyxcbiAgICAgIDExMSxcbiAgICAgIDYsXG4gICAgICAyMzEsXG4gICAgICA5NixcbiAgICAgIDk3LFxuICAgICAgNjUsXG4gICAgICAzMyxcbiAgICAgIDg1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTgsXG4gICAgICAyNDYsXG4gICAgICAxMDUsXG4gICAgICAxMTEsXG4gICAgICAxMzEsXG4gICAgICA4MCxcbiAgICAgIDI2LFxuICAgICAgMjQzLFxuICAgICAgMTE4LFxuICAgICAgMTY0LFxuICAgICAgOTksXG4gICAgICAxNDMsXG4gICAgICAzNixcbiAgICAgIDEwOCxcbiAgICAgIDIwOCxcbiAgICAgIDE4NyxcbiAgICAgIDEyNixcbiAgICAgIDE1MCxcbiAgICAgIDE3MixcbiAgICAgIDE4MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05tMjA2QUlFTFN5N0xZR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiN2FZdkJaVE9HMjc0N212UXE2U3RrNHlkbmxxVitsUXh1UzNQc2Rqbm9SYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJJZTFvV0JoVHV6Wmh6YmtqbzZBNTJsWG5lYTZNS2Jka1dZNndGYnNNWVBVMnBpei8zcVF5MHRRdG8xcFc1c1BkL0txUzlSL3JZRTVjTVA3U0VXbzVCUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJhSm1UTHF6Nmg3bmpnbWlvb3laY3FrclBTWTM4bXpFZ3hZdm8xNDlsK2o3Q2p1LzJ3bkZrTFcrSTllVUhDNTVrKzBtRDhtVlNNMUtvOWZJU2pMVWxDUT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgwNjY3Mjc3NDE6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlRvYnplZVwiLFxuICAgIFwibGlkXCI6IFwiMTkxMzI4MDU5MTkxMzQ4OjhAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MDY2NzI3NzQxOjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJpXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjU2MzQ4NzFcbn0iCn0="  // PUT your SESSION_ID 


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
