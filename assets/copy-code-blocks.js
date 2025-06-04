document.querySelectorAll('pre > code').forEach((codeBlock) => {
  const button = document.createElement('button');
  button.innerText = '⿻';
  button.style.position = 'absolute';
  button.style.right = '10px';
  button.style.top = '10px';
  button.style.zIndex = 1;

  const pre = codeBlock.parentNode;
  pre.style.position = 'relative';
  pre.appendChild(button);

  button.addEventListener('click', () => {
    navigator.clipboard.writeText(codeBlock.innerText).then(() => {
      const originalText = button.innerText;
      button.innerText = 'Copied!';
      setTimeout(() => {
        button.innerText = originalText;
      }, 2000);
    });
  });
});
