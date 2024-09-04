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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2348168768580";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348168768580";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_31_08_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDc1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTUyLFxuICAgICAgICA5NixcbiAgICAgICAgMjAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNDksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxODEsXG4gICAgICAgIDMwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMzcsXG4gICAgICAgIDU4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDM2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgODUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTkwLFxuICAgICAgICAzMCxcbiAgICAgICAgMjgsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgNixcbiAgICAgICAgMTAxLFxuICAgICAgICAyMDksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNDIsXG4gICAgICAgIDYwLFxuICAgICAgICAxODksXG4gICAgICAgIDIyMCxcbiAgICAgICAgOTIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTMwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDY0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNjUsXG4gICAgICAgIDY1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDU2LFxuICAgICAgICA1MCxcbiAgICAgICAgMTAsXG4gICAgICAgIDQ3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDY4LFxuICAgICAgICA0OCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDU1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDQyLFxuICAgICAgICAyNCxcbiAgICAgICAgMixcbiAgICAgICAgNDEsXG4gICAgICAgIDYwLFxuICAgICAgICA4MixcbiAgICAgICAgMjI4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTkzLFxuICAgICAgICA2NixcbiAgICAgICAgMjAxLFxuICAgICAgICAxMyxcbiAgICAgICAgMTExLFxuICAgICAgICAyMDQsXG4gICAgICAgIDg5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEsXG4gICAgICAgIDEzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDYwLFxuICAgICAgICAxMixcbiAgICAgICAgMTA5LFxuICAgICAgICAzNSxcbiAgICAgICAgNDcsXG4gICAgICAgIDI2LFxuICAgICAgICA2MixcbiAgICAgICAgMTE4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDMyLFxuICAgICAgICAyNSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMTksXG4gICAgICAgIDg0LFxuICAgICAgICAzMyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNTAsXG4gICAgICAgIDEwLFxuICAgICAgICA3MyxcbiAgICAgICAgMTExLFxuICAgICAgICAxMDksXG4gICAgICAgIDE0OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEyMixcbiAgICAgICAgNTMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDgwLFxuICAgICAgICAxMjksXG4gICAgICAgIDkwLFxuICAgICAgICAyMjksXG4gICAgICAgIDIxMixcbiAgICAgICAgMTIwLFxuICAgICAgICAxMCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDgyLFxuICAgICAgICA0MSxcbiAgICAgICAgNjUsXG4gICAgICAgIDgwLFxuICAgICAgICA2MixcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM1LFxuICAgICAgICAxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMzksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDk0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxODQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMzEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTAsXG4gICAgICAgIDUwLFxuICAgICAgICA2OCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIwNixcbiAgICAgICAgOTYsXG4gICAgICAgIDExOCxcbiAgICAgICAgNjksXG4gICAgICAgIDc2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTM2LFxuICAgICAgICAzNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTIzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDkxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTE0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIxNixcbiAgICAgICAgODAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTk0LFxuICAgICAgICA2OSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA2OCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDkxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDkwLFxuICAgICAgICA3MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDM3LFxuICAgICAgICA4NyxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMTksXG4gICAgICAgIDIwNyxcbiAgICAgICAgNDUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTk5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDYsXG4gICAgICAgIDUyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTIwLFxuICAgICAgICA1NyxcbiAgICAgICAgMjAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTkzLFxuICAgICAgICA0NSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgODEsXG4gICAgICAgIDM0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNTksXG4gICAgICAgIDcyLFxuICAgICAgICAyNCxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNjgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwidXl1S2JTT2x2cFZ5S1B6MUMxbWF1cWlqNzJIcEJacmRJY09sZGZoUCtIWT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDYxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDYxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiemdXZlVxb1JTbXF1cUpBRG1WeG9XUVwiLFxuICBcInBob25lSWRcIjogXCI0MmI2Nzk0OS1lZWY0LTRlZWMtODM0My1mOWI2YWE4NGVmNmVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODUsXG4gICAgICAzMyxcbiAgICAgIDU5LFxuICAgICAgMTEzLFxuICAgICAgMTI3LFxuICAgICAgMjI0LFxuICAgICAgMjExLFxuICAgICAgNjMsXG4gICAgICAxODIsXG4gICAgICA0OSxcbiAgICAgIDEzLFxuICAgICAgMTY0LFxuICAgICAgMTQwLFxuICAgICAgMjM3LFxuICAgICAgMTE5LFxuICAgICAgMTY1LFxuICAgICAgNjUsXG4gICAgICAzNCxcbiAgICAgIDkzLFxuICAgICAgMTg2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1LFxuICAgICAgMjQ5LFxuICAgICAgMTAyLFxuICAgICAgMixcbiAgICAgIDE3OCxcbiAgICAgIDE0MyxcbiAgICAgIDExLFxuICAgICAgMjA5LFxuICAgICAgMTA3LFxuICAgICAgMjMwLFxuICAgICAgNjYsXG4gICAgICAxMzMsXG4gICAgICAxMixcbiAgICAgIDIyMixcbiAgICAgIDE0MyxcbiAgICAgIDEwNyxcbiAgICAgIDgzLFxuICAgICAgODQsXG4gICAgICA0OSxcbiAgICAgIDE3N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lEaG5La0tFTDNvczdZR0dBUWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiYXljSVI3YlRWdVlwMXJOeHNoVUtSZUZmandNYktXMWhrR1BUTGpTVkZXQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJIbE1XaEhuQUtjTnlsWTYySm1RVmwrYklVZ3daK1Y0czBPenZ2R2QwWWRRcGYzMVNMU2Y0YWM1OUU1V3pEZ3VvRlFwREYyb0Eyb01CcEJhUnlscnNBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIxbWFlL0piRjN0RXU5aEcwc3poeWN2VGQ3WjF4Z1YvbXZpUUh5YkRXa3RIK29rSGlqcTdIblJRNmw4eHFyQkpLUGM0RCsrcXhiUWFWMlJvRWVRL1NEUT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxNjg3Njg1ODA6OTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI0OTA4NjY2MTkxMDc2OTo5MkBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxNjg3Njg1ODA6OTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgOCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA5NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjQ3MDc5MDUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFERGJcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUREVy5qc29uIjogIntcImtleURhdGFcIjpcImF5NjVtZHUxbUpSL0FGRHBWaVhtNDlZVzVMd3EyVXFCMHVxaGNlNEpmL1E9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6Mjc3MDgwODk2MCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzEsMF19LFwidGltZXN0YW1wXCI6XCIxNzIyOTUwMTc1OTIzXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRERZLmpzb24iOiAie1wia2V5RGF0YVwiOlwiaUhqT3Z1RUh2d2ZrandNSUtGVnhQb3c3OHRlTm82NG1hZHlhWFJvZkxPaz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyNzcwODA4OTYwLFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMiwxLDBdfSxcInRpbWVzdGFtcFwiOlwiMTcyNDU0NTkzNTA1MlwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUREWi5qc29uIjogIntcImtleURhdGFcIjpcIlByOG40V0N0VzNaQUM0djlQOVFTbHJQL1UxaGgvM0xpd0Jkd2YyQUYwWmc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6Mjc3MDgwODk2MCxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzEsMF19LFwidGltZXN0YW1wXCI6XCIxNzI0NTQ1OTM2MzYyXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRERiLmpzb24iOiAie1wia2V5RGF0YVwiOlwiaXpla1VTS1RQU3ZtVTg0ZThRSUVuU1R1dWhVbkR1TUQxb0xRSVVZODdmST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyNzcwODA4OTYwLFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMCwzLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyNDY3ODIzNTg3M1wifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUREYy5qc29uIjogIntcImtleURhdGFcIjpcIk45RWR1RjB1aUttZGtlWnRCamNBN3ZXS2EvTG0rbm1HT0lKcEMzSEltVjQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6Mjc3MDgwODk2MCxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzEsMF19LFwidGltZXN0YW1wXCI6XCIxNzI0Njc4MjM3MzQzXCJ9Igp9"  // PUT your SESSION_ID 


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
