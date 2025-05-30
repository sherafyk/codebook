const icons = {
  note: `<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20" fill="currentColor" style="vertical-align:middle;"><circle cx="10" cy="10" r="9" stroke="#0078d7" stroke-width="2" fill="none"/><text x="10" y="15" text-anchor="middle" font-size="12" fill="#0078d7" font-family="Arial" font-weight="bold">i</text></svg>`,
  tip: `<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="9" stroke="#28a745" stroke-width="2"/><path d="M10 4v6" stroke="#28a745" stroke-width="2" stroke-linecap="round"/><circle cx="10" cy="14" r="1" fill="#28a745"/></svg>`,
  important: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="9" stroke="#D97706" stroke-width="2"/><text x="10" y="15" text-anchor="middle" font-size="12" fill="#D97706" font-family="Arial" font-weight="bold">!</text></svg>`,
  warning: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20"><polygon points="10,3 19,17 1,17" fill="#FFFAE6" stroke="#EAB308" stroke-width="2"/><text x="10" y="15" text-anchor="middle" font-size="12" fill="#EAB308" font-family="Arial" font-weight="bold">!</text></svg>`,
  error: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="9" stroke="#DC2626" stroke-width="2"/><line x1="7" y1="7" x2="13" y2="13" stroke="#DC2626" stroke-width="2"/><line x1="13" y1="7" x2="7" y2="13" stroke="#DC2626" stroke-width="2"/></svg>`,
  success: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="9" stroke="#22C55E" stroke-width="2"/><polyline points="6,11 9,14 14,7" fill="none" stroke="#22C55E" stroke-width="2"/></svg>`,
  // ...add more as needed!
};

document.querySelectorAll('.markdown-body blockquote').forEach(blockquote => {
  const text = blockquote.textContent.trim();

  function prependIcon(type, label) {
    blockquote.classList.add('markdown-alert', `markdown-alert-${type}`);
    blockquote.innerHTML = blockquote.innerHTML.replace(
      `[!${label.toUpperCase()}]`,
      `<span style="display:inline-flex;align-items:center;gap:0.4em;">${icons[type]}<strong>${label.charAt(0).toUpperCase() + label.slice(1)}:</strong></span>`
    );
  }

  if (text.startsWith('[!NOTE]')) prependIcon('note', 'note');
  if (text.startsWith('[!TIP]')) prependIcon('tip', 'tip');
  if (text.startsWith('[!IMPORTANT]')) prependIcon('important', 'important');
  if (text.startsWith('[!WARNING]')) prependIcon('warning', 'warning');
  if (text.startsWith('[!ERROR]')) prependIcon('error', 'error');
  if (text.startsWith('[!SUCCESS]')) prependIcon('success', 'success');
  // ...add more cases for other types as needed
});
