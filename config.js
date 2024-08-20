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
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibU96U3ZTUWZYaXA2R0Yxbm5LSU5Ba2JSd1ZWME9EdXhpSVpBaVFmVStrdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUxTY1FhZEJObWppZTluTzViNXdsMmZENXl6OWVvRGZWUVBvM29ldXlraz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBS2tpaVRQaHo0ZU5tcjdnUVQ2L1ptSVFGeHp4QUo2eXJoVjRmeExvTzNrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIra0xQanBXMmRWUlJhMTByYWwyRWVQZ3IzanJEK3p6dUEyeEY3KzlFSjNBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBPbTRYOEs3Rnc1RytWWS93Q3ZpSlZOQWgwQVBhdDdMME9MbHB1Q1Vzbms9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1qR1FsQ1g1UEJDZWIyMFFyUUlPbHdva1JyOGdFSkJocXprcStBOThpU2M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0Y1eHpMU0pyQXRFSFRVbW9vOW16cVNtWGtPK2huN0Y3aVVTUFRlUzIzOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTnJSSUNUcEF4R01XQ1pKSjFqKzBjZGwvamdMNW9jOHVSM0VRUDc5VUJHbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkQvVjM2SW9mYTdzN2FKT09QSVhDNUcwdy9mZHpEL0w3S0hpdEN4c0dhanpQZmIwN0NzWS8rcWx0VVBzakJYRjNzZ2t5WkQxZnllQWdSRmJFT0toNml3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTAsImFkdlNlY3JldEtleSI6ImZHbGc3NGdIRXMrS082dU95ZFIvbldUZTFJaDJ6UkN4YXhya3dRZjkyTG89IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjBlQmpIMmpkU09XSFRyR1NLZDJuV0EiLCJwaG9uZUlkIjoiOWNkMmZjOTctMDA5NC00NDZjLTk0ZmItOTY1ZjdjY2Y1ZDhlIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVtUTNRckt1UENvcHBiUDJSRUxDaUNQODdFcz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2c1cwSnY5MG1OVi96ZEs0SXN3M1JvemVtWTg9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiR0tKUU5FODIiLCJtZSI6eyJpZCI6IjI1NDcwODc2NzgxMjoyNUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJQcmluY2UgVGl0dXMifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BXemxBUVFtSk9VdGdZWUFTQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImFHMExLSnJWMnhwaTE2bXAvWVBGR1FkZXZlV0RXendnc0R5UzNKSm5aelU9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkFZYThWVW5BaHVncWUwdFBwcmRtN0pXejlVdHdDQmMxZ083UDlTNVdrWUJpSFNaeUZNUk1IMkE0WFpkVTlJT3U3R0lZYWFoNzZ4Mm5NWnFjUkdHNkN3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJLUmFLZ3ZtUWd4Zm0zWTRrZmM0OTI4cVgwVStxYmlMeUtIeTF4S2pEbDFGcFdFQWx3Smh5MkFJbFFJaGJSZXZoWDBkNEVndjF6aUQvb2VRZEJOSmdnZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDcwODc2NzgxMjoyNUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJXaHRDeWlhMWRzYVl0ZXBxZjJEeFJrSFhyM2xnMXM4SUxBOGt0eVNaMmMxIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI0MTg5MDk0LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUppdyJ9"
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
