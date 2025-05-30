


/*

document.querySelectorAll('.markdown-body blockquote').forEach(blockquote => {
  const text = blockquote.textContent.trim();
  if (text.startsWith('[!NOTE]')) {
    blockquote.classList.add('admonition', 'note');
    blockquote.innerHTML = blockquote.innerHTML.replace('[!NOTE]', '<strong>ⓘ Note</strong><br>');
  }
  if (text.startsWith('[!WARNING]')) {
    blockquote.classList.add('admonition', 'warning');
    blockquote.innerHTML = blockquote.innerHTML.replace('[!WARNING]', '');
  }
  if (text.startsWith('[!TIP]')) {
    blockquote.classList.add('admonition', 'tip');
    blockquote.innerHTML = blockquote.innerHTML.replace('[!TIP]', '');
  }
});

