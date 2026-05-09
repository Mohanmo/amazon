(async function injectBadge() {
  const badge = document.createElement('div');
  badge.id = 'qx-signal-badge';
  badge.style.cssText = [
    'position:fixed',
    'right:16px',
    'bottom:16px',
    'z-index:999999',
    'background:#101624',
    'color:#fff',
    'padding:8px 10px',
    'border-radius:8px',
    'font-size:12px',
    'font-family:Arial,sans-serif',
    'box-shadow:0 4px 20px rgba(0,0,0,.3)'
  ].join(';');

  const render = async () => {
    const data = await chrome.storage.local.get(['activeSignal']);
    if (!data.activeSignal) {
      badge.textContent = 'Signal: idle';
      return;
    }
    const left = Math.max(0, Math.ceil((data.activeSignal.endAt - Date.now()) / 1000));
    badge.textContent = `Signal: ${data.activeSignal.direction} ${data.activeSignal.asset || ''} (${left}s)`;
  };

  document.body.appendChild(badge);
  setInterval(render, 300);
  render();
})();
