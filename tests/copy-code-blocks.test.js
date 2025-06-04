const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

const script = fs.readFileSync(path.join(__dirname, '../assets/copy-code-blocks.js'), 'utf8');

function run(html) {
  const dom = new JSDOM(html, { runScripts: 'outside-only' });
  // Mock clipboard API
  dom.window.navigator.clipboard = { writeText: jest.fn(() => Promise.resolve()) };
  const fn = new dom.window.Function(script);
  fn();
  return dom;
}

describe('copy-code-blocks script', () => {
  test('inserts copy button and updates text on click', async () => {
    const html = '<pre><code>console.log("test");</code></pre>';
    const dom = run(html);
    const { document } = dom.window;
    const button = document.querySelector('pre button');
    expect(button).not.toBeNull();
    // Initial button text
    expect(button.innerText).toBe('⿻');

    // Simulate click
    button.dispatchEvent(new dom.window.Event('click'));
    // Wait for Promise microtasks
    await Promise.resolve();

    expect(button.innerText).toBe('Copied!');
  });

  test('button text resets after timeout', async () => {
    jest.useFakeTimers();
    const html = '<pre><code>console.log("test");</code></pre>';
    const dom = run(html);
    const button = dom.window.document.querySelector('pre button');

    // Click and wait for clipboard Promise to resolve
    button.dispatchEvent(new dom.window.Event('click'));
    await Promise.resolve();
    expect(button.innerText).toBe('Copied!');

    // Advance timers and ensure text resets
    jest.advanceTimersByTime(2000);
    await Promise.resolve();
    expect(button.innerText).toBe('⿻');
    jest.useRealTimers();
  });
});
