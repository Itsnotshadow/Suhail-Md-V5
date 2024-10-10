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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_21_10_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDI5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDgzLFxuICAgICAgICA0MSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjA3LFxuICAgICAgICA1OSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjAxLFxuICAgICAgICA1OCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMzksXG4gICAgICAgIDI0OCxcbiAgICAgICAgNzEsXG4gICAgICAgIDI0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMSxcbiAgICAgICAgNDIsXG4gICAgICAgIDY3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDUsXG4gICAgICAgIDExMixcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYzLFxuICAgICAgICA5NyxcbiAgICAgICAgOTQsXG4gICAgICAgIDEwLFxuICAgICAgICAzNixcbiAgICAgICAgMTQsXG4gICAgICAgIDUzLFxuICAgICAgICAxLFxuICAgICAgICA5OSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIyNixcbiAgICAgICAgOTYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgODUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDc1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDY0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDQ3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTgzLFxuICAgICAgICAyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDUyLFxuICAgICAgICAyMSxcbiAgICAgICAgNjQsXG4gICAgICAgIDU5LFxuICAgICAgICA3NixcbiAgICAgICAgNTEsXG4gICAgICAgIDIxLFxuICAgICAgICA3MCxcbiAgICAgICAgNzEsXG4gICAgICAgIDUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTMxLFxuICAgICAgICA3OCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDgzLFxuICAgICAgICAyMzksXG4gICAgICAgIDE3NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDg2LFxuICAgICAgICAyNCxcbiAgICAgICAgOCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDg2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMCxcbiAgICAgICAgNTEsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDU5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEzMixcbiAgICAgICAgNzcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDQ5LFxuICAgICAgICA3MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIyLFxuICAgICAgICA3MCxcbiAgICAgICAgODIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICA4NSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxODQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDEyLFxuICAgICAgICAxMzksXG4gICAgICAgIDQxLFxuICAgICAgICA0NixcbiAgICAgICAgMTcxLFxuICAgICAgICAxMDksXG4gICAgICAgIDIwNixcbiAgICAgICAgMTQsXG4gICAgICAgIDM0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDUyLFxuICAgICAgICAzMixcbiAgICAgICAgNDcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNjksXG4gICAgICAgIDIyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjA4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MSxcbiAgICAgICAgMTEyLFxuICAgICAgICA3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDg0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE5LFxuICAgICAgICAyMTksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjE0LFxuICAgICAgICAzMSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA2OSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDM2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDQwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDMzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE1NixcbiAgICAgICAgNDYsXG4gICAgICAgIDE2LFxuICAgICAgICAxODMsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgOTJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNCxcbiAgICAgICAgNDksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMixcbiAgICAgICAgMTM4LFxuICAgICAgICA4MixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDk0LFxuICAgICAgICAxODksXG4gICAgICAgIDMyLFxuICAgICAgICAxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTQwLFxuICAgICAgICAzOCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTc4LFxuICAgICAgICA3MyxcbiAgICAgICAgODcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA5MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDIyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDMxLFxuICAgICAgICA3OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTMzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTIxLFxuICAgICAgICA5NixcbiAgICAgICAgMTA3LFxuICAgICAgICA0NyxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMDksXG4gICAgICAgIDI1MixcbiAgICAgICAgMjMwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTA1LFxuICAgICAgICA2OSxcbiAgICAgICAgNzUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTY0LFxuICAgICAgICA1LFxuICAgICAgICAxODUsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNDIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiTWYreDgyUlFCRHBtRUF4VDVCTG1CRTRSQlRPVnZOSHVaVXBLTWw2eGZ3TT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI0NDc0NzIwMTU3NjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNBRkY0OEQ0NkIxOUZEQ0IzRkU0XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyODU1MjA5NFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjQ0NzQ3MjAxNTc2M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0E1MTBFMkEwQjg4RTExRkNFNjJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI4NTUyMDk3XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiA2MSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiA2MSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjhERVdUbGhWU2RHeFROMkpOWklhV1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiYjc2OTZiNDItYTZmMi00MjljLWI0ODgtNzZhOTFkNjg5NGM1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDM2LFxuICAgICAgMzEsXG4gICAgICA1MSxcbiAgICAgIDMyLFxuICAgICAgMTI5LFxuICAgICAgNjcsXG4gICAgICAyMzQsXG4gICAgICAyMTQsXG4gICAgICAzNSxcbiAgICAgIDI4LFxuICAgICAgNDcsXG4gICAgICAxNDAsXG4gICAgICAyMTAsXG4gICAgICAxNDUsXG4gICAgICAyMjEsXG4gICAgICA1NSxcbiAgICAgIDg1LFxuICAgICAgMjExLFxuICAgICAgMjQyLFxuICAgICAgMjE1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU1LFxuICAgICAgMTYzLFxuICAgICAgMTM0LFxuICAgICAgMTc2LFxuICAgICAgMTkwLFxuICAgICAgMTYsXG4gICAgICA0MSxcbiAgICAgIDM0LFxuICAgICAgMTAyLFxuICAgICAgMTUxLFxuICAgICAgMjUyLFxuICAgICAgOTIsXG4gICAgICAxODIsXG4gICAgICAyMDYsXG4gICAgICAzMyxcbiAgICAgIDk0LFxuICAgICAgOTMsXG4gICAgICAyMjMsXG4gICAgICAxNzksXG4gICAgICAxNjZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiU1ZURkRWWjdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjQ0NzQ3MjAxNTc2MzozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNjI3ODgxMTA5MzQwMjU6M0BsaWRcIixcbiAgICBcIm5hbWVcIjogXCLwnZen8J2XtfCdmILwnZea4pyw4pyeXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTE9JdC9rT0VKbTVucmdHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJYbFF4c0E3SFo5UHhmL3ZrUEN1M01KQXozS0ZnbFgvK2ZIc0w4QWZYSlg0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkltL3BSbjFNZmVMak5RTldGL1lIT0NGdWtzQVo3ZDI2aGZTemNhQ3o1QnRwNGJUVFlhTmszbGxRRURjcTJNak8rVC9KUURMUWovMnBXd25Od3BQZERBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImoxRWdPYVJ5NjRuT05TZ2ZqQzJNNENxNUdiaE1QQ2o0bzlReGtpZWVJNzczSnlZZVdTdUlpYnNyZWk0emlvblRRRjF1c1lIK3Voa2YyOFlGY2tUeUNnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjQ0NzQ3MjAxNTc2MzozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTI2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyODU1MjA5MyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUhhVVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSGFVLmpzb24iOiAie1wia2V5RGF0YVwiOlwic3o1Z1RmblFvUzI1bWdPZ0l6YUh3VEdsM0YzRGlhcGNNZm00UGlEb1N3bz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo0MDEyNzUzOTcxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMSwwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjczNTA5MDQxNjNcIn0iCn0="  // PUT your SESSION_ID 


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
