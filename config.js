const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="Kipkogeimeshack6@gmail.com"
global.location="Kapsabet,Kenya."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github=process.env.GITHUB|| "https://github.com/MeshTechInfo/Suhail-Md-V5";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagAqpD3gvWdo0IxmZ2Z";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagAqpD3gvWdo0IxmZ2Z" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/MeshTechInfo/Suhail-Md-V5/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "*Powered By Mesh-Tech*" 


global.devs = "254707541188" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254707541188";




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
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,254xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,254xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "254707541188,254xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_41_08_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAyNCxcbiAgICAgICAgMjgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgODcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMzcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjEzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMzQsXG4gICAgICAgIDgwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDQsXG4gICAgICAgIDE0NixcbiAgICAgICAgNTUsXG4gICAgICAgIDU5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDQxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjUxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNTgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNjEsXG4gICAgICAgIDcwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTA2LFxuICAgICAgICA5MSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDU1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMDksXG4gICAgICAgIDExNSxcbiAgICAgICAgMjAxLFxuICAgICAgICAzLFxuICAgICAgICAxMzksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxOSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMzksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTI0LFxuICAgICAgICAzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjQwLFxuICAgICAgICA3MSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjEyLFxuICAgICAgICAyNixcbiAgICAgICAgNDYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTEzLFxuICAgICAgICA3MCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEyMixcbiAgICAgICAgNDAsXG4gICAgICAgIDcsXG4gICAgICAgIDk3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI0LFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ4LFxuICAgICAgICA0MCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxODEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTU5LFxuICAgICAgICA4NyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTIxLFxuICAgICAgICAzNyxcbiAgICAgICAgNjYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE4NixcbiAgICAgICAgNDIsXG4gICAgICAgIDIzMixcbiAgICAgICAgOTYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxODEsXG4gICAgICAgIDIxLFxuICAgICAgICA2MSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjUyLFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgODMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDYzLFxuICAgICAgICAxODIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNTYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTcxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgOTEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTMzLFxuICAgICAgICA3LFxuICAgICAgICA4OCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNzksXG4gICAgICAgIDQ2LFxuICAgICAgICAxODQsXG4gICAgICAgIDY4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MSxcbiAgICAgICAgMzUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDY3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNTAsXG4gICAgICAgIDEwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjA5LFxuICAgICAgICA0OCxcbiAgICAgICAgMTM5LFxuICAgICAgICAwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDU4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgODJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA2MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1NSxcbiAgICAgICAgOTksXG4gICAgICAgIDUyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTE4LFxuICAgICAgICA1NyxcbiAgICAgICAgMzEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTU5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjE2LFxuICAgICAgICAzMyxcbiAgICAgICAgNDcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjMzLFxuICAgICAgICA0OSxcbiAgICAgICAgMTMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgOSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDU4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDg1LFxuICAgICAgICA1OCxcbiAgICAgICAgNDAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA3MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxODEsXG4gICAgICAgIDk0LFxuICAgICAgICAyMTksXG4gICAgICAgIDE4NyxcbiAgICAgICAgNCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDg3LFxuICAgICAgICAyMyxcbiAgICAgICAgNDAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNzksXG4gICAgICAgIDI0NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDc4LFxuICAgICAgICAxODIsXG4gICAgICAgIDE0M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjE3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkNwOUdRYlFscTQycTUvUjU4aDJuLzJycDJ0S3JTSkJZV2tsNnNyUmRjTUk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiA2MSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiA2MSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIm5wMC1rSTY3VFo2YlMzVFVHYWJ6RndcIixcbiAgXCJwaG9uZUlkXCI6IFwiNWZhOTIzOTMtZjJmNi00MDgxLTlhNGItN2M1MmNjZjJlYzdlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2NCxcbiAgICAgIDEwOSxcbiAgICAgIDc2LFxuICAgICAgNjIsXG4gICAgICA1LFxuICAgICAgOTAsXG4gICAgICAxNDEsXG4gICAgICAyNTAsXG4gICAgICAyNTQsXG4gICAgICAzNCxcbiAgICAgIDIyMyxcbiAgICAgIDE4NixcbiAgICAgIDIwNSxcbiAgICAgIDUsXG4gICAgICAxNjgsXG4gICAgICAzOSxcbiAgICAgIDcyLFxuICAgICAgMTQ3LFxuICAgICAgODIsXG4gICAgICAxNTdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTA0LFxuICAgICAgNjQsXG4gICAgICAxODYsXG4gICAgICA2NixcbiAgICAgIDE2NixcbiAgICAgIDEwOSxcbiAgICAgIDE4NCxcbiAgICAgIDgsXG4gICAgICAyMDQsXG4gICAgICAxNDksXG4gICAgICAxMTIsXG4gICAgICAxNTYsXG4gICAgICAxMjMsXG4gICAgICAyNDUsXG4gICAgICAxMTcsXG4gICAgICAyMTQsXG4gICAgICAxNjksXG4gICAgICAyMixcbiAgICAgIDEwOCxcbiAgICAgIDc1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkdXWDFCWDdQXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3MDc1NDExODg6NDBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIwNzYzMjA1Njk5NjA3Nzo0MEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMZVgxK0VFRVBpbStMVUdHQ1VnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInpKMXZ3bHdLTjdrOFJIMVc2dEZXWlExR0dOQzhNQkZIQjhCQjVqbGJvSFk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiREdyUEZVOC9pTnh0NGJwcER6cmFzUjZaOWJwc1N0Z2QyZ3AzaUQ2NGxEV3dlZ0FXZldndG9OYjMrVEE4TTJFenFkdlFoZzlDUjRHRjAvSWF2TXVXRFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiQjdheGVZNHl4YlBxenpCZkJyaC81bUpPTXhCOFVTUllIMU9iUDlITEhGeVdHNFc3Q3VsODluaUlZYUszV1I1dGZiOHNnRU9mSXVsUThKamxhUDVlaUE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzA3NTQxMTg4OjQwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDExOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIzNzMyODYwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBT1dkXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPV2QuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJuWHFxOTNuQ3VSdVpSQnlTS3FMbG5qdkk2eWtQVlQ0RkVTT2hvcmt6T0dNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEyNzg1OTM5NzUsXCJjdXJyZW50SW5kZXhcIjo0LFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsNF19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.9",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ MESH-TECH 』```", //*『sᴜʙsᴄʀɪʙᴇ • MESH-TECH』*\n youtube.com/MeshKip"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "MESH-TECH",
  ownername:process.env.OWNER_NAME|| "Mesh KE",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "Public",
  LANG: ( process.env.THEME ||  "Mesh"  ).toUpperCase(),



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
