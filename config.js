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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_15_07_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMzMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTMxLFxuICAgICAgICA0NixcbiAgICAgICAgMjMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDY2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDksXG4gICAgICAgIDYyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDI0NixcbiAgICAgICAgNzAsXG4gICAgICAgIDcsXG4gICAgICAgIDkxLFxuICAgICAgICA3NCxcbiAgICAgICAgODMsXG4gICAgICAgIDExMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDQyLFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTI5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIsXG4gICAgICAgIDkzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTc3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDU4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTM0LFxuICAgICAgICAxOSxcbiAgICAgICAgMTQsXG4gICAgICAgIDIzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDM2LFxuICAgICAgICAxODEsXG4gICAgICAgIDc2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgOTYsXG4gICAgICAgIDEsXG4gICAgICAgIDE1LFxuICAgICAgICAzOSxcbiAgICAgICAgMTY1LFxuICAgICAgICA2LFxuICAgICAgICAzMCxcbiAgICAgICAgMjM3LFxuICAgICAgICA5NSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDQxLFxuICAgICAgICAyMjksXG4gICAgICAgIDEyMCxcbiAgICAgICAgNzksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMzMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjQ2LFxuICAgICAgICA5OCxcbiAgICAgICAgNzEsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDg2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjA0LFxuICAgICAgICAyNyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDExNSxcbiAgICAgICAgNjMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTE3LFxuICAgICAgICA3MixcbiAgICAgICAgMTg5LFxuICAgICAgICAzMCxcbiAgICAgICAgNjAsXG4gICAgICAgIDgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMTksXG4gICAgICAgIDk3LFxuICAgICAgICA3NCxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNTQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDYxLFxuICAgICAgICA3OSxcbiAgICAgICAgMixcbiAgICAgICAgNTEsXG4gICAgICAgIDczLFxuICAgICAgICAyMDQsXG4gICAgICAgIDExLFxuICAgICAgICA0MSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjMsXG4gICAgICAgIDU1LFxuICAgICAgICA2MixcbiAgICAgICAgMTI0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNjMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjU1LFxuICAgICAgICA0NCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNCxcbiAgICAgICAgNTAsXG4gICAgICAgIDYzLFxuICAgICAgICAxMTksXG4gICAgICAgIDg5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDk5LFxuICAgICAgICA4NixcbiAgICAgICAgMTc0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE5LFxuICAgICAgICAyMSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgODksXG4gICAgICAgIDI1MixcbiAgICAgICAgNjksXG4gICAgICAgIDE5OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgODksXG4gICAgICAgIDE3NixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDUyLFxuICAgICAgICAzLFxuICAgICAgICAyMTksXG4gICAgICAgIDI2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNzZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgODBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjMxLFxuICAgICAgICAyOSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDgwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTI1LFxuICAgICAgICA1MixcbiAgICAgICAgNzIsXG4gICAgICAgIDU1LFxuICAgICAgICAxMDksXG4gICAgICAgIDEwOCxcbiAgICAgICAgNyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjEyLFxuICAgICAgICA1MSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDkzLFxuICAgICAgICAwLFxuICAgICAgICA5LFxuICAgICAgICA1OCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgODIsXG4gICAgICAgIDI5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDUxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjM5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTc4LFxuICAgICAgICAzNixcbiAgICAgICAgMjU1LFxuICAgICAgICAyMzksXG4gICAgICAgIDI2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDk4LFxuICAgICAgICAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNDgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiTmhnZ3pBRS8zVGFvaGxTOGpYdldML0phZVByUStwSXAzaG5JQWNNamcxVT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMwMTU3NDc3NjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkVGOTZFMzdDQzkwQUUxQjNEMTdFMkEwQkI3QkY4MTQxXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDQzMzcyM1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzAxNTc0Nzc2OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiOTk3Qjc0QjdGNkVDODM4RDgxOTM1QUIxMTQyRUIyQTFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwNDMzNzIzXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImcyWHNjaThlU0pPNWNmWlFfdjctWUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYTI4Y2VkNTMtMDhiNC00NWM2LTg0NmUtY2JmYThhYjRkNDZmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ1LFxuICAgICAgMTUzLFxuICAgICAgOTUsXG4gICAgICAxNzYsXG4gICAgICAyMyxcbiAgICAgIDc1LFxuICAgICAgMTAwLFxuICAgICAgODgsXG4gICAgICA4OSxcbiAgICAgIDIxLFxuICAgICAgMTkyLFxuICAgICAgMTYyLFxuICAgICAgMTE0LFxuICAgICAgMTU0LFxuICAgICAgMjI5LFxuICAgICAgMTMsXG4gICAgICAxMDgsXG4gICAgICA1MCxcbiAgICAgIDEzMixcbiAgICAgIDE2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk3LFxuICAgICAgNDgsXG4gICAgICA5OSxcbiAgICAgIDEsXG4gICAgICAyMTIsXG4gICAgICA1MCxcbiAgICAgIDIyNyxcbiAgICAgIDIyOSxcbiAgICAgIDIxNSxcbiAgICAgIDcsXG4gICAgICAxNTAsXG4gICAgICAxNTQsXG4gICAgICAyNTUsXG4gICAgICAxODAsXG4gICAgICAyMTIsXG4gICAgICAyNDYsXG4gICAgICAxNDksXG4gICAgICAxMzAsXG4gICAgICA4MyxcbiAgICAgIDQ2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIldFNjRKN1laXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMwMTU3NDc3Njg6MTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIwMDk4Nzg0MzI3Njk3MzoxM0BsaWRcIixcbiAgICBcIm5hbWVcIjogXCJJc2hhcVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01lUXZjQURFTFA0cnJRR0dBUWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiWC9YSXhYRDlLTXZyZGo5YjNtYlpGRHFYNWFiY3FlVWJ4bXkrTG82TDJHVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJSdlAzWmdGblN0ZGY2MWFpZHQ0OWpTdWlscjd3amZmMFJ4QjlPL2VRTlJ0cHh3VnBrR0JaSmlpbUNsMHBrNzd4YTdMOGhxSGtZcXVneDdINFYxM3lBdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJUM2xiSVpURlU3Wk15R0RJb0xvUk1BTko5V0gzb0ZYTkhqNE9GbWlsZ0U5VlR2d2Ywa1M1cnlBU1lxbkhUREs0dHlPMGhKalR3RTcxeUxKazQwbExDdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMwMTU3NDc3Njg6MTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDEwMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNDMzNzIxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQnRwXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCdHAuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJYd3RNVGlFYlZFazNvdzVVdW56NVlhakc5ZW84bHdXMDd6R1lJRlFkVWk4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjk0MDUyNTYzNSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcxNjgzNjQ4MTA3MVwifSIKfQ=="  // PUT your SESSION_ID 


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
