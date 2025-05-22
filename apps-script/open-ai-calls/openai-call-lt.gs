/**
 * Fetches a prompt from a sheet cell, sends it to OpenAI’s Chat Completions API,
 * and writes the response back to another cell.
 *
 * Before using, store your API key in Script Properties under "OPENAI_API_KEY".
 *
 * @param {string} promptCell  A1 notation of the cell containing the prompt.
 * @param {string} outputCell  A1 notation of the cell to write the response.
 * @param {Object} [opts]      Optional overrides: { model, temperature, maxTokens }.
 */
function openaiCallLT(promptCell, outputCell, opts) {
  // ——— Configuration & Defaults ———
  const {
    model       = 'gpt-4o-mini',
    temperature = 0.1,
    maxTokens   = 250
  } = opts || {};

  const apiKey = PropertiesService
    .getScriptProperties()
    .getProperty('OPENAI_API_KEY');
  if (!apiKey) {
    throw new Error('Missing OPENAI_API_KEY in Script Properties.');
  }

  const sheet       = SpreadsheetApp.getActiveSheet();
  const promptRange = sheet.getRange(promptCell);
  const outputRange = sheet.getRange(outputCell);
  const prompt      = String(promptRange.getValue()).trim();

  // If there's no prompt, clear output and exit
  if (!prompt) {
    outputRange.clearContent();
    return;
  }

  // ——— Build Request ———
  const url     = 'https://api.openai.com/v1/chat/completions';
  const payload = {
    model,
    messages: [{ role: 'user', content: prompt }],
    temperature,
    max_tokens: maxTokens
  };

  const options = {
    method: 'post',
    contentType: 'application/json',
    headers: { Authorization: `Bearer ${apiKey}` },
    payload:  JSON.stringify(payload),
    muteHttpExceptions: true
  };

  // ——— Call API & Handle Response ———
  let resultText;
  try {
    const resp = UrlFetchApp.fetch(url, options);
    const code = resp.getResponseCode();
    const body = resp.getContentText();

    if (code !== 200) {
      throw new Error(`HTTP ${code}: ${body}`);
    }

    const json = JSON.parse(body);
    resultText = json.choices?.[0]?.message?.content || '';
  } catch (err) {
    Logger.log('OpenAI error', err);
    resultText = `Error: ${err.message}`;
  }

  // ——— Write Back to Sheet ———
  outputRange.setValue(resultText);
}
