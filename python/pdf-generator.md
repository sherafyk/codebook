# 📄 Python PDF Generator

Generate simple PDFs using Python and `fpdf`.

## Code

```python
from fpdf import FPDF

pdf = FPDF()
pdf.add_page()
pdf.set_font("Arial", size=12)
pdf.cell(200, 10, txt="Hello World", ln=True, align="C")
pdf.output("hello.pdf")
```