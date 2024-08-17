//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "mutethiatitus200@gmail.com";
global.location = "Meru,Kenya.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Kingjux/Venocyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/12b0fb245e6b8ba4bf718.jpg";
global.devs = "254708767812";
global.sudo = process.env.SUDO || "254708767812";
global.owner = process.env.OWNER_NUMBER || "254708767812";
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
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUdXazNCeFR2MkVWQmU5NEtBaUZaQTkzbS9uY2hTL1l3UDFvcTVYeWkwUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL2pCcjJ1a0xGZ3cxWHdCZ0dzL3pCU1NZUzBhOG1KK1NkYWJnZmlienpXST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTRU9jQUt2MTYxb2haUWpGT3JST2p2UEMvMnhxUVZraVVRMFFkU3lOSVZ3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWUzFCYlpBK0hPc0RmRnVJZ1czKytpL2k5Q3BRdHFOU3lzRE1HcGFjc2kwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhIcEE4NGZiMVJZOUFteUdVZHNGM3RndFBRWUkvUU5ZQk10UVVVTjNHRmc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJLNVNmTjRJRUx5bS81ZUFHSDNBYjFoZTBrYjk2WnZlV2hOZDRwUnVNUkE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidU9pOTc3ekI3aGRaRHltWTBqZC9oY1BjTCtVczQzelpwV2R2MVlYaEkzRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOVBXcXZXRzhOcGFSZDZsZ2VOV3FBM0dCZTEwQVAvNjhwV1pyYVJCWFJDbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkliUHpMYUMrdjFnVzFhb09mKytPVUlwZlUxR1kvaTdEaTBSWU9pTWI4dGFYVFdpN0ppY1BxaFMzM1QvUmp1WVBuN0poT1RqQVJFL2xCSmpMYmxXaWhnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OSwiYWR2U2VjcmV0S2V5IjoiSlBHSElmNGZEZFZKVXVPaVhSVkViRUJHM3U1NnJ5RVE4T3UyZjdsVHpFUT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiYW82M2ZocERUV1dwc2VwQWJ4LVVMZyIsInBob25lSWQiOiI2YzYzM2E1YS01Mjg4LTRiODQtYmE5Yy1mYWVlNmYxYzBlMGQiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUklhRTd5MEhtWHZjOWlaWE1SRzBhb2tESjBvPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii9CNlh1UU9IckNpRXcwbUJ0dXNTSVNKMDBhaz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiI4UktUQ0M5SyIsIm1lIjp7ImlkIjoiMjU0NzA4NzY3ODEyOjI0QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IlByaW5jZSBUaXR1cyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUFN6bEFRUXBOZi90UVlZQVNBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiYUcwTEtKclYyeHBpMTZtcC9ZUEZHUWRldmVXRFd6d2dzRHlTM0pKblp6VT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiZWRmd1hETHg2enpZbmUxejlKaytCRUFRMUwzSklTcFg1WkdJbEZjb3pKQUtOZ0tKYnRyWXh5NzhXM1hmbFYzMGxTMjZld2hvUGQ4WHZCUCtYTEtvQlE9PSIsImRldmljZVNpZ25hdHVyZSI6InZiM3JjZUxJRGdzTHFzMk9Gb3E4WFFMdU5LVUpJWDA3ZmxkSjVLaHVDNXRXNmlRc2lIZE8ycmIvZGtWbzQ3aDNyYUNONEVWcWZJRWlmNE1yeXoxSmhnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0NzA4NzY3ODEyOjI0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQldodEN5aWExZHNhWXRlcHFmMkR4UmtIWHIzbGcxczhJTEE4a3R5U1oyYzEifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjM4NTM3NDUsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSml3In0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "you're using first powerful bot made by Prince titus 𝐌𝐃",
  author: process.env.PACK_AUTHER || "Pinchoo",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "PRINCETITUS-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "Prince_Titus",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-MLNkacQOWsMSwtBZZf0XT3BlbkFJqfgJYOOkiikW5Y4ynpM5",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "VENOCYBER").toUpperCase(),
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
