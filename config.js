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
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_38_08_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA2NyxcbiAgICAgICAgNzAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjAyLFxuICAgICAgICAxNzksXG4gICAgICAgIDQ2LFxuICAgICAgICAxNSxcbiAgICAgICAgMjksXG4gICAgICAgIDYxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDcwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDM4LFxuICAgICAgICA2OCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxODQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNzMsXG4gICAgICAgIDc5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIzLFxuICAgICAgICA3MyxcbiAgICAgICAgMTYyLFxuICAgICAgICA0MSxcbiAgICAgICAgMTM4LFxuICAgICAgICA3NyxcbiAgICAgICAgMzYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDEyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDExLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNjksXG4gICAgICAgIDE3NyxcbiAgICAgICAgNzgsXG4gICAgICAgIDIxNixcbiAgICAgICAgNjUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDg0LFxuICAgICAgICA3NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjQwLFxuICAgICAgICA1M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTY0LFxuICAgICAgICA3MixcbiAgICAgICAgNTYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNjUsXG4gICAgICAgIDIsXG4gICAgICAgIDIxMixcbiAgICAgICAgODAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNixcbiAgICAgICAgMjUxLFxuICAgICAgICA4NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDExLFxuICAgICAgICAyMTksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgODAsXG4gICAgICAgIDUwLFxuICAgICAgICA0NixcbiAgICAgICAgMTA1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgODcsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDU1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDgzLFxuICAgICAgICA3NSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTM0LFxuICAgICAgICAxODAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjUyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDg3LFxuICAgICAgICA4NCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTcwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTk5LFxuICAgICAgICA5NixcbiAgICAgICAgMTI2LFxuICAgICAgICAxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMzYsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjE5LFxuICAgICAgICA1MixcbiAgICAgICAgMTgzLFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIwLFxuICAgICAgICAzOSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTg3LFxuICAgICAgICA0NyxcbiAgICAgICAgODMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjIxLFxuICAgICAgICA3MixcbiAgICAgICAgMjEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDQwLFxuICAgICAgICA1MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA4MVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxODMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDM3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDk5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDc4LFxuICAgICAgICAzMSxcbiAgICAgICAgNjEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNjksXG4gICAgICAgIDUsXG4gICAgICAgIDg0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTEzLFxuICAgICAgICA3MixcbiAgICAgICAgNDksXG4gICAgICAgIDE4MixcbiAgICAgICAgMjQzLFxuICAgICAgICAxMTksXG4gICAgICAgIDIwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTMwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMzUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgODIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNzgsXG4gICAgICAgIDIzLFxuICAgICAgICAzMSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNyxcbiAgICAgICAgMjAyLFxuICAgICAgICA3MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTM2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjRTN0ZBMWNSTG1JQllydmVTdnpIT3ZTT3NFU1JzZkE0Yjg2SzVHbndKSVE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlA2STluRl9nVDA2YVIwd1EwZi1VMndcIixcbiAgXCJwaG9uZUlkXCI6IFwiNDllY2JkYmUtNjFhNS00OWYwLThlNTItMTExZmI4YWQ1YzZjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyOSxcbiAgICAgIDYyLFxuICAgICAgMzYsXG4gICAgICA0OCxcbiAgICAgIDcwLFxuICAgICAgMzQsXG4gICAgICAxMixcbiAgICAgIDEyMSxcbiAgICAgIDE0MixcbiAgICAgIDg1LFxuICAgICAgMTkzLFxuICAgICAgMjAyLFxuICAgICAgMTE2LFxuICAgICAgMTkzLFxuICAgICAgMjU0LFxuICAgICAgODUsXG4gICAgICAyMTYsXG4gICAgICA0LFxuICAgICAgNjUsXG4gICAgICAxMDFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI1MCxcbiAgICAgIDE3OCxcbiAgICAgIDcyLFxuICAgICAgMjI2LFxuICAgICAgMjU0LFxuICAgICAgMTczLFxuICAgICAgMjMyLFxuICAgICAgODEsXG4gICAgICA0OSxcbiAgICAgIDk5LFxuICAgICAgMTkxLFxuICAgICAgMTQ4LFxuICAgICAgMTY1LFxuICAgICAgMTc0LFxuICAgICAgMjA0LFxuICAgICAgMjA4LFxuICAgICAgMjE4LFxuICAgICAgNjAsXG4gICAgICA2MixcbiAgICAgIDU5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTGVYMStFRUVJVHY3TFVHR0NBZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ6SjF2d2x3S043azhSSDFXNnRGV1pRMUdHTkM4TUJGSEI4QkI1amxib0hZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIitvREIvT3oxVXRwQlFDQmJ6a0l6VGVDdUtwUDYwRUVKYkdadCtZbmlHRzdFZ2F6cUwwNmxIbDRnRjJYVGI0bCtjc3ZpZS81YzU1UDVKRXNiUHdhYUJRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIml3VGprNFloOUJFUEZadFZQcGFiTlJMSkxCN0NhQzdGR0FlekdlZXU4QU5mb01KVFlMRGphNWpKU0tHL2svSldWOTVqdy95N1B0amtnbW1jNFoyR2lnPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzA3NTQxMTg4OjM1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMDc2MzIwNTY5OTYwNzc6MzVAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3MDc1NDExODg6MzVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTE4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjM1NDU0ODFcbn0iCn0="  // PUT your SESSION_ID 


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
