# QXBroker Binary Signal Timer (Chrome Extension)

This extension provides a **manual signal timer** for quick 5s, 15s, and 30s binary trade workflows on `qxbroker.com`.

## Features
- 5, 15, and 30 second signal timers.
- Direction selection: CALL / PUT.
- Optional asset label.
- Desktop notifications when signal starts and ends (without bundled binary icon asset).
- On-page floating badge showing remaining seconds.

## Install (Developer mode)
1. Open `chrome://extensions`.
2. Enable **Developer mode**.
3. Click **Load unpacked**.
4. Select the `extension/` folder from this repository.

## Notes
- This tool does **not** auto-place trades.
- It is intended for personal/manual timing support only.

## Rebuild ZIP locally
If downloading a prebuilt ZIP is blocked, generate it locally:

```bash
./extension/package-extension.sh
```

Optional custom output path:

```bash
./extension/package-extension.sh /path/to/qxbroker-signal-extension.zip
```

## Create a GitHub PR manually
If the automated PR step fails in your environment, push your branch and open a PR manually:

```bash
git push -u origin <your-branch-name>
```

Then open:

```text
https://github.com/<owner>/<repo>/compare/<base-branch>...<your-branch-name>?expand=1
```
