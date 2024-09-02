const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="haringey,united kingdom."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "europe/united kingodm";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "447534256844";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_40_09_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDQ0LFxuICAgICAgICAyOCxcbiAgICAgICAgMTAwLFxuICAgICAgICA1MSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNDUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIwLFxuICAgICAgICAyMDksXG4gICAgICAgIDExMyxcbiAgICAgICAgNjgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTM4LFxuICAgICAgICA1OCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgODAsXG4gICAgICAgIDQzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTA2LFxuICAgICAgICA2OSxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMzEsXG4gICAgICAgIDQsXG4gICAgICAgIDMsXG4gICAgICAgIDEzNixcbiAgICAgICAgNzksXG4gICAgICAgIDE3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDI3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNzYsXG4gICAgICAgIDcwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDgxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNzEsXG4gICAgICAgIDM3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgOTMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDYwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNDksXG4gICAgICAgIDE5NixcbiAgICAgICAgMjAwLFxuICAgICAgICA0NixcbiAgICAgICAgNzgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgODIsXG4gICAgICAgIDgzLFxuICAgICAgICAzNyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjIyLFxuICAgICAgICA2NSxcbiAgICAgICAgMjIyLFxuICAgICAgICA5NyxcbiAgICAgICAgODQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgODksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE1MixcbiAgICAgICAgNCxcbiAgICAgICAgMTgsXG4gICAgICAgIDUzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIsXG4gICAgICAgIDk2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDU0LFxuICAgICAgICA3NixcbiAgICAgICAgMTUzLFxuICAgICAgICA0MSxcbiAgICAgICAgODUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjUzLFxuICAgICAgICA0MCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTU0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDI0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjM5LFxuICAgICAgICAxNCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxODUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDU5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjM1LFxuICAgICAgICA3OSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTQ4LFxuICAgICAgICA4MSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNzEsXG4gICAgICAgIDksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTAsXG4gICAgICAgIDczLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTkzLFxuICAgICAgICAzNyxcbiAgICAgICAgMTM3LFxuICAgICAgICA0OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDI3LFxuICAgICAgICAzMyxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE3LFxuICAgICAgICA4MyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNixcbiAgICAgICAgMjI5LFxuICAgICAgICA2OCxcbiAgICAgICAgMTg0LFxuICAgICAgICA1NCxcbiAgICAgICAgODYsXG4gICAgICAgIDg0LFxuICAgICAgICAxNDksXG4gICAgICAgIDIyOCxcbiAgICAgICAgNzYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTE5LFxuICAgICAgICA4MCxcbiAgICAgICAgMzAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTczLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTY1LFxuICAgICAgICAzOCxcbiAgICAgICAgMTAyLFxuICAgICAgICA5MSxcbiAgICAgICAgNyxcbiAgICAgICAgMTIxLFxuICAgICAgICA2OSxcbiAgICAgICAgNSxcbiAgICAgICAgMTE1LFxuICAgICAgICA5MCxcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMDVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTA1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDI4LFxuICAgICAgICAxODQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgOSxcbiAgICAgICAgMTksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTYyLFxuICAgICAgICA3MixcbiAgICAgICAgMTcyLFxuICAgICAgICA4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDI3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTUsXG4gICAgICAgIDM0LFxuICAgICAgICA0MSxcbiAgICAgICAgMzksXG4gICAgICAgIDE4NixcbiAgICAgICAgMyxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxODUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNzgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjUwLFxuICAgICAgICA0NixcbiAgICAgICAgMTE3LFxuICAgICAgICAxMixcbiAgICAgICAgMTAxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNzksXG4gICAgICAgIDU3LFxuICAgICAgICAzNixcbiAgICAgICAgMjE2LFxuICAgICAgICAxNyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTI4LFxuICAgICAgICA1OCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNzIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiWGFjUFNvSlQ2bGtuNzdrZnNnRGpqVzZMQ3FrTnRVak9pSVd2RGxWQUowUT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI0NDc1MzQyNTY4NDRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNBN0M3MTE5MDkzQjYzREQxRTM0XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyNTMxMzIyMVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ3UnlLTW52T1NTYUlRTkRjMGpEZUtBXCIsXG4gIFwicGhvbmVJZFwiOiBcImI5YTZjYWVhLTBlYTYtNGYyOC05MmNkLTgzNTJhM2NiOTE3ZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDksXG4gICAgICAyNixcbiAgICAgIDExMyxcbiAgICAgIDE2OCxcbiAgICAgIDEzMyxcbiAgICAgIDY1LFxuICAgICAgMTMyLFxuICAgICAgMTEwLFxuICAgICAgMjI2LFxuICAgICAgMzMsXG4gICAgICAyMDEsXG4gICAgICA0NSxcbiAgICAgIDI0MyxcbiAgICAgIDQsXG4gICAgICAxMjcsXG4gICAgICAyNyxcbiAgICAgIDkwLFxuICAgICAgMjM0LFxuICAgICAgMTY2LFxuICAgICAgMTA5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5MSxcbiAgICAgIDI0MCxcbiAgICAgIDExLFxuICAgICAgMTQ0LFxuICAgICAgMTA3LFxuICAgICAgMTEwLFxuICAgICAgNSxcbiAgICAgIDIyNixcbiAgICAgIDIxNyxcbiAgICAgIDIzNixcbiAgICAgIDI0MixcbiAgICAgIDIzMCxcbiAgICAgIDY1LFxuICAgICAgMjEsXG4gICAgICAxMjcsXG4gICAgICAxOTMsXG4gICAgICAxMzIsXG4gICAgICAxNzUsXG4gICAgICA1NyxcbiAgICAgIDM3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIktCM0FMTktUXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI0NDc1MzQyNTY4NDQ6MTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI1NzkxMzI3MjY5Mjc2OToxNkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQekNvY01ORUwzaDJMWUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInNUVlZTdXN5cHV5RVN2WUR5Y3VJQy9FUU84UWZLdVVmeWxJdmM5MkxDd1E9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZnZtQjAzcjZoZitySWRxTms0b0NwTGhTTU5aL0V4dm5lZWFoR3M3a01qL2NrVjJLQ3ZwWVJ4VEZzRlpvNjVaeEtJdnNRRXNJSm1YU2puRDFKL2xuQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiWGhsRVRuNFZzM0d0WHZPZVpkS0dNZXViTC9BcUJteStDbUorcUtId2tmRE5Kd3JLaEVlNXlVUWVoNHlSb2VYUm5Ra204TUs3OVE3dVpoVzhvRm9GQkE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiNDQ3NTM0MjU2ODQ0OjE2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjUzMTMyMTUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFLTVpcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtNWi5qc29uIjogIntcImtleURhdGFcIjpcIk84bTU5TE11SEkxZnVOUTlLZGwvRkY2VjQzRzRPR3RoOUlUL0tXb0tHZTA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzYzMDcxOTM1NixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzI1MzEzMjIwNzg1XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ":",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.9",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "DONWIZ",


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
