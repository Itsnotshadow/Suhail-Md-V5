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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2348165820748";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348165820748";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_04_09_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICA4OCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDcwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgOCxcbiAgICAgICAgODMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjAxLFxuICAgICAgICAzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTAzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMTksXG4gICAgICAgIDIyLFxuICAgICAgICAyNDksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMixcbiAgICAgICAgMzIsXG4gICAgICAgIDE2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTA4LFxuICAgICAgICA1NixcbiAgICAgICAgNjQsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjM0LFxuICAgICAgICAzNyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMDksXG4gICAgICAgIDk2LFxuICAgICAgICA5NixcbiAgICAgICAgMjAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDUyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE1LFxuICAgICAgICAzNyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxODUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTk1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDkyLFxuICAgICAgICAyNixcbiAgICAgICAgMTMxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDQ2LFxuICAgICAgICA3OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMjE4LFxuICAgICAgICA5OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjE2LFxuICAgICAgICA0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDkzLFxuICAgICAgICA5NSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjQsXG4gICAgICAgIDkxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTA0LFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgODYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNTQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNixcbiAgICAgICAgMTIyLFxuICAgICAgICAyOSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDY4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDQwLFxuICAgICAgICA1OSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDMwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxODksXG4gICAgICAgIDMyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxLFxuICAgICAgICAxOCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDY0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTY0LFxuICAgICAgICA2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTE4LFxuICAgICAgICA5NCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMyxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg3LFxuICAgICAgICAxNTksXG4gICAgICAgIDU0LFxuICAgICAgICAyMjksXG4gICAgICAgIDEyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDcwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDkyLFxuICAgICAgICAyNDksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTkyLFxuICAgICAgICA2NixcbiAgICAgICAgMTExLFxuICAgICAgICAxMjIsXG4gICAgICAgIDExOCxcbiAgICAgICAgNzksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjAzLFxuICAgICAgICA1OCxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgODlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTAxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTkyLFxuICAgICAgICA4OCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDMwLFxuICAgICAgICA2NixcbiAgICAgICAgMTIsXG4gICAgICAgIDQ3LFxuICAgICAgICAzNCxcbiAgICAgICAgNTQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTc1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDk1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDQzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDU0LFxuICAgICAgICAxNyxcbiAgICAgICAgODYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMixcbiAgICAgICAgMjQsXG4gICAgICAgIDkzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDc5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIzMixcbiAgICAgICAgODQsXG4gICAgICAgIDIwNixcbiAgICAgICAgNDEsXG4gICAgICAgIDUzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDI5LFxuICAgICAgICAxNixcbiAgICAgICAgMjE5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE4NixcbiAgICAgICAgNTYsXG4gICAgICAgIDg5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDgxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogOTAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiQWpTQy9PaTVJWkRGQTdYWVVvSG5RYnF4bHFwM0NYS3JHOVNoSVVoVmJZOD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSVp5ZXdpVHhRZHFVMFltUWxucEFDd1wiLFxuICBcInBob25lSWRcIjogXCI5NjYyNzI4OS1hZTg5LTQyMGQtYmQ3YS0zODY0MTU2ZmE4YTVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTI1LFxuICAgICAgMjA3LFxuICAgICAgMjE4LFxuICAgICAgNjMsXG4gICAgICAxMjEsXG4gICAgICAyNDEsXG4gICAgICAzOCxcbiAgICAgIDIzNixcbiAgICAgIDIxNixcbiAgICAgIDUzLFxuICAgICAgOSxcbiAgICAgIDIwNixcbiAgICAgIDE2MixcbiAgICAgIDIwOSxcbiAgICAgIDE2OSxcbiAgICAgIDE2OCxcbiAgICAgIDEzLFxuICAgICAgODAsXG4gICAgICAxMzYsXG4gICAgICAyMDhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDUsXG4gICAgICAyMSxcbiAgICAgIDgsXG4gICAgICAyMjAsXG4gICAgICA4MSxcbiAgICAgIDg3LFxuICAgICAgMjUyLFxuICAgICAgMzksXG4gICAgICAyMTMsXG4gICAgICAxMzcsXG4gICAgICAxMTUsXG4gICAgICAxMCxcbiAgICAgIDEwNSxcbiAgICAgIDEwMCxcbiAgICAgIDE0NyxcbiAgICAgIDIxNyxcbiAgICAgIDI0NCxcbiAgICAgIDEwNSxcbiAgICAgIDE4OCxcbiAgICAgIDU5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjdKN0czUUE2XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTY1ODIwNzQ4OjYxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMDIzNzkxODU4MjgwNTA6NjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSXFzdkpJRkVKdU82YllHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJiWHdoWFVvMk5ya0prVkpSeW5IMFZUVVVLcDBxUzBOWHY4eXM0eWIvWUdnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIk55N3c4aVlmR1Q0NWc5aWpIMlpEQTY0djYzWHBjYnA5OGlBQmFKdzJ5bHhQUFNVM2g4eXAxNEd0RUVHaVZYSDZrYUJkSWlRc2I4bk5QeU1wZjd5YkNBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInF2ZWIvcndlRlREd1pPVGg5ci8xaDBmQ2V5RVZPUWgrNW94T1lKbE14YTl6Rkd4L2JvM2FQNVRic2pYeHBQZTdmVHkrVEs0N2JmY3UyTUE5N1V4TUFRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxNjU4MjA3NDg6NjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMDRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNTU4MTA4NixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUxnRVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTGdFLmpzb24iOiAie1wia2V5RGF0YVwiOlwicVVSeGZmelRpM0t3bHVOTUdRWW02SlRaRTFldGhjc0UxSHhNY0dGMy9sYz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMzgwOTE0Njk4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjU1ODEwOTE0MDdcIn0iCn0="  // PUT your SESSION_ID 


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
