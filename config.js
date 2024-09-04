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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "447301535876";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "447301535876";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_42_08_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMyxcbiAgICAgICAgNCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDc4LFxuICAgICAgICA4NSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDkyLFxuICAgICAgICA0NyxcbiAgICAgICAgMTI3LFxuICAgICAgICA4OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDcxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDYyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDU1LFxuICAgICAgICAyMTksXG4gICAgICAgIDg0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNzEsXG4gICAgICAgIDcsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyLFxuICAgICAgICAyOSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMixcbiAgICAgICAgMTM4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxOSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjM4LFxuICAgICAgICA5MyxcbiAgICAgICAgOTcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTUyLFxuICAgICAgICA1OCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTMzLFxuICAgICAgICA5NyxcbiAgICAgICAgMTc1LFxuICAgICAgICAzMCxcbiAgICAgICAgMjUsXG4gICAgICAgIDYxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDYzLFxuICAgICAgICA2OSxcbiAgICAgICAgODEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyOCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDU4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA2OCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTQyLFxuICAgICAgICA2OCxcbiAgICAgICAgMTY5LFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NixcbiAgICAgICAgMjAwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDk5LFxuICAgICAgICAxODEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTg1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDk5LFxuICAgICAgICA0MyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNixcbiAgICAgICAgMTM0LFxuICAgICAgICAzNyxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMjIxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDc2LFxuICAgICAgICAyMyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNzIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTA1LFxuICAgICAgICAwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjAxLFxuICAgICAgICA4MyxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDkzLFxuICAgICAgICA5OSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMCxcbiAgICAgICAgNDIsXG4gICAgICAgIDQxLFxuICAgICAgICAxMzksXG4gICAgICAgIDE3NixcbiAgICAgICAgMjI2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE0LFxuICAgICAgICA0NyxcbiAgICAgICAgODAsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM2LFxuICAgICAgICA2MyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNDcsXG4gICAgICAgIDksXG4gICAgICAgIDU2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDgyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgODMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA1MixcbiAgICAgICAgMjQ5LFxuICAgICAgICA0NSxcbiAgICAgICAgMjMzLFxuICAgICAgICA1NixcbiAgICAgICAgMTQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTk1LFxuICAgICAgICAzMCxcbiAgICAgICAgMTA1LFxuICAgICAgICA4MyxcbiAgICAgICAgNzEsXG4gICAgICAgIDM2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTE1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDksXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA5NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxLFxuICAgICAgICAyNSxcbiAgICAgICAgOTAsXG4gICAgICAgIDI0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTIyLFxuICAgICAgICAxMDksXG4gICAgICAgIDE4OCxcbiAgICAgICAgODQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDk0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDI5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDcwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE0NixcbiAgICAgICAgNyxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDg3LFxuICAgICAgICA2MixcbiAgICAgICAgMzAsXG4gICAgICAgIDMxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDc5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDQxLFxuICAgICAgICAxOCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMixcbiAgICAgICAgNjcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNixcbiAgICAgICAgMTU2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTU1LFxuICAgICAgICA4NCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIwNixcbiAgICAgICAgNzQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjgsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDY5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjFld2k1cVN2NjVTbUFQRjhjblFDc0JEZW5yT3NOU1VZZkZpUk5INTV6OTg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiNDQ3MzAxNTM1ODc2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI3MTQzOTRERURBQ0I0NDQ4QUI0QzFGQUMzNjkyMEE1NlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjUxMjk3NDRcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI0NDczMDE1MzU4NzZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkEwREI1NzQ3QUU0Qzc4NDI5NkNDMkQ2NjAyQ0Q0MUZDXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyNTEyOTc0NFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJoUExyaVg1aVJTeWZoWVVnM3JEUFhnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjdjZjAxZjExLWVjNzEtNGY1Yi04ZWVlLTE2MGMzYTJhZmE4OVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzMsXG4gICAgICAyMDUsXG4gICAgICAyNSxcbiAgICAgIDE5NixcbiAgICAgIDE1MCxcbiAgICAgIDQ1LFxuICAgICAgMTQ0LFxuICAgICAgMzEsXG4gICAgICAxNTUsXG4gICAgICAxNjIsXG4gICAgICAxOSxcbiAgICAgIDEyMyxcbiAgICAgIDE2OCxcbiAgICAgIDIxLFxuICAgICAgNTIsXG4gICAgICAxMDQsXG4gICAgICAyMjUsXG4gICAgICAxNzEsXG4gICAgICAxNTcsXG4gICAgICA1OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDMsXG4gICAgICAxNjUsXG4gICAgICAyMzcsXG4gICAgICAxNDUsXG4gICAgICA2OSxcbiAgICAgIDE0OSxcbiAgICAgIDIwNCxcbiAgICAgIDEwMCxcbiAgICAgIDI2LFxuICAgICAgMTIxLFxuICAgICAgODQsXG4gICAgICA1OCxcbiAgICAgIDY4LFxuICAgICAgMjA3LFxuICAgICAgMjQ5LFxuICAgICAgMTY5LFxuICAgICAgMjM5LFxuICAgICAgMTIyLFxuICAgICAgMjM1LFxuICAgICAgOTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVjZSWDc2Tk5cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjQ0NzMwMTUzNTg3Njo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNTYwODM5Nzc1NDQ4NTo4QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIkNvdXJ0bmV5IOKdpO+4j1wiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BQd2txa0ZFSW5JemJZR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiVXNWdTMzNHNZcmE2Tm9uLzZacGdvZXNabU5RaWYrbi8zL3JzWFB5UDQzYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJEK3IwRlJuNy85d2dmVmpMTUt0MWxnM0pibDlTcG50L1JWLzlEMWtxV2I4bis4cU5KUzl3TGRmbUQ3WTdtTTd6NzNrZ3JsckR0dnViQjkwZFVZK0NEQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJtbDVFSlQ4M2ZFdkluOHFGL2VsWDJ5cWdvZkF3cU1rajZ6Qll0STRsbGwveERkSDNOYWdKNWp6NFZaTmRKRGdSS0NkNWlVWmd5TkU1TTQ1cDJLcHZBQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI0NDczMDE1MzU4NzY6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTE5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjUxMjk3NDAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFZ2VcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUVnZS5qc29uIjogIntcImtleURhdGFcIjpcIkdoOWVZQ2p0V3lvc0M0ZjU3eWRNYzdmeDM2eDJHS0Q2Ty9zMWNVWU9Rdk09XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQyODQ2OTg3NSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzI1MTI5NzQxNDg1XCJ9Igp9"  // PUT your SESSION_ID 


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
