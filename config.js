//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "minahasa, Indonesia.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaZwQkX4IBh7YTUsAN0Z";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaZwQkX4IBh7YTUsAN0Z";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "62895325839508";
global.owner = process.env.OWNER_NUMBER || "62895325839508";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "true";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "commend prefix miracle";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://wasimdscanner-68feefafb737.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUh2UWNINm5XUGZzWWFrQ3lvMmxWMHgrZ2xRUHF0dVdHanNwZGtodHVGVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUmV2eVRmL0JEZW85UVNIMWJLWUdZRjFJOTRxMHArdjdtd0ZhbFRwbXdSVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBSzhoN2pocWV1eURteUtuaE83R1pXdXA0UElyRUxaQ21jbEJPbnFsK25FPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrRmtDU1RYTnZkZXZCa0tTTWs2ZHV2MngwWEIwK0xTYVJTM3RwZ1JMeW5zPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdIUVUzc0w3M01JN1dwNWFXNU5iY1ZCSWFVTUQxYlFPcFozMjNGdEMyR289In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ijd1Y2FVZTFwcEUxYjF6alQxdXpqVDlVY0UwYW0zSUJrM0JJQVQxQTBFZ0E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU1BJMXZjQXdXQ1psYVlPcHlyOXozaWxXb1pISXV4QzdzSFRsbE4rMzRrWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0xFMVNyUm93cEhBdktIOUZMbEtYSW9uakprNTBxdUt2Q3RqYVpSSER5az0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlHeEVFRm02V2dlYk05R3g1R3UybkFRdGgrZjBuV2xjZDFPUFI2d0szWmIrUDVEM3cwSXVOUU8xOURLYmtkZ09LeEcvNXF6U0F5UFAxOTNieU5acGpRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTY4LCJhZHZTZWNyZXRLZXkiOiJ0UlFmOEN2RHl3bnA2SFJMRUx4eVYyYkNxNzkrb0xhbmdEODZKMkI3clc0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjYyODk1MzI1ODM5NTA4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjlERjUwOEZCRTZGRUY1QzQxRDVCRjNGOUFCMTY2RkU1In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MTY2NTAzNDN9LHsia2V5Ijp7InJlbW90ZUppZCI6IjYyODk1MzI1ODM5NTA4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkJFQzE2RjlCMEEwNjVEMTNGRUY2QkUwMkE5QTJGQTU3In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MTY2NTAzNDR9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6dHJ1ZX0sImRldmljZUlkIjoidUpSTVI4djBUeEtUbkFjLXhUTVJ3QSIsInBob25lSWQiOiI3ZjFkMmUwYS1kOTg4LTRkZGQtODg2Yi1jMDRiZjRhNzljODMiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOTljVWNGbkJSYU5CWFZ1bnhxaDBiSUJKR2drPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZoYTQ3NmpzbzVvQ1pzTnliNS8ydHMyNHJsRT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJUVkM0OFBaRiIsIm1lIjp7ImlkIjoiNjI4OTUzMjU4Mzk1MDg6OTNAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiTUlSQUNMRSBIT1NFQSBTQU1VRUwifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0lyaWh2RUdFTldDeUxJR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjNSUUdpYUhsRnpteWx4VzNMRU5zKytTUlVBWWRBMkVGVzY3bEIzcndZM3M9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImtqMVNrWmtLQlRTMEwvWVFEc1pYUFdjbHptbzd1ckNoVmZzcElyekpUc1Erc0lPOTJzdEhqOVZDNDhwYmd0bWhoZ0NERW9QaGN5RkJnM2hpbU50cENBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiI1MVk2VzE4WmxTVE9xRDZONzJOV3ZGMmJBTHJLK3U1NWc3N3B0UVpsM05PZ1hYVXlZYkhPY1JGQnFKRFczZlZMbzlSUXlEc3NJVzhPT2pCT05MWGtqUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjYyODk1MzI1ODM5NTA4OjkzQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmQwVUJvbWg1UmM1c3BjVnR5eERiUHZra1ZBR0hRTmhCVnV1NVFkNjhHTjcifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTY2NTAzMzksIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBUFY0In0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "Miracle-MD-File",
  author: process.env.PACK_AUTHER || "WASO",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "Miracle-MD",
  ownername: process.env.OWNER_NAME || "Miracle-MD",
  errorChat: process.env.ERROR_CHAT || "923192173398",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "HRKU-67502d2e-da95-4ea0-aca6-1b9bcc727c32",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "hoseaSamuel  hoseaSamuel",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
