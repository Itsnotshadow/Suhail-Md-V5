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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2347087941249";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347087941249";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_04_52_10_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDI5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTM3LFxuICAgICAgICA4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDY0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDU5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDUyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDkwLFxuICAgICAgICAxODUsXG4gICAgICAgIDgxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTczLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNzUsXG4gICAgICAgIDM0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTc3LFxuICAgICAgICAzNSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMixcbiAgICAgICAgMTkxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMzYsXG4gICAgICAgIDU5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTA0LFxuICAgICAgICA4MyxcbiAgICAgICAgNjksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTUsXG4gICAgICAgIDg1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTA3LFxuICAgICAgICAzNCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMzksXG4gICAgICAgIDM5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTUwLFxuICAgICAgICAzNixcbiAgICAgICAgMTUzLFxuICAgICAgICA1OCxcbiAgICAgICAgMCxcbiAgICAgICAgODYsXG4gICAgICAgIDIyMixcbiAgICAgICAgODEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyOCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyNCxcbiAgICAgICAgNzUsXG4gICAgICAgIDM4LFxuICAgICAgICA0NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDQwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTYxLFxuICAgICAgICA1NSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE3LFxuICAgICAgICA2NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTU5LFxuICAgICAgICA1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTYxLFxuICAgICAgICA3OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDcxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMzEsXG4gICAgICAgIDcxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNTgsXG4gICAgICAgIDE3LFxuICAgICAgICAxODgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjU1LFxuICAgICAgICA0NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTkxLFxuICAgICAgICAyMjksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTEzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTUsXG4gICAgICAgIDY4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMzcsXG4gICAgICAgIDM5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxODksXG4gICAgICAgIDEzMCxcbiAgICAgICAgNCxcbiAgICAgICAgMTEwLFxuICAgICAgICA0NixcbiAgICAgICAgMTM2LFxuICAgICAgICA2NyxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjAzLFxuICAgICAgICA3MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTAsXG4gICAgICAgIDQ3LFxuICAgICAgICA2MyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE1LFxuICAgICAgICAxOTksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNjZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxODcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjE5LFxuICAgICAgICA5MSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxODIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjE5LFxuICAgICAgICA4NixcbiAgICAgICAgMTA2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgODAsXG4gICAgICAgIDczLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIwMixcbiAgICAgICAgOTcsXG4gICAgICAgIDc2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDQ2LFxuICAgICAgICA0MCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTgsXG4gICAgICAgIDU0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEzN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNDEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiVzdXSGozUDhhYkxyb1VXM3VlK0pXd0Yrazkrc0Z4MUVrY1E2Q2hYWWNQMD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiYlJxV2ZWOVFSVktvaE9DakxpY1R2UVwiLFxuICBcInBob25lSWRcIjogXCJhZWRkNWUwMC1kYzc4LTQ0ODktYTFjZS1hOTI1NzE4ZjQ4NGRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQwLFxuICAgICAgMTgsXG4gICAgICAxODIsXG4gICAgICA1OSxcbiAgICAgIDIxNSxcbiAgICAgIDIxNSxcbiAgICAgIDcyLFxuICAgICAgNTksXG4gICAgICAyMjIsXG4gICAgICAxMjgsXG4gICAgICAyMjIsXG4gICAgICAyMzUsXG4gICAgICAxNCxcbiAgICAgIDE5LFxuICAgICAgNDgsXG4gICAgICAxNDksXG4gICAgICAxNjMsXG4gICAgICAxMzgsXG4gICAgICA2NCxcbiAgICAgIDQ5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxLFxuICAgICAgMTY3LFxuICAgICAgMjksXG4gICAgICAxNDEsXG4gICAgICA2MSxcbiAgICAgIDE5NCxcbiAgICAgIDE0MixcbiAgICAgIDk1LFxuICAgICAgMTU1LFxuICAgICAgMzQsXG4gICAgICAxNDIsXG4gICAgICA3OSxcbiAgICAgIDEwNixcbiAgICAgIDEyMSxcbiAgICAgIDI0LFxuICAgICAgNzAsXG4gICAgICAyMTUsXG4gICAgICA1LFxuICAgICAgMTAsXG4gICAgICAxMzZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWVhKTldFOUFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwODc5NDEyNDk6MjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjc5OTk4MzQ2MDY4MDc0OjIyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09mWSsrb0hFSWoxa3JnR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiYlZ2dUZiYXo4WjVQWURJUVptdk5yQXB0bXROc3FMWldDWWZKTkhRdk1CWT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJIOG5tdkkreFlvYXRZME4vN0hiRFpWVkNHTmpzWFNrYWQ1a04rV2UyVFQ5Vy9zTXdkMFE5NWE1WEtjN3pMTTVDSnhWRUZTV1dIblZmd1FtdUF5M3RCZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIvNFF2R0sySGZvdWptRzE5NFlkY1ova29sRlJSWTJtaWFOWjZYYU80L2V5NHNWV2tGMlRwRE9VdDI2dkRRQXdpdEE1QzlJL3c3eGRvVUR3cVA2RUdpQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDg3OTQxMjQ5OjIyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyODM2MzE2OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQVBnUVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUGdRLmpzb24iOiAie1wia2V5RGF0YVwiOlwicDd3RDNYWEJ4dkQzdVRrckhMMFcxUnNHOWVPdDRWdEErRzRxUGw0bDJ2TT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMTAzMzcyOTAyLFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMCwzXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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
