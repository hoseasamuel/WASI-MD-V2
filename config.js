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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/fee7af11b4edf8eb7c272.jpg";
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
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://wasimdscanner-68feefafb737.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK1AvcEhiRE1odWxjcFJUSndPak1IZnNIdHJoMUdiVFg0dEJQM2t0VVBVZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSlp2b3BqSmd2WDdlWmVPaHh0VVk0Y0hFRnQ5aTNjTFhRNDE1US9lUWVSST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlQmdqN01ORWlqcWRnbnJJQ3ZYTThsTWxnbEs1cm44cCt5d3cvd1pBN0V3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBZTNTMWV3SWVRdjBQMWpLNWpmMDBrNVhmK0cwWnpSUGZHNTlxUjV0TDJ3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRPdmlPemdxNmRsZlZmSWFuL1BOMTB5VndPZkFPZzVHUFVoTGYyZldYVnc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InpRM0hSY2w4S3RkUlNDQStjUWxTRnQzanBGbFJjWE1Ec3FVNDhYdjhuelk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUhIMVNrQjkzR2JSSXZzQzk4aUF6d1ZWcFJlYm5TNHdLSW9XdUJxNDkyaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOGdEMmoxcUV2bU45QWdDTTNiYjJGd1NlVHVtMlZUaERpSmE4UzZZWEJYRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhuOUUrQ3pNdVcwLzdSTTVWa3hlREtjZFBkY3JidEZTOFoxTkxLNXR0SW5DeGpPeWpxU3NUbURXUG5pYUlNZGJLTWxJN0FyTmUwMVgzNnI3S3g3cmhRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTg3LCJhZHZTZWNyZXRLZXkiOiJzQnNoZ3VtQnhlenkvZjJJNlJwKzZLbWhzSkJ3RmorNi96THNmTmNEWHh3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiIxT1dPQ0dBSVN3T2RTNmZnUnE5bjZnIiwicGhvbmVJZCI6ImIyM2RjZDg1LTY5MDAtNGY4MS1iZjhjLTBlYjA5NmRkNWM3OCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPMWNwZ0Z0QThTZk1yYkJ1UWdsdlRRTHVXckk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRmwxNHNRWjE1QnBTL3JpdDRadm8yMTlJZ2ZFPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkJQWTc1NDE2IiwibWUiOnsiaWQiOiI2Mjg5NTMyNTgzOTUwODo4OUBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSW5paHZFR0VLanN4cklHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiM1JRR2lhSGxGem15bHhXM0xFTnMrK1NSVUFZZEEyRUZXNjdsQjNyd1kzcz0iLCJhY2NvdW50U2lnbmF0dXJlIjoieXVLU01pcnZEYW9XTDBsWnREWDBPNG5MUVc2V2RIRVBmOTlIZ29TR0hBVDdUeWpMU1QyWkdpT3l1dzljK29qcjZ1dFBMVTlhNEJwZjI5NnRyQm9wQ1E9PSIsImRldmljZVNpZ25hdHVyZSI6ImdoaFgvNXJGdmhKOXpNV0o1ZThnR3JnT1orOEtYTXZUQXRjOGpTaVl2RU1xc1RweWxuNlJzN3A1cCtub21oVTBBN1R5bjVsZ1hQYkxtODZhM1oydmlBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiNjI4OTUzMjU4Mzk1MDg6ODlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZDBVQm9taDVSYzVzcGNWdHl4RGJQdmtrVkFHSFFOaEJWdXU1UWQ2OEdONyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxNjYzMTA5MiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFBNnMifQ=="
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
