# ZapBOT [![Discord Support](https://img.shields.io/discord/826413601518125087.svg)](https://discord.gg/CE7vCvdDQJ)
A powerful Discord BOT website (only in Brazilian Portuguese)

## Configuration
1. To import on [Vercel](https://vercel.com/) just clone this repository and configure on Vercel.
2. Configure the following environment vars on Vercel:
  * `ANALYTICS_TAG` with your G-TAG from [Google Analytics](https://analytics.google.com/);
  * `ADSENSE_TAG` with your AdSense client ID [Google AdSense](https://adsense.google.com/);
  * `HCAPTCHA_KEY` user token from [hCaptcha](https://www.hcaptcha.com/);
  * `URL_API` url api from [ZapBOT](https://github.com/suchorski/ZapBOT);
  * `URL_GUILD_INVITE` url for guild invite;
  * `DISCORD_BOT_CLIENT_ID` client id from [Discord developer](https://discord.com/developers/applications/).
3. Switch `Vue.config.productionTip` in `main.js` to `true`.

### Website for [ZapBOT](https://github.com/suchorski/ZapBOT)