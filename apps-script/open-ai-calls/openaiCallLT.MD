````markdown
# 📘 Using `openaiCallLT` in Your Google Sheet

This guide walks you through installing and using the `openaiCallLT` Apps Script function to generate AI completions based on a combined prompt in your spreadsheet. We’ll use:

- **Sheet1**  
  - **A1**: Your base prompt  
  - **B1**: Additional context/data  
  - **C1**: Combined prompt (`A1` + line break + `B1`)  
  - **D1**: Output cell for the AI response  

---

## 🛠️ 1. Install the Script

1. Open your Google Sheet.  
2. **Extensions → Apps Script**.  
3. In the script editor, delete any placeholder code and paste in the optimized function:

   ```js
   /**
    * Calls OpenAI Chat Completions API and writes the result to a sheet cell.
    *
    * @param {string} promptCell  A1 notation of the cell with the prompt.
    * @param {string} outputCell  A1 notation of the cell to write the response.
    * @param {Object} [opts]      Optional overrides: { model, temperature, maxTokens }.
    */
   function openaiCallLT(promptCell, outputCell, opts) {
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
   
     if (!prompt) {
       outputRange.clearContent();
       return;
     }
   
     const url = 'https://api.openai.com/v1/chat/completions';
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
   
     let resultText;
     try {
       const resp = UrlFetchApp.fetch(url, options);
       if (resp.getResponseCode() !== 200) {
         throw new Error(`HTTP ${resp.getResponseCode()}: ${resp.getContentText()}`);
       }
       const json = JSON.parse(resp.getContentText());
       resultText = json.choices?.[0]?.message?.content || '';
     } catch (err) {
       Logger.log('OpenAI error', err);
       resultText = `Error: ${err.message}`;
     }
   
     outputRange.setValue(resultText);
   }
````

4. **Save** your script.
5. **Project Settings** (gear icon) → **Script Properties** → add a row:

   * **Key**: `OPENAI_API_KEY`
   * **Value**: *your\_openai\_api\_key\_here*
6. Click **Save**.

---

## 📝 2. Prepare Your Sheet

In **Sheet1**, set up columns as follows:

| Cell   | Content                                                   |
| ------ | --------------------------------------------------------- |
| **A1** | *Your base prompt*                                        |
| **B1** | *Additional data or context*                              |
| **C1** | =A1 & CHAR(10) & B1  *(combines A1+B1 with a line break)* |
| **D1** | *(leave blank – this is where the AI output will go)*     |

> **Tip:** `CHAR(10)` inserts a newline in Google Sheets.

---

## 🚀 3. Run the Function

You can invoke the function manually:

1. Back in the Apps Script editor, click the dropdown (▶️) next to `openaiCallLT`.
2. Choose **“Run”**.
3. When prompted for authorization, follow the on-screen steps.

Or, call it from a custom menu in your sheet:

```js
function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('AI Tools')
    .addItem('Generate from C1 → D1', 'runOpenAI')
    .addToUi();
}

function runOpenAI() {
  // Uses default model, temperature, and token limit
  openaiCallLT('C1', 'D1');
}
```

1. Add those two functions below your main code and **Save**.
2. Reload the sheet; you’ll now see **AI Tools → Generate from C1 → D1**.

---

## 🔍 4. Example Walk-Through

1. **Enter** in **A1**:

   > *“Summarize the following product description:”*
2. **Enter** in **B1**:

   > *“This smartphone features a 6.7-inch OLED display, 128 GB storage, and a quad-camera system.”*
3. **C1** (auto-populated):

   ```
   Summarize the following product description:
   This smartphone features a 6.7-inch OLED display, 128 GB storage, and a quad-camera system.
   ```
4. **D1**:

   * Either click **AI Tools → Generate from C1 → D1**
   * Or run **openaiCallLT('C1','D1')** from the Apps Script editor
5. **Result** appears in **D1**, e.g.:

   > *“A new 6.7-inch OLED smartphone boasts 128 GB of storage and a quad-camera setup for versatile photography.”*

---

### 🎯 Tips & Next Steps

* **Change model/temperature** by passing `opts`:

  ```js
  openaiCallLT('C1', 'D1', { temperature: 0.2, maxTokens: 300 });
  ```
* **Batch process**: loop over rows and call the function for each.
* **Error handling**: check `Logger` for details if D1 shows an error message.

You now have a flexible, reusable pattern:

1. **Base prompt** in A
2. **Context** in B
3. **Combined** in C with `CHAR(10)`
4. **AI output** in D via `openaiCallLT`

Enjoy building your AI-powered spreadsheets!
