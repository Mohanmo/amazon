let timerId = null;

async function stopSignal() {
  if (timerId) {
    clearTimeout(timerId);
    timerId = null;
  }
  await chrome.storage.local.remove('activeSignal');
}

chrome.runtime.onMessage.addListener((message, _, sendResponse) => {
  if (message.type === 'START_SIGNAL') {
    const { duration, direction, asset } = message.payload;
    const endAt = Date.now() + duration * 1000;

    stopSignal().then(async () => {
      await chrome.storage.local.set({
        activeSignal: { duration, direction, asset, endAt },
      });

      await chrome.notifications.create({
        type: 'basic',
        title: 'Signal Started',
        message: `${direction}${asset ? ` on ${asset}` : ''} for ${duration}s`,
      });

      timerId = setTimeout(async () => {
        await chrome.notifications.create({
          type: 'basic',
          title: 'Signal Ended',
          message: `${direction}${asset ? ` on ${asset}` : ''} ${duration}s completed`,
        });
        await stopSignal();
      }, duration * 1000);
    });

    sendResponse({ ok: true });
    return true;
  }

  if (message.type === 'STOP_SIGNAL') {
    stopSignal().then(() => sendResponse({ ok: true }));
    return true;
  }

  return false;
});
