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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "256709547277";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_02_08_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICA3MixcbiAgICAgICAgMjE0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDI5LFxuICAgICAgICAzNyxcbiAgICAgICAgMTUyLFxuICAgICAgICA5NSxcbiAgICAgICAgMTI0LFxuICAgICAgICA3OCxcbiAgICAgICAgMTAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgOTAsXG4gICAgICAgIDc3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgOTksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxODMsXG4gICAgICAgIDExOSxcbiAgICAgICAgNSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTcyLFxuICAgICAgICA3MCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEyNixcbiAgICAgICAgNjMsXG4gICAgICAgIDYwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNDQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDk1LFxuICAgICAgICA5MixcbiAgICAgICAgMjM5LFxuICAgICAgICA2MixcbiAgICAgICAgMTA0LFxuICAgICAgICAxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjE1LFxuICAgICAgICA3MyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIwMixcbiAgICAgICAgNzgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgOTMsXG4gICAgICAgIDcyLFxuICAgICAgICAxMixcbiAgICAgICAgMTk5LFxuICAgICAgICA0NixcbiAgICAgICAgMTkzLFxuICAgICAgICA5NyxcbiAgICAgICAgMTYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNjUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTkyLFxuICAgICAgICAxMixcbiAgICAgICAgMjQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNTgsXG4gICAgICAgIDIxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTk3LFxuICAgICAgICA0MixcbiAgICAgICAgOTUsXG4gICAgICAgIDY1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMSxcbiAgICAgICAgOCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDU2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIwNixcbiAgICAgICAgODMsXG4gICAgICAgIDIyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjgsXG4gICAgICAgIDEwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMCxcbiAgICAgICAgMTY0LFxuICAgICAgICAzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDk5LFxuICAgICAgICA3NixcbiAgICAgICAgMCxcbiAgICAgICAgMzdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICA4NyxcbiAgICAgICAgMzYsXG4gICAgICAgIDIsXG4gICAgICAgIDE0LFxuICAgICAgICAxOSxcbiAgICAgICAgMTgwLFxuICAgICAgICA3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDQ2LFxuICAgICAgICA4MCxcbiAgICAgICAgMjM0LFxuICAgICAgICAzNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDgxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDM5LFxuICAgICAgICA5OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgOTIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTUwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTI2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMTUzLFxuICAgICAgICAzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA2MyxcbiAgICAgICAgMzksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDY2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNTksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDYsXG4gICAgICAgIDc4LFxuICAgICAgICA4MixcbiAgICAgICAgMTEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTI4LFxuICAgICAgICA2MSxcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDY1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQwLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA4M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEsXG4gICAgICAgIDIyMixcbiAgICAgICAgOCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDYxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTAyLFxuICAgICAgICAzLFxuICAgICAgICA3OSxcbiAgICAgICAgNjYsXG4gICAgICAgIDY0LFxuICAgICAgICAzNixcbiAgICAgICAgMzcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxODUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMzksXG4gICAgICAgIDIyMixcbiAgICAgICAgMTI5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDUwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTc1LFxuICAgICAgICAyNDksXG4gICAgICAgIDY3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMzMsXG4gICAgICAgIDE3LFxuICAgICAgICA2MyxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgOSxcbiAgICAgICAgMTM2LFxuICAgICAgICA2MixcbiAgICAgICAgMTE2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMjksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE4MixcbiAgICAgICAgODQsXG4gICAgICAgIDMwLFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJybHhOcXEzemh1aXQ2VDhSZ0Y3NDV4enlBbUNzVW9WbVkvRVljN1AzSDhjPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NjcwOTU0NzI3N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMTFBNkI2NUIyMjI1OEUyNDdBMUJDMzFFOTQ5ODJFODJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI0NTMzMzU1XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjVSWmkwaEliVHpxd0NhQk1JN1IwSEFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMzU0MmQwZjEtN2ZjZC00ODA1LWJjODItZjJjODgxOTYwYmY1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwOSxcbiAgICAgIDczLFxuICAgICAgMTYwLFxuICAgICAgMTU2LFxuICAgICAgOTUsXG4gICAgICAyMzcsXG4gICAgICAxNDUsXG4gICAgICA4OCxcbiAgICAgIDE0LFxuICAgICAgMzMsXG4gICAgICAxMjAsXG4gICAgICAxMTEsXG4gICAgICAxMzUsXG4gICAgICAxODMsXG4gICAgICA5OSxcbiAgICAgIDU0LFxuICAgICAgMTc1LFxuICAgICAgMTU4LFxuICAgICAgMjUyLFxuICAgICAgMjMzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyOSxcbiAgICAgIDEyNixcbiAgICAgIDU2LFxuICAgICAgODMsXG4gICAgICAyNCxcbiAgICAgIDIzOCxcbiAgICAgIDUsXG4gICAgICAxNTIsXG4gICAgICAxMjYsXG4gICAgICA1OCxcbiAgICAgIDIwOCxcbiAgICAgIDE1MSxcbiAgICAgIDM4LFxuICAgICAgMTA3LFxuICAgICAgODQsXG4gICAgICAxMzIsXG4gICAgICAxMTEsXG4gICAgICAxNjIsXG4gICAgICA4MixcbiAgICAgIDI0MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJYRDhTQ1lCRFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU2NzA5NTQ3Mjc3OjkyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMTgxNTA3MDgzNTEwNzY6OTJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTUgrK0h3UTRaU3B0Z1lZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ5OTI5L09aMCtGK2dYYm9aVVhkb2NpZzZvREVhNEpmNWZNSStUN1E4azEwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlV1dTkzWUVBQXlJZzloUTJZeXVMTWhkdUorcklGOVhxZGdPUUFPeG54TTZWbXdVdzFPSFRNSEhSa0xpY1p2eDVNVFd4bkttSjIwaU9LNytyQXRrd0RnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIktETkE2TXVBMlE5SEFkOTBXdnVJUlJvaHhTbnoyckRQQUVkeFdvdjRkLzYvK0VEZGFRUTdlWXRRVEN4ZUU2cEVhaDVCRXY1OHpEWGVBaEM0ZFpoL0J3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NjcwOTU0NzI3Nzo5MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgOTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNDUzMzM0OSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUk5bFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSTlsLmpzb24iOiAie1wia2V5RGF0YVwiOlwiYTBPaHFPSUV2ZUNZN1djNUZzKzlTMnViem9UU0QrOHF5YW9ZRnFkTGlzaz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyNjIwMjkxMTgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.9",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| " Adrian",


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
