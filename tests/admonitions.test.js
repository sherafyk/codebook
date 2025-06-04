const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

const script = fs.readFileSync(path.join(__dirname, '../assets/admonitions.js'), 'utf8');

function run(html) {
  const dom = new JSDOM(html, { runScripts: 'outside-only' });
  const fn = new dom.window.Function(script);
  fn();
  return dom;
}

describe('admonitions script', () => {
  const types = ['note', 'tip', 'important', 'warning', 'caution', 'error', 'success'];
  const labels = ['Note', 'Tip', 'Important', 'Warning', 'Caution', 'Error', 'Success'];

  test('inserts icons and classes for each admonition type', () => {
    const html = `\n<div class="markdown-body">\n  ${types.map(t => `<blockquote>[!${t.toUpperCase()}] ${t}</blockquote>`).join('\n  ')}\n</div>`;
    const dom = run(html);
    const { document } = dom.window;
    const blocks = document.querySelectorAll('blockquote');
    types.forEach((type, i) => {
      const block = blocks[i];
      expect(block.classList.contains('markdown-alert')).toBe(true);
      expect(block.classList.contains(`markdown-alert-${type}`)).toBe(true);
      expect(block.innerHTML).toContain(`<strong>${labels[i]}:</strong>`);
      expect(block.textContent).not.toMatch(/\[!.*\]/);
    });
  });
});
