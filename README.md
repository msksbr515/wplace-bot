# Wplace-bot — with Seven Seals support

## [**⬇ 一鍵安裝 / One-click install**](https://raw.githubusercontent.com/msksbr515/wplace-bot/seven-seals/dist.user.js)

*(needs Tampermonkey first — see [Install](#install) below)*

> **This is a fork of [SoundOfTheSky/wplace-bot](https://github.com/SoundOfTheSky/wplace-bot).**
> It adds a **Seven Seals importer** on top of the official build. Everything else is
> upstream code, rebuilt from upstream source.
>
> The feature is event-specific and time-limited (the event ends 2026-11-12), so upstream
> may or may not take it — see [pull request #62](https://github.com/SoundOfTheSky/wplace-bot/pull/62).
> This fork exists so people can use it in the meantime, without waiting for a decision.

## Install

1. Install the TamperMonkey browser extension: [Chrome](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en)|[Firefox](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)
2. **[Open this link](https://raw.githubusercontent.com/msksbr515/wplace-bot/seven-seals/dist.user.js)** — same URL Tampermonkey uses to keep it updated
3. Press install
4. Allow user scripts
   1. Chrome: Settings > Extensions > Manage Extensions > Tampermonkey > Details > Allow User Scripts
   2. Firefox: Settings > Extensions and Themes > Tampermonkey > Allow User Scripts

Snapshots are also published under [Releases](https://github.com/msksbr515/wplace-bot/releases).

### What installing this does

- The script keeps the upstream name and namespace, so **installing it replaces the official
  `wplace-bot` script** instead of sitting next to it as a duplicate.
- Its `@updateURL` points at **this fork**, so Tampermonkey updates it from here and will not
  silently overwrite it with the upstream build. To go back to the official version, remove
  this script and install from the [upstream link](https://github.com/SoundOfTheSky/wplace-bot/raw/refs/heads/main/dist.user.js).

Built from upstream `5.2.2` + the Seven Seals importer, versioned `5.2.2.1` so it counts as
newer than the official release.

## The Seven Seals importer

Open it from the new **Seven Seals** button in the bot panel. The event has 7 seals
(`I` … `VII`) of 24 fragments each, 168 in total, and the panel lists every fragment grouped
under its seal so you can tell which series a fragment belongs to instead of typing a raw id.

- live status per fragment: `in progress` (importable), `not opened`, `complete`
- progress bar, remaining community pixels, and series-local numbering (`III-9`, `#57`)
- filter by seal series (chips), by fragment id, or *only importable*
- opens on the first seal that still has something to import

**Import** adds the official fragment template at its map position, exactly like adding an
image by hand, so you then move the map there and press Draw or Auto-Draw. A fragment that is
already imported is marked and will not be added twice.

The 168 tile positions are the event data shipped in the wplace.live frontend bundle, hardcoded
in [`src/seven-seals-positions.ts`](src/seven-seals-positions.ts).

## Upstream documentation

The rest of this README is the upstream one, unchanged.

### Features

1. Auto draw
2. Multiple images
3. Many strategies
4. Auto image convert/scale
5. Suggests colors to buy
6. Optional captcha bypass

### How to use

1. Add your image or exported "###.wbot" files.
2. Drag image and it's edges to position it.
3. Change order of images.
4. This is colors bar. Colors can be dragged. Don't forget to check "Draw color in order".
5. It's a substitution color. Top button to buy, lower button to disable.
6. Export an image. Exports file with brightness and resize applied and "###.wbot" file with all settings.
7. Lock image to prevent accidental edits and allow click-through.
8. Delete image.
9. Finally click "Draw" to start drawing :)

![Instruction1](Instruction.png)

### Contribution

1. Install [Bun](https://bun.sh/)
2. Install dependencies `bun i`
3. Up version in `script.txt`
4. Lint `bun run lint`
5. Build `bun start`

### Branches in this fork

- `main` — untouched mirror of upstream, used as the base for pull requests.
- `seven-seals` — this fork's build: Seven Seals source, a repointed userscript header, a built
  `dist.user.js`, and this README. Releases are tagged here.
