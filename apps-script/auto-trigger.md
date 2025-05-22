# ⏰ Auto Trigger Setup

Use this Apps Script snippet to automatically run a function every hour.

## Code

```js
function createTimeTrigger() {
  ScriptApp.newTrigger("myFunction")
    .timeBased()
    .everyHours(1)
    .create();
}
```