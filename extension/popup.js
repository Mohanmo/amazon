const durationEl = document.getElementById('duration');
const directionEl = document.getElementById('direction');
const assetEl = document.getElementById('asset');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const statusEl = document.getElementById('status');

let intervalId;

function setStatus(text) {
  statusEl.textContent = text;
}

async function restoreState() {
  const data = await chrome.storage.local.get(['activeSignal']);
  if (!data.activeSignal) {
    setStatus('Idle');
    return;
  }

  const { direction, asset, endAt } = data.activeSignal;
  const remaining = Math.max(0, Math.ceil((endAt - Date.now()) / 1000));
  setStatus(`Running: ${direction} ${asset || ''} (${remaining}s left)`);

  clearInterval(intervalId);
  intervalId = setInterval(async () => {
    const state = await chrome.storage.local.get(['activeSignal']);
    if (!state.activeSignal) {
      clearInterval(intervalId);
      setStatus('Idle');
      return;
    }

    const left = Math.max(0, Math.ceil((state.activeSignal.endAt - Date.now()) / 1000));
    setStatus(`Running: ${state.activeSignal.direction} ${state.activeSignal.asset || ''} (${left}s left)`);
  }, 250);
}

startBtn.addEventListener('click', async () => {
  const seconds = Number(durationEl.value);
  const payload = {
    duration: seconds,
    direction: directionEl.value,
    asset: assetEl.value.trim(),
  };

  await chrome.runtime.sendMessage({ type: 'START_SIGNAL', payload });
  await restoreState();
});

stopBtn.addEventListener('click', async () => {
  await chrome.runtime.sendMessage({ type: 'STOP_SIGNAL' });
  await restoreState();
});

restoreState();
