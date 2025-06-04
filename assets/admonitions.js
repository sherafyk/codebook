const icons = {
  note: `<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20" fill="currentColor" style="vertical-align:middle;"><circle cx="10" cy="10" r="9" stroke="currentColor" stroke-width="2" fill="none"/><text x="10" y="15" text-anchor="middle" font-size="12" fill="currentColor" font-family="Arial" font-weight="bold">i</text></svg>`,
  
  tip: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="20" height="20" fill="currentColor"><path d="M8 1.5c-2.363 0-4 1.69-4 3.75 0 .984.424 1.625.984 2.304l.214.253c.223.264.47.556.673.848.284.411.537.896.621 1.49a.75.75 0 0 1-1.484.211c-.04-.282-.163-.547-.37-.847a8.456 8.456 0 0 0-.542-.68c-.084-.1-.173-.205-.268-.32C3.201 7.75 2.5 6.766 2.5 5.25 2.5 2.31 4.863 0 8 0s5.5 2.31 5.5 5.25c0 1.516-.701 2.5-1.328 3.259-.095.115-.184.22-.268.319-.207.245-.383.453-.541.681-.208.3-.33.565-.37.847a.751.751 0 0 1-1.485-.212c.084-.593.337-1.078.621-1.489.203-.292.45-.584.673-.848.075-.088.147-.173.213-.253.561-.679.985-1.32.985-2.304 0-2.06-1.637-3.75-4-3.75ZM5.75 12h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5ZM6 15.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Z"></path></svg>`,

  important: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/><line x1="12" y1="7" x2="12" y2="13" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="17" r="1" fill="currentColor"/></svg>`,
  
  warning: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20"><polygon points="10,3 19,17 1,17" fill="#FFFAE6" stroke="currentColor" stroke-width="2"/><text x="10" y="15" text-anchor="middle" font-size="12" fill="currentColor" font-family="Arial" font-weight="bold">!</text></svg>`,
  
  caution: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="20" height="20" fill="currentColor"><path d="M4.47.22A.749.749 0 0 1 5 0h6c.199 0 .389.079.53.22l4.25 4.25c.141.14.22.331.22.53v6a.749.749 0 0 1-.22.53l-4.25 4.25A.749.749 0 0 1 11 16H5a.749.749 0 0 1-.53-.22L.22 11.53A.749.749 0 0 1 0 11V5c0-.199.079-.389.22-.53Zm.84 1.28L1.5 5.31v5.38l3.81 3.81h5.38l3.81-3.81V5.31L10.69 1.5ZM8 4a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 8 4Zm0 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>`,
  
  error: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="9" stroke="currentColor" stroke-width="2"/><line x1="7" y1="7" x2="13" y2="13" stroke="currentColor" stroke-width="2"/><line x1="13" y1="7" x2="7" y2="13" stroke="currentColor" stroke-width="2"/></svg>`,
  
  success: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="9" stroke="currentColor" stroke-width="2"/><polyline points="6,11 9,14 14,7" fill="none" stroke="currentColor" stroke-width="2"/></svg>`,

};


document.querySelectorAll('.markdown-body blockquote').forEach(blockquote => {
  const text = blockquote.textContent.trim();

  function prependIcon(type, label) {
    blockquote.classList.add('markdown-alert', `markdown-alert-${type}`);
    blockquote.innerHTML = blockquote.innerHTML.replace(
      `[!${label.toUpperCase()}]`,
      `<div class="markdown-alert-title" style="display:flex;align-items:center;gap:0.4em;">${icons[type]}<strong>${label.charAt(0).toUpperCase() + label.slice(1)}:</strong></div><br>`
    );
  }

  if (text.startsWith('[!NOTE]')) prependIcon('note', 'note');
  if (text.startsWith('[!TIP]')) prependIcon('tip', 'tip');
  if (text.startsWith('[!IMPORTANT]')) prependIcon('important', 'important');
  if (text.startsWith('[!WARNING]')) prependIcon('warning', 'warning');
  if (text.startsWith('[!CAUTION]')) prependIcon('caution', 'caution');
  if (text.startsWith('[!ERROR]')) prependIcon('error', 'error');
  if (text.startsWith('[!SUCCESS]')) prependIcon('success', 'success');
  // ...add more cases for other types as needed
});
