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


global.devs = "2349131021928" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349131021928";




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
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,2349131021928";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,2349131021928";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2349131021928,2349059298589";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_59_09_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICA4MyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDczLFxuICAgICAgICAwLFxuICAgICAgICA0NCxcbiAgICAgICAgNTcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjYsXG4gICAgICAgIDIwLFxuICAgICAgICA3MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDcwLFxuICAgICAgICAxMSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyOCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIzLFxuICAgICAgICAzOSxcbiAgICAgICAgMjMwLFxuICAgICAgICA2MCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDk2LFxuICAgICAgICAyMixcbiAgICAgICAgNzIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTE1LFxuICAgICAgICA4OCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyOCxcbiAgICAgICAgOSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDc4LFxuICAgICAgICA3MSxcbiAgICAgICAgNzgsXG4gICAgICAgIDI1LFxuICAgICAgICAyOSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxODMsXG4gICAgICAgIDc2LFxuICAgICAgICAyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMzEsXG4gICAgICAgIDcyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTQsXG4gICAgICAgIDE2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNSxcbiAgICAgICAgMjMwLFxuICAgICAgICA2NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTMxLFxuICAgICAgICAwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDExNSxcbiAgICAgICAgOTAsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQyLFxuICAgICAgICAzNyxcbiAgICAgICAgMjAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDM4LFxuICAgICAgICA2NSxcbiAgICAgICAgMyxcbiAgICAgICAgNzgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgODYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyOSxcbiAgICAgICAgMjEwLFxuICAgICAgICA4MCxcbiAgICAgICAgMjMzLFxuICAgICAgICA0MixcbiAgICAgICAgMTI2LFxuICAgICAgICA4OCxcbiAgICAgICAgMjExLFxuICAgICAgICAzNCxcbiAgICAgICAgMjgsXG4gICAgICAgIDQyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjAwLFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDgzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTI0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMzksXG4gICAgICAgIDE3NixcbiAgICAgICAgMTk1LFxuICAgICAgICA4MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgODksXG4gICAgICAgIDE3MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjExLFxuICAgICAgICAyMzcsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDkxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTA3LFxuICAgICAgICAzNixcbiAgICAgICAgMTQ3LFxuICAgICAgICA1NCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDM2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTQzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTkzLFxuICAgICAgICA4NyxcbiAgICAgICAgNjUsXG4gICAgICAgIDkyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjAsXG4gICAgICAgIDQzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNjhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA5OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjgsXG4gICAgICAgIDIwLFxuICAgICAgICA5NSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNzksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTY1LFxuICAgICAgICA3MCxcbiAgICAgICAgMixcbiAgICAgICAgODksXG4gICAgICAgIDE0MCxcbiAgICAgICAgNzIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgOTIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTg4LFxuICAgICAgICA4MixcbiAgICAgICAgMTA2LFxuICAgICAgICAzNixcbiAgICAgICAgMTk0LFxuICAgICAgICA0NSxcbiAgICAgICAgMTE4LFxuICAgICAgICA3LFxuICAgICAgICA1NCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDMzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDU0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTU3LFxuICAgICAgICA2NixcbiAgICAgICAgMTMxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTMzLFxuICAgICAgICA4NCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTcxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEwMixcbiAgICAgICAgNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTYxLFxuICBcImFkdlNlY3JldEtleVwiOiBcInVtYkE0S0o2NFRoSGlTb2Q1MjYzbXorNkIySVZpeHdrdU9ZSERYeXpBbGc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTEzMTAyMTkyOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0EyOTg4ODJEOTRGNzAyQzYwREFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI1MjU2Nzc5XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjluSjdZMlVBUUd5cVdXOWZUQ1RScFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZTJjMWJiYzctZjI5ZC00YzI3LThlMTItODFmOTE0MTI4NzdkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxMCxcbiAgICAgIDksXG4gICAgICA2MCxcbiAgICAgIDE1NSxcbiAgICAgIDk5LFxuICAgICAgMTY1LFxuICAgICAgMTI4LFxuICAgICAgMjUyLFxuICAgICAgMjIyLFxuICAgICAgMTg2LFxuICAgICAgMjU1LFxuICAgICAgMjUwLFxuICAgICAgMTEzLFxuICAgICAgODAsXG4gICAgICAxMjQsXG4gICAgICAxMTksXG4gICAgICAyMjAsXG4gICAgICAxNzEsXG4gICAgICAxNTIsXG4gICAgICA0MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjA1LFxuICAgICAgMTk1LFxuICAgICAgMTY1LFxuICAgICAgNDQsXG4gICAgICAyMDUsXG4gICAgICAyNDQsXG4gICAgICAxMjAsXG4gICAgICA0NixcbiAgICAgIDgwLFxuICAgICAgMTI1LFxuICAgICAgMTc5LFxuICAgICAgMTQ5LFxuICAgICAgMTU2LFxuICAgICAgMjI4LFxuICAgICAgODcsXG4gICAgICAxMixcbiAgICAgIDE3NSxcbiAgICAgIDc0LFxuICAgICAgMTI4LFxuICAgICAgMjJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLV3BwUDhORU1PbzFiWUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImxzc2xxMGFPQ21mdXpvaENoMGtRbVF3WkU4V29tclQ5YVYwU29pTVNQV0k9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiUU9SZ3cvRXNlMlBTMHZOUlFVSk1VWmlhZ0FtaXgreDJXNDAwaWVtWGFaQ2txVURpWk5SQUYzSGJYTHJ4bjlPWG5yQm1iYmE1MHZPU2VZUVVWUVpjaEE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiWjZ6ZFFxUWhCNmozMWxKa1c0VlpnU28weU1ISmgxSjFiRSt3Y0xaUmp3NjhIRmlkRTJ0M0NyMC8vUDN5WmFQUVNQMEhERXJCcm5MWEpDMjFqcHl4QlE9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTMxMDIxOTI4OjEzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxOTQ4MDMwNzM1NTY0ODY6MTNAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTMxMDIxOTI4OjEzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA5OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjUyNTY3NzRcbn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.9",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "DoNwIz-ᴍᴅ",
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
