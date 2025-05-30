document.querySelectorAll('.markdown-body blockquote').forEach(blockquote => {
  const text = blockquote.textContent.trim();
  if (text.startsWith('[!NOTE]')) {
    blockquote.classList.add('markdown-alert', 'markdown-alert-note');
    blockquote.innerHTML = blockquote.innerHTML.replace('[!NOTE]', '<strong>ⓘ Note:</strong>');
  }
  if (text.startsWith('[!WARNING]')) {
    blockquote.classList.add('markdown-alert', 'markdown-alert-warning');
    blockquote.innerHTML = blockquote.innerHTML.replace('[!WARNING]', '<strong>⚠️ Warning:</strong>');
  }
  if (text.startsWith('[!TIP]')) {
    blockquote.classList.add('markdown-alert', 'markdown-alert-tip');
    blockquote.innerHTML = blockquote.innerHTML.replace('[!TIP]', '<strong>💡 Tip:</strong>');
  }
});
