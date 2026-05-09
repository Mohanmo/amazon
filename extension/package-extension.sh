#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
OUTPUT_ZIP="${1:-$REPO_ROOT/qxbroker-signal-extension.zip}"

TMP_DIR="$(mktemp -d)"
cleanup() { rm -rf "$TMP_DIR"; }
trap cleanup EXIT

cp "$SCRIPT_DIR"/manifest.json "$TMP_DIR"/
cp "$SCRIPT_DIR"/popup.html "$TMP_DIR"/
cp "$SCRIPT_DIR"/popup.css "$TMP_DIR"/
cp "$SCRIPT_DIR"/popup.js "$TMP_DIR"/
cp "$SCRIPT_DIR"/service-worker.js "$TMP_DIR"/
cp "$SCRIPT_DIR"/content-script.js "$TMP_DIR"/
cp "$SCRIPT_DIR"/README.md "$TMP_DIR"/

(cd "$TMP_DIR" && zip -r "$OUTPUT_ZIP" . >/dev/null)

echo "Created: $OUTPUT_ZIP"
unzip -l "$OUTPUT_ZIP"
