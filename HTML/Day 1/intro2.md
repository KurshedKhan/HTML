# HTML Document Structure: DOCTYPE, HTML, HEAD, and BODY Explained

## 1. `<!DOCTYPE html>` (Document Type Declaration)
The `DOCTYPE` declaration is the first line of an HTML document and tells the web browser which version of HTML is being used.  

**Example:**
```html
<!DOCTYPE html>
```

### Purpose:
- Specifies that the document follows HTML5.
- Ensures the browser renders the page correctly.
- It is **not** an HTML tag, but a declaration.

---

## 2. `<html>` (Root Element)
The `<html>` element is the root of an HTML document. It contains all other elements.  

**Example:**
```html
<html lang="en">
</html>
```

### Purpose:
- **Wraps** all the content in the document.
- The `lang="en"` attribute specifies the language of the document (English in this case).  

---

## 3. `<head>` (Head Section)
The `<head>` section contains metadata, which is information about the document (not displayed on the page).  

**Example:**
```html
<head>
    <title>My Web Page</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
</head>
```

### Common Elements in `<head>`:
- **`<title>`** → Defines the page title (shown in the browser tab).  
- **`<meta charset="UTF-8">`** → Supports special characters and symbols.  
- **`<meta name="viewport" content="width=device-width, initial-scale=1.0">`** → Makes the page responsive.  
- **`<link rel="stylesheet" href="styles.css">`** → Links an external CSS file.  
- **`<script src="script.js"></script>`** → Links an external JavaScript file.  

---

## 4. `<body>` (Body Section)
The `<body>` section contains all the visible content of the webpage.  

**Example:**
```html
<body>
    <h1>Welcome to My Website</h1>
    <p>This is a paragraph of text.</p>
    <img src="image.jpg" alt="Sample Image">
    <a href="https://example.com">Visit Example</a>
</body>
```

### Common Elements in `<body>`:
- **`<h1>` to `<h6>`** → Headings.  
- **`<p>`** → Paragraphs.  
- **`<img>`** → Images.  
- **`<a>`** → Links.  
- **`<ul>` / `<ol>`** → Lists.  
- **`<div>` & `<span>`** → Containers for styling.  

---

## Full Example of an HTML Document
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Web Page</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Hello, World!</h1>
    <p>Welcome to my first webpage.</p>
    <img src="image.jpg" alt="A beautiful image">
    <a href="https://example.com">Click here to learn more</a>
</body>
</html>
```

---

## Conclusion
📌 **`<!DOCTYPE html>`** → Declares the document type.  
📌 **`<html>`** → Root of the document.  
📌 **`<head>`** → Contains metadata and links to resources.  
📌 **`<body>`** → Contains visible webpage content.  

Would you like a deeper explanation of any specific tag? 🚀

