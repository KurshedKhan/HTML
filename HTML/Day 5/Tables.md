# **Detailed Explanation of Table Tags in HTML**

Tables in HTML are used to display data in a structured format using rows and columns. HTML provides several tags to create and format tables.

---

## **1. Basic Table Structure (`<table>`)**

The `<table>` tag is used to define a table. Inside the table, we use:
- `<tr>` (Table Row) to define rows
- `<td>` (Table Data) to define individual cells

🔹 **Example:**

```html
<table border="1">
  <tr>
    <td>Row 1, Column 1</td>
    <td>Row 1, Column 2</td>
  </tr>
  <tr>
    <td>Row 2, Column 1</td>
    <td>Row 2, Column 2</td>
  </tr>
</table>
```

🔹 **Rendered Output:**

| Row 1, Column 1 | Row 1, Column 2 |
|-----------------|-----------------|
| Row 2, Column 1 | Row 2, Column 2 |

---

## **2. Table Headings (`<th>`)**

The `<th>` tag is used instead of `<td>` to define header cells.

🔹 **Example:**

```html
<table border="1">
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>John</td>
    <td>25</td>
  </tr>
</table>
```

🔹 **Rendered Output:**

| Name  | Age |
|-------|-----|
| John  | 25  |

---

## **3. Table Caption (`<caption>`)**

The `<caption>` tag is used to provide a title for the table.

🔹 **Example:**

```html
<table border="1">
  <caption>Student Information</caption>
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Alice</td>
    <td>22</td>
  </tr>
</table>
```

🔹 **Rendered Output:**

**Student Information**

| Name  | Age |
|-------|-----|
| Alice | 22  |

---

## **4. Spanning Columns (`colspan`) & Rows (`rowspan`)**

- `colspan` merges multiple columns.
- `rowspan` merges multiple rows.

🔹 **Example:**

```html
<table border="1">
  <tr>
    <th colspan="2">Merged Columns</th>
  </tr>
  <tr>
    <td rowspan="2">Merged Rows</td>
    <td>Row 1</td>
  </tr>
  <tr>
    <td>Row 2</td>
  </tr>
</table>
```

🔹 **Rendered Output:**

| Merged Columns |  |
|---------------|---|
| Merged Rows   | Row 1 |
|               | Row 2 |

---

## **5. Table Sections (`<thead>`, `<tbody>`, `<tfoot>`)**

- `<thead>`: Defines the table header
- `<tbody>`: Defines the table body
- `<tfoot>`: Defines the table footer

🔹 **Example:**

```html
<table border="1">
  <thead>
    <tr>
      <th>Product</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Apple</td>
      <td>$1</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Total</td>
      <td>$1</td>
    </tr>
  </tfoot>
</table>
```

🔹 **Rendered Output:**

| Product | Price |
|---------|-------|
| Apple   | $1    |
| **Total** | **$1** |

---

## **📌 Summary Table**

| Tag | Description | Example |
|-----|-------------|---------|
| `<table>` | Defines a table | `<table></table>` |
| `<tr>` | Table row | `<tr></tr>` |
| `<td>` | Table data (cell) | `<td>Data</td>` |
| `<th>` | Table header | `<th>Header</th>` |
| `<caption>` | Table caption/title | `<caption>Title</caption>` |
| `colspan` | Merges columns | `<td colspan="2">Merged</td>` |
| `rowspan` | Merges rows | `<td rowspan="2">Merged</td>` |
| `<thead>` | Table header section | `<thead></thead>` |
| `<tbody>` | Table body section | `<tbody></tbody>` |
| `<tfoot>` | Table footer section | `<tfoot></tfoot>` |

Tables help structure and organize data efficiently in HTML. 🚀

