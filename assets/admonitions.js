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
