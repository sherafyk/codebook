const icons = {
  note: `<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20" fill="currentColor" style="vertical-align:middle;"><circle cx="10" cy="10" r="9" stroke="currentColor" stroke-width="2" fill="none"/><text x="10" y="15" text-anchor="middle" font-size="12" fill="currentColor" font-family="Arial" font-weight="bold">i</text></svg>`,
  tip: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M12 2.5c-3.81 0-6.5 2.743-6.5 6.119 0 1.536.632 2.572 1.425 3.56.172.215.347.422.527.635l.096.112c.21.25.427.508.63.774.404.531.783 1.128.995 1.834a.75.75 0 0 1-1.436.432c-.138-.46-.397-.89-.753-1.357a18.111 18.111 0 0 0-.582-.714l-.092-.11c-.18-.212-.37-.436-.555-.667C4.87 12.016 4 10.651 4 8.618 4 4.363 7.415 1 12 1s8 3.362 8 7.619c0 2.032-.87 3.397-1.755 4.5-.185.23-.375.454-.555.667l-.092.109c-.21.248-.405.481-.582.714-.356.467-.615.898-.753 1.357a.751.751 0 0 1-1.437-.432c.213-.706.592-1.303.997-1.834.202-.266.419-.524.63-.774l.095-.112c.18-.213.355-.42.527-.634.793-.99 1.425-2.025 1.425-3.561C18.5 5.243 15.81 2.5 12 2.5ZM8.75 18h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1 0-1.5Zm.75 3.75a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75Z"></path></svg>`,
  warning: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20"><polygon points="10,3 19,17 1,17" fill="#FFFAE6" stroke="currentColor" stroke-width="2"/><text x="10" y="15" text-anchor="middle" font-size="12" fill="currentColor" font-family="Arial" font-weight="bold">!</text></svg>`,
  caution: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="20" height="20" fill="currentColor"><path d="M4.47.22A.749.749 0 0 1 5 0h6c.199 0 .389.079.53.22l4.25 4.25c.141.14.22.331.22.53v6a.749.749 0 0 1-.22.53l-4.25 4.25A.749.749 0 0 1 11 16H5a.749.749 0 0 1-.53-.22L.22 11.53A.749.749 0 0 1 0 11V5c0-.199.079-.389.22-.53Zm.84 1.28L1.5 5.31v5.38l3.81 3.81h5.38l3.81-3.81V5.31L10.69 1.5ZM8 4a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 8 4Zm0 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>`,
  error: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="9" stroke="currentColor" stroke-width="2"/><line x1="7" y1="7" x2="13" y2="13" stroke="currentColor" stroke-width="2"/><line x1="13" y1="7" x2="7" y2="13" stroke="currentColor" stroke-width="2"/></svg>`,
  success: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="9" stroke="currentColor" stroke-width="2"/><polyline points="6,11 9,14 14,7" fill="none" stroke="currentColor" stroke-width="2"/></svg>`,
  // ...add more as needed!
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
