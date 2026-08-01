# NA MD Bot

A production-ready multi-device WhatsApp bot with 226 plugins, multi-session support, media processing, and full owner/sudo control. Persistent bot data and WhatsApp authentication state are stored in MongoDB.

## Run & Operate

- Workflow **"NA MD Bot"** starts the bot automatically — just hit Run.
- On first start, use the dashboard pairing flow to connect WhatsApp.
- Web dashboard: `http://localhost:5000/` (visible in the Replit preview pane).
- Persistent storage requires `MONGODB_URI` (or the legacy `MONGODB_PASSWORD`) in the environment. Without it, the bot intentionally runs in memory and loses data on restart.

## Stack

- Node.js, JavaScript (ESM)
- WhatsApp: @whiskeysockets/baileys (Multi-Device)
- DB: MongoDB with an in-memory write-through cache
- Key packages: axios, chalk, fs-extra, moment, pino, qrcode-terminal, jimp, yt-dlp

## Where things live

- `NA-MD-Bot/index.js` — main entry point
- `NA-MD-Bot/config.js` — bot configuration (owners, prefix, API keys, etc.)
- `NA-MD-Bot/lib/` — core engine (sessions, commands, plugins, database)
- `NA-MD-Bot/plugins/` — 226 plugins in 11 categories
- `NA-MD-Bot/lib/database.js` — MongoDB persistence and cache
- `NA-MD-Bot/lib/mongoAuthState.js` — MongoDB-backed WhatsApp auth state
- `NA-MD-Bot/session/` — runtime directory; auth is stored in MongoDB
- `NA-MD-Bot/dashboard.html` — web dashboard UI

## Plugin categories

admin, download, search, fun, gb, group, owner, islamic, media, tools, and utility

## Configuration (`NA-MD-Bot/config.js`)

- **Owner number**: `ownerNumber` — set your WhatsApp number here for owner commands
- **Prefixes**: `.`, `!`, `#` by default
- **Bot mode**: `public` (responds to all) or `private` (owners only)
- **API keys** (optional, set as Replit Secrets):
  - `OPENWEATHER_API_KEY` — for weather plugin
  - `OMDB_API_KEY` — for movie/series search plugin

## User preferences

- Bot name: NA MD Bot
- Developer: Nisha Aslam
- Brand: NA MD Bot
- Default prefix: `.`

## Gotchas

- Use the dashboard pairing flow to connect WhatsApp on first run.
- ffmpeg should be available for media plugins (sticker/blur/flip/grayscale/resize/toaudio).
- `ownerNumber` in `NA-MD-Bot/config.js` controls who has owner-level access.
- On Oracle Cloud, MongoDB and PM2 are managed by the deployment script; do not delete `/var/lib/mongodb` unless you intentionally want to erase all sessions and bot data.
- Use `.reload` command in WhatsApp to hot-reload plugins without restarting.
- yt-dlp is downloaded automatically by the workflow startup command.
- The Oracle setup script preserves an existing local MongoDB password on reruns, replaces only example placeholders, and stops before HTTPS setup if port 5000 is not healthy.
