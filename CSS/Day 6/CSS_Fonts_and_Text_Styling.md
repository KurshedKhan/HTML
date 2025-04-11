
# 🎨 Fonts and Text Styling in CSS (Basic to Advanced)

## 📌 1. Basic Font Styling

### ✅ Font Family
```css
font-family: 'Arial', sans-serif;
```
- Defines the typeface.
- Always use fallback fonts.

### ✅ Font Size
```css
font-size: 16px; /* or em, rem, %, vw */
```

### ✅ Font Weight
```css
font-weight: normal;   /* 400 */
font-weight: bold;     /* 700 */
font-weight: 100 - 900;
```

### ✅ Font Style
```css
font-style: normal;
font-style: italic;
font-style: oblique;
```

### ✅ Text Color
```css
color: #333;
```

## 🧱 2. Text Decoration & Transformation

### ✅ Text Decoration
```css
text-decoration: none;
text-decoration: underline;
text-decoration: line-through;
```

### ✅ Text Transform
```css
text-transform: uppercase;
text-transform: lowercase;
text-transform: capitalize;
```

## 🧭 3. Text Alignment & Spacing

### ✅ Text Align
```css
text-align: left;
text-align: center;
text-align: right;
text-align: justify;
```

### ✅ Line Height
```css
line-height: 1.5;
```

### ✅ Letter Spacing
```css
letter-spacing: 2px;
```

### ✅ Word Spacing
```css
word-spacing: 4px;
```

## 📚 4. Advanced Font Styling

### ✅ Google Fonts
```html
<link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
```
```css
font-family: 'Roboto', sans-serif;
```

### ✅ @font-face (Custom Fonts)
```css
@font-face {
  font-family: 'MyFont';
  src: url('myfont.woff2') format('woff2');
}
```

### ✅ Text Shadow
```css
text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
```

### ✅ Font Variant
```css
font-variant: small-caps;
```

### ✅ Direction & Writing Mode
```css
direction: rtl;              /* Right to left */
writing-mode: vertical-rl;   /* Vertical text */
```

## 🧪 5. CSS Variables for Fonts
```css
:root {
  --main-font: 'Poppins', sans-serif;
}

body {
  font-family: var(--main-font);
}
```

## 📝 Notes
- Always define a fallback font.
- Use `rem` or `em` for responsive font sizes.
- Avoid too many font types for performance and design consistency.
