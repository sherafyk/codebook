# 📘 Comprehensive Guide to GitHub Flavored Markdown (GFM)

## Table of Contents

* [Headings](#headings)
* [Text Formatting](#text-formatting)
* [Lists](#lists)
* [Links](#links)
* [Images](#images)
* [Code](#code)
* [Blockquotes](#blockquotes)
* [Horizontal Rules](#horizontal-rules)
* [Tables](#tables)
* [Task Lists](#task-lists)
* [Mentions and References](#mentions-and-references)
* [Emojis](#emojis)
* [Footnotes](#footnotes)
* [Alerts](#alerts)
* [HTML in Markdown](#html-in-markdown)
* [Escaping Characters](#escaping-characters)

---

## Headings

Use `#` symbols to create headings. The number of `#` symbols indicates the heading level.

```markdown
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6
```

Alternatively, for level 1 and 2 headings, you can use underline styles:

```markdown
Heading 1
=========

Heading 2
---------
```

---

## Text Formatting

* *Italic*: `*italic*` or `_italic_`
* **Bold**: `**bold**` or `__bold__`
* ***Bold and Italic***: `***bold and italic***`
* ~~Strikethrough~~: `~~strikethrough~~`

---

## Lists

**Unordered List:**

```markdown
- Item 1
- Item 2
  - Subitem 2.1
  - Subitem 2.2
```

**Ordered List:**

```markdown
1. First item
2. Second item
   1. Subitem 2.1
   2. Subitem 2.2
```

---

## Links

**Inline Link:**

```markdown
[GitHub](https://github.com)
```

**Reference Link:**

```markdown
[GitHub][1]

[1]: https://github.com
```

---

## Images

**Inline Image:**

```markdown
![Alt text](https://example.com/image.png)
```

**Reference Image:**

```markdown
![Alt text][image]

[image]: https://example.com/image.png
```

---

## Code

**Inline Code:**

Use backticks to denote inline code: `` `code` ``

**Code Blocks:**

Use triple backticks for code blocks. Specify the language for syntax highlighting.

<pre>
```python
def hello_world():
    print("Hello, world!")
```
</pre>

---

## Blockquotes

Use `>` to create blockquotes.

```markdown
> This is a blockquote.
> 
> It can span multiple lines.
```

---

## Horizontal Rules

Use three or more hyphens, asterisks, or underscores on a line by themselves.

```markdown
---

***

___
```

---

## Tables

Create tables using pipes `|` and hyphens `-`.

```markdown
| Syntax | Description |
|--------|-------------|
| Header | Title       |
| Paragraph | Text     |
```

---

## Task Lists

Use `- [ ]` for unchecked boxes and `- [x]` for checked boxes.

```markdown
- [x] Completed task
- [ ] Incomplete task
```

---

## Mentions and References

* **User Mention**: `@username` (e.g., `@octocat`)
* **Issue or PR Reference**: `#issue_number` (e.g., `#123`)
* **Commit Reference**: Use the commit SHA (e.g., `16c999e`)

---

## Emojis

Use colons around emoji names: `:emoji_name:`

Examples:

* `:smile:` 😊
* `:rocket:` 🚀
* `:tada:` 🎉

For a full list of supported emojis, see the [Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet/).

---

## Footnotes

Add footnotes using `[^1]` and define them at the end.

```markdown
Here is a footnote reference[^1].

[^1]: This is the footnote.
```

---

## Alerts

GitHub supports special blockquotes for alerts:

```markdown
> [!NOTE]
> This is a note.

> [!TIP]
> This is a tip.

> [!IMPORTANT]
> This is important information.

> [!WARNING]
> This is a warning.

> [!CAUTION]
> This is a caution.
```

These alerts are rendered with distinctive colors and icons to emphasize the content.

---

## HTML in Markdown

GitHub allows the use of some HTML tags in Markdown files. For example:

```html
<p align="center">
  <img src="https://example.com/image.png" alt="Centered Image">
</p>
```

Use HTML when you need more control over formatting that Markdown doesn't provide.

---

## Escaping Characters

To display characters that are normally interpreted as Markdown syntax, use a backslash `\` before the character.

```markdown
\*This text is not italicized\*
```

---

This guide should equip you with the tools to effectively format your Markdown files on GitHub. For more detailed information, refer to GitHub's official documentation on [Basic writing and formatting syntax](https://docs.github.com/github/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax).
