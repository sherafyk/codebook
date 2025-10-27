
```
function removeBlankRows() {
  const sheet = SpreadsheetApp.getActiveSheet();
  const range = sheet.getDataRange();
  const values = range.getValues();

  // Keep only non-empty rows
  const filtered = values.filter(row => row.join('').trim() !== '');

  // Clear and rewrite
  sheet.clearContents();
  sheet.getRange(1, 1, filtered.length, filtered[0].length).setValues(filtered);
}
```
