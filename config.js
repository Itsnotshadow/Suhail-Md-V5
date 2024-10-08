const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="dolorfaithful101@gmail.com"
global.location="Lagos,Nigeria."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347087941249";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '4'  // put '1' to "5" here to check bot styles
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_00_10_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMjgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMzQsXG4gICAgICAgIDY4LFxuICAgICAgICAyMCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTkzLFxuICAgICAgICAzOCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDQ3LFxuICAgICAgICA4NCxcbiAgICAgICAgODUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjUyLFxuICAgICAgICA2NixcbiAgICAgICAgODUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTcwLFxuICAgICAgICAzMyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTU4LFxuICAgICAgICA3NixcbiAgICAgICAgMTYzLFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIyLFxuICAgICAgICA0NSxcbiAgICAgICAgMjI0LFxuICAgICAgICA0NCxcbiAgICAgICAgODcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTIxLFxuICAgICAgICA4OSxcbiAgICAgICAgMjU0LFxuICAgICAgICA4OCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgODAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNDQsXG4gICAgICAgIDkxLFxuICAgICAgICA5MSxcbiAgICAgICAgMCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMixcbiAgICAgICAgMTM3LFxuICAgICAgICA4NyxcbiAgICAgICAgMTg5LFxuICAgICAgICA5NixcbiAgICAgICAgMjI2LFxuICAgICAgICA0NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE5LFxuICAgICAgICAxOCxcbiAgICAgICAgMjksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTU3LFxuICAgICAgICA1MSxcbiAgICAgICAgMTIsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDM1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjMxLFxuICAgICAgICAwLFxuICAgICAgICAzMixcbiAgICAgICAgNjAsXG4gICAgICAgIDE4NixcbiAgICAgICAgODMsXG4gICAgICAgIDU2LFxuICAgICAgICA2MSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMyxcbiAgICAgICAgMTE1LFxuICAgICAgICA1MyxcbiAgICAgICAgMTY3LFxuICAgICAgICA2MCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxODAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNzUsXG4gICAgICAgIDU5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTkzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDU0LFxuICAgICAgICA0NSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMixcbiAgICAgICAgMTEyLFxuICAgICAgICA4NCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjE4LFxuICAgICAgICA2NSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDUyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDU2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMzAsXG4gICAgICAgIDg1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjE0LFxuICAgICAgICA4NSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDkyLFxuICAgICAgICA5NSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNDksXG4gICAgICAgIDc0LFxuICAgICAgICA2MSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxODEsXG4gICAgICAgIDg4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDc1LFxuICAgICAgICAxNjksXG4gICAgICAgIDE5NixcbiAgICAgICAgMjQ0LFxuICAgICAgICA2NixcbiAgICAgICAgNTUsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgNTIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNjAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDc5LFxuICAgICAgICA2MSxcbiAgICAgICAgMTcyLFxuICAgICAgICA3MixcbiAgICAgICAgMjIxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDcwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjE3LFxuICAgICAgICA1NCxcbiAgICAgICAgMTIsXG4gICAgICAgIDksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDI1LFxuICAgICAgICA3NyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA3NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NixcbiAgICAgICAgMjMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTc5LFxuICAgICAgICA0NyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDM3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMDksXG4gICAgICAgIDQyLFxuICAgICAgICA0NixcbiAgICAgICAgMSxcbiAgICAgICAgNjUsXG4gICAgICAgIDYyLFxuICAgICAgICAyNixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMjksXG4gICAgICAgIDQyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDc0LFxuICAgICAgICA3MCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTM3LFxuICAgICAgICA5NixcbiAgICAgICAgMTU2LFxuICAgICAgICA1NSxcbiAgICAgICAgODYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTMzLFxuICAgICAgICA2OCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNDksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMzUsXG4gICAgICAgIDg3LFxuICAgICAgICA3OCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE0LFxuICAgICAgICA4OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMCxcbiAgICAgICAgOCxcbiAgICAgICAgMzIsXG4gICAgICAgIDc5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDY2LFxuICAgICAgICA5MCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA4MSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE4NixcbiAgICAgICAgNjksXG4gICAgICAgIDE0MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTE5LFxuICBcImFkdlNlY3JldEtleVwiOiBcInR5ekpyeHBZRi9IQVFlWkFROE5WNVNqRy9xU0t0amRzYUc2VW40VW80VkU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjFkandzeVZPUmZhWnp1a3BqWmZ1QkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMTYzZGEyNzItNGI1OC00Yzg0LTg1NmQtMTFiNmMyNzI2ZDlkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwMixcbiAgICAgIDEwMSxcbiAgICAgIDU4LFxuICAgICAgMjIwLFxuICAgICAgMTg4LFxuICAgICAgMTAxLFxuICAgICAgMTUsXG4gICAgICAyMSxcbiAgICAgIDYwLFxuICAgICAgMjIxLFxuICAgICAgMTQyLFxuICAgICAgMTQ3LFxuICAgICAgMTA1LFxuICAgICAgMTMwLFxuICAgICAgODgsXG4gICAgICA1MSxcbiAgICAgIDEzMyxcbiAgICAgIDEwMSxcbiAgICAgIDEwNCxcbiAgICAgIDIxN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTAsXG4gICAgICA3MixcbiAgICAgIDU2LFxuICAgICAgMTEzLFxuICAgICAgMTkwLFxuICAgICAgMjI2LFxuICAgICAgMTQwLFxuICAgICAgMjUxLFxuICAgICAgMTM0LFxuICAgICAgNjUsXG4gICAgICA3NixcbiAgICAgIDM4LFxuICAgICAgMTgyLFxuICAgICAgMjM2LFxuICAgICAgMzIsXG4gICAgICAxODksXG4gICAgICAxMDgsXG4gICAgICA2MSxcbiAgICAgIDExMSxcbiAgICAgIDEyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlAxTEE5Vjk5XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDg3OTQxMjQ5OjI1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI3OTk5ODM0NjA2ODA3NDoyNUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPalkrK29IRU4rQ2xyZ0dHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImJWdnVGYmF6OFo1UFlESVFabXZOckFwdG10TnNxTFpXQ1lmSk5IUXZNQlk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwid0VLc1NmU2NUM1J0TzFrZ3piNVV0bEFLMlhHZkJkcXZxS0pGTnNoNzJlWEkvdHZhd2RzQzEzbEJHQS9ySGsvQmQ5MkZYOGpCRHlKbGpESHJNRjFVQkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNVV0SkJrdkdYSnhyTEdUa3pTOUdrMDlsSE9pc0VzL01RMzBaZzZIYjB4ckpNU1BiRkpjZDRqckRPcmdzTUZES05aa3pLRVM3bjVKL0pBM0RXaFo3aWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA4Nzk0MTI0OToyNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA4NixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3Mjg0MTQwNTEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQZ1FcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBnUS5qc29uIjogIntcImtleURhdGFcIjpcInA3d0QzWFhCeHZEM3VUa3JITDBXMVJzRzllT3Q0VnRBK0c0cVBsNGwydk09XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjEwMzM3MjkwMixcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsM119LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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
