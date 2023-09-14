## GetPatronsList
Couldn't find a simple way to get my patrons, here it is

**Notes :**
1. The Patreon Dependency is Broken, you can still get them by running `bun install` and do the fix manually. You just have to replace the line 61 from `/GetPatronsList/node_modules/@anitrack/patreon-wrapper/lib/index.js` by this : `title: tierInfo ? "" : "",`
2. If you wan't to run it on your side, I suggest to just run the `bundle.js` with [bun](https://bun.sh/) (`bun bundle.js`)
3. I made it real fast, it's not perfect but it works

**To run it :**
`<your_deployed_url>/?AccessToken=<yout_access_token>&CampaignID=<your_campaign_id>`

- AccessToken : get it on [the register client page](https://www.patreon.com/portal/registration/register-clients)
- CampaignID : F12 your Patreon page and search for "campaign" then keep looking until you find URL with campaign params that contains around 7 degits. Mine was `https://www.patreon.com/api/campaigns/` if you want to filter.

**Sources :**
- This Patreon Wrapper : https://github.com/AniTrack/patreon-wrapper
- This express-like framework in bun : https://github.com/lau1944/bunrest
