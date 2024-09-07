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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2349064140887";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349064140887";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_21_09_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDg2LFxuICAgICAgICA2MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgODksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDg5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjAwLFxuICAgICAgICA0OSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgOTksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjE4LFxuICAgICAgICA2NixcbiAgICAgICAgMTgxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI5LFxuICAgICAgICA0MixcbiAgICAgICAgMTkxLFxuICAgICAgICA4OSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTExLFxuICAgICAgICA0NixcbiAgICAgICAgMTcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDMyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxODQsXG4gICAgICAgIDczLFxuICAgICAgICA1OCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTM3LFxuICAgICAgICA4MixcbiAgICAgICAgMjQxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMzksXG4gICAgICAgIDYzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIwNixcbiAgICAgICAgNDUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMzIsXG4gICAgICAgIDQ3LFxuICAgICAgICA4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNTgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjMyLFxuICAgICAgICAzMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjExLFxuICAgICAgICAxMDksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTYyLFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNixcbiAgICAgICAgMTg4LFxuICAgICAgICA2MSxcbiAgICAgICAgMTExLFxuICAgICAgICA5NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjIwLFxuICAgICAgICA0MCxcbiAgICAgICAgODIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTk1LFxuICAgICAgICA2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTczLFxuICAgICAgICA2LFxuICAgICAgICAxODksXG4gICAgICAgIDE2NixcbiAgICAgICAgMTgxLFxuICAgICAgICA3NyxcbiAgICAgICAgNixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDU5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIzMixcbiAgICAgICAgNjgsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMTY0LFxuICAgICAgICAyMixcbiAgICAgICAgMTU1LFxuICAgICAgICAyMDksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTY1LFxuICAgICAgICAzOCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDkxLFxuICAgICAgICA1NyxcbiAgICAgICAgODksXG4gICAgICAgIDUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMzIsXG4gICAgICAgIDUyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDgxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTcsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNTksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMzgsXG4gICAgICAgIDU2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTQ0LFxuICAgICAgICA1OSxcbiAgICAgICAgMjI1LFxuICAgICAgICA1MSxcbiAgICAgICAgMTkyLFxuICAgICAgICA4NSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxODgsXG4gICAgICAgIDk3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDMwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTE0LFxuICAgICAgICA3NSxcbiAgICAgICAgMCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMzEsXG4gICAgICAgIDU3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDY1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDM0LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA3NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNzksXG4gICAgICAgIDExLFxuICAgICAgICA5OSxcbiAgICAgICAgMTUzLFxuICAgICAgICA1NyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDU3LFxuICAgICAgICAyNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDk3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDU0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDI0MixcbiAgICAgICAgOTcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDg4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDUzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjAxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNzIsXG4gICAgICAgIDY5LFxuICAgICAgICAzMixcbiAgICAgICAgODQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTIyLFxuICAgICAgICAyNCxcbiAgICAgICAgNzIsXG4gICAgICAgIDY1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE5MixcbiAgICAgICAgODgsXG4gICAgICAgIDU3LFxuICAgICAgICA5NyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNCxcbiAgICAgICAgMTQzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI0QkZXSEllVzMyTVJJdExGN3E4K05sMU1MdkdJdklpRjhxRHlteTRkK2lRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ6SEZXNGNOTlJ1eV84bmVFNm5wQmxnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjdkY2IyMmI0LTIxMWItNDQ0Ni1iYWIwLThjNWU4MTIzZDRlNlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDMsXG4gICAgICA5NSxcbiAgICAgIDE5NyxcbiAgICAgIDIzNyxcbiAgICAgIDUyLFxuICAgICAgMTc2LFxuICAgICAgMTk4LFxuICAgICAgNDQsXG4gICAgICAxMDYsXG4gICAgICAxMDcsXG4gICAgICAyNTMsXG4gICAgICAxMzMsXG4gICAgICAyNTAsXG4gICAgICAxODEsXG4gICAgICAyMDEsXG4gICAgICAxMjksXG4gICAgICAyMDgsXG4gICAgICA1NyxcbiAgICAgIDE5LFxuICAgICAgMjUyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMyxcbiAgICAgIDQ0LFxuICAgICAgMTIzLFxuICAgICAgMTUwLFxuICAgICAgMjAwLFxuICAgICAgMjMyLFxuICAgICAgNDEsXG4gICAgICAxNjIsXG4gICAgICAxMDYsXG4gICAgICAxNDEsXG4gICAgICA2NyxcbiAgICAgIDM2LFxuICAgICAgMTgsXG4gICAgICAxNDksXG4gICAgICA5MyxcbiAgICAgIDExNSxcbiAgICAgIDEwOCxcbiAgICAgIDIwOSxcbiAgICAgIDEzMCxcbiAgICAgIDI1MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xqMGkvNEhFT200N3JZR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiUzV1SEVVeU1QTUhQcWZ2eTJWQVp3N05la1FvdGt1ZFc0WkdpUmY2QUpoYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJOaUtOQzlrTEpGa1hhaDh2V2lKNW5mZG9HNHV4VnBqR3JsQnYyMkVLNEU4MVV2SHVFMngzRHY0RVNHVmdWL0c2akhWdzJJOERwcFE0b0R3M2s5UEFEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJLSytnWnkvcTdmRXpiZ1lTVmUvdHFkRHI1YmZ6RFk0NHVOSnFJOWQ1QVIya0c2Q2czQWlxK290alYwUkRuMU5TR0FxZ0lXMGYwZ1FWd3MwcGlBUlFqQT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwNjQxNDA4ODc6MjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjU2ODczOTU2OTUwMTY0OjIwQGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTA2NDE0MDg4NzoyMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjU2Njg0NjFcbn0iCn0="  // PUT your SESSION_ID 


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
