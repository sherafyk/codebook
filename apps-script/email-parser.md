# 📧 Gmail Email Parser with Google Apps Script

## Purpose

Automatically extract sender, date, and subject from Gmail threads and log them into a Google Sheet.

## Code

```js
function fetchEmails() {
  var threads = GmailApp.search("from:boss@example.com newer_than:7d");
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Emails");
  threads.forEach(function(thread) {
    var msg = thread.getMessages()[0];
    sheet.appendRow([msg.getDate(), msg.getFrom(), msg.getSubject()]);
  });
}
```

## Notes

- Make sure to enable Gmail and Sheets APIs
- Adjust query to your use case