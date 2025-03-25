# HTML: div and span Tags (Basic to Advanced)

## 1. Introduction
`<div>` and `<span>` are two important tags in HTML, used for grouping and styling content.

- **`<div>` (Block-level element):** Used for layout and section creation.
- **`<span>` (Inline element):** Used to style small portions of text.

---

## 2. `div` Tag (Block-level element)
### Usage:
- Divides the webpage into sections.
- Used with CSS and JavaScript.

### Example:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Div Example</title>
    <style>
        .container {
            width: 300px;
            border: 2px solid black;
            padding: 10px;
            margin: 10px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h2>This is a div</h2>
        <p>This is a block-level element.</p>
    </div>
</body>
</html>
```

---

## 3. `span` Tag (Inline element)
### Usage:
- Styles text or inline elements.
- Highlights small content portions.

### Example:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Span Example</title>
    <style>
        .highlight {
            color: red;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <p>This is an <span class="highlight">important</span> text.</p>
</body>
</html>
```

---

## 4. Difference Between `div` and `span`
| Feature      | `<div>` | `<span>` |
|-------------|---------|---------|
| Type        | Block-level | Inline |
| Line Break  | Yes | No |
| Usage      | Section grouping | Styling small text portions |

---

## 5. Advanced Example: Using `div` and `span` Together
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Div & Span Example</title>
    <style>
        .box {
            border: 2px solid blue;
            padding: 10px;
            width: 50%;
        }
        .highlight {
            background-color: yellow;
        }
    </style>
</head>
<body>
    <div class="box">
        <p>This is a <span class="highlight">highlighted</span> text.</p>
    </div>
</body>
</html>
```

---

## 6. Using `div` and `span` with CSS and JavaScript
### Styling with CSS:
```css
.box {
    background-color: lightgray;
    text-align: center;
}
.highlight {
    color: blue;
    font-size: 18px;
}
```

### Changing `div` and `span` Content with JavaScript:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>JavaScript with div & span</title>
    <style>
        .message {
            font-size: 20px;
            color: green;
        }
    </style>
</head>
<body>
    <div id="myDiv">This is a div.</div>
    <button onclick="changeText()">Change Text</button>

    <script>
        function changeText() {
            document.getElementById("myDiv").innerHTML = "Text has been changed!";
        }
    </script>
</body>
</html>
```

---

## 7. Conclusion
- `<div>` is used for block-level layout and grouping.
- `<span>` is used for styling inline text.
- Both are crucial for web design and interactive elements.
