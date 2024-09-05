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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_57_09_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAzMixcbiAgICAgICAgMTcsXG4gICAgICAgIDcwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDkyLFxuICAgICAgICAzNyxcbiAgICAgICAgMjAyLFxuICAgICAgICA2NyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDQ4LFxuICAgICAgICAxOSxcbiAgICAgICAgOSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjI1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTE4LFxuICAgICAgICA5MyxcbiAgICAgICAgNCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICA3OSxcbiAgICAgICAgNjIsXG4gICAgICAgIDc0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDExMixcbiAgICAgICAgNzMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjksXG4gICAgICAgIDgwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDYzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjM4LFxuICAgICAgICA1OSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDcyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTE2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxODksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDY5LFxuICAgICAgICA3OSxcbiAgICAgICAgMjM1LFxuICAgICAgICA4NyxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDQxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTYwLFxuICAgICAgICAzMyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTgzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDQ0LFxuICAgICAgICAxODUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNTUsXG4gICAgICAgIDIyLFxuICAgICAgICA5NixcbiAgICAgICAgMTA3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjI2LFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzEsXG4gICAgICAgIDMzLFxuICAgICAgICA5OCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTg0LFxuICAgICAgICA0NixcbiAgICAgICAgOSxcbiAgICAgICAgMSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgODEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDc5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNjEsXG4gICAgICAgIDUxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNyxcbiAgICAgICAgOTQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMzgsXG4gICAgICAgIDIxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjM0LFxuICAgICAgICA2MSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA3MyxcbiAgICAgICAgMjE4LFxuICAgICAgICA5OCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIzMixcbiAgICAgICAgNzUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxODMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDkwLFxuICAgICAgICAzOCxcbiAgICAgICAgMTUyLFxuICAgICAgICA2MSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxODAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDUsXG4gICAgICAgIDExLFxuICAgICAgICA3MSxcbiAgICAgICAgODUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDQzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDgsXG4gICAgICAgIDg0LFxuICAgICAgICAxNyxcbiAgICAgICAgNjIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNzQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTg5LFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEyNVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA5OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTE3LFxuICAgICAgICA5OCxcbiAgICAgICAgMTI0LFxuICAgICAgICAzMSxcbiAgICAgICAgNDQsXG4gICAgICAgIDU1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDY4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDExNCxcbiAgICAgICAgOTMsXG4gICAgICAgIDEyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjU0LFxuICAgICAgICA4NixcbiAgICAgICAgMTc5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDYzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgODksXG4gICAgICAgIDExOCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNyxcbiAgICAgICAgMjU1LFxuICAgICAgICA4OCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjE3LFxuICAgICAgICA4MSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNyxcbiAgICAgICAgODcsXG4gICAgICAgIDk1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTgxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTA1LFxuICAgICAgICA2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDY2LFxuICAgICAgICA3NSxcbiAgICAgICAgMTM4LFxuICAgICAgICAzNSxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNDUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwidW5xVVhaUGM4RTdiaUlvbDFlT0JBZDU3VHJiN1hweVJzbDRaU0JSRVhNRT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZXdadE1IbGFSR2VXbHVHM3NlaGZ4UVwiLFxuICBcInBob25lSWRcIjogXCI4NDRlNjViMC1mYmE0LTRjN2QtYWI1ZS0zM2JkZDk2ZWQ3ZmRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzAsXG4gICAgICA5MyxcbiAgICAgIDEwNSxcbiAgICAgIDEyNixcbiAgICAgIDIwNSxcbiAgICAgIDEzMSxcbiAgICAgIDEyLFxuICAgICAgMTgxLFxuICAgICAgNzIsXG4gICAgICA3MSxcbiAgICAgIDE5NyxcbiAgICAgIDE2MCxcbiAgICAgIDU1LFxuICAgICAgMTUyLFxuICAgICAgNyxcbiAgICAgIDE3MCxcbiAgICAgIDIyMixcbiAgICAgIDExNSxcbiAgICAgIDUyLFxuICAgICAgMThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2MCxcbiAgICAgIDIzMyxcbiAgICAgIDM5LFxuICAgICAgMjE3LFxuICAgICAgMjQyLFxuICAgICAgMjU0LFxuICAgICAgMTYsXG4gICAgICAxNDUsXG4gICAgICA1MixcbiAgICAgIDIzNixcbiAgICAgIDEwLFxuICAgICAgMjcsXG4gICAgICA4OSxcbiAgICAgIDEzNyxcbiAgICAgIDk1LFxuICAgICAgMTUsXG4gICAgICAxMzQsXG4gICAgICAxMTIsXG4gICAgICAyMTIsXG4gICAgICAxNzVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOenA3ZUlKRU5pcDU3WUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjFNaElnQS9mYzFtRk45bVl3RzdlcndWZGtVUUFvM25wcmltdmxCNElsZ3c9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiRW1ud2wwMUxmbm9Sc25qSFpXZDFlZk00YzIxUm1Hd3ZzZnlDWFBoN0ZHNDl0VTROaWIvWFRrNWVsQnEya1pGZVlYcEx2ZlJBenV1S01sVFJTdGNkQlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiQmx2V2RhazlocmNENFV2QUxSd2FWYjF1UGdGYTF1OWhrUmI4V2hkODlLNGdTUnY3dmZ4THpxVUUwSFo5OTdBVllNVnJnUkNlaGV5QUxyZVQ2S1VBRHc9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MDI3MDA3Nzk1OjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjQxNzA0MzAwNTQ1Mzc6NEBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgwMjcwMDc3OTU6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI1NTUxODM1XG59Igp9"  // PUT your SESSION_ID 


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
