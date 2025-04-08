# CSS: Height and Width Properties (In Depth)

## 📌 Basic Syntax

```css
selector {
  width: value;
  height: value;
}
```

---

## 📏 Value Types

### 1. Absolute Units
- `px`, `cm`, `mm`, `in`, `pt`, `pc`
```css
width: 200px;
height: 100px;
```

### 2. Relative Units
- `em`, `rem`, `%`, `vw`, `vh`, `vmin`, `vmax`
```css
width: 50%;     /* 50% of parent's width */
height: 10vh;   /* 10% of viewport height */
```

### 3. Keywords
- `auto` → Default (based on content)
- `initial` → Resets to default
- `inherit` → Inherits from parent
- `min-content`, `max-content`, `fit-content`

---

## ⚖ Width vs Height

- `width`: Controls horizontal size
- `height`: Controls vertical size
- **Note**: Inline elements (like `<span>`) ignore height unless `display` is changed.

---

## 📦 Box Model Interaction

### Default: `content-box`
```css
width: 100px;
padding: 10px;
border: 2px solid black;
```
→ Total width = 100 + 20 (padding) + 4 (border) = **124px**

### Preferred: `border-box`
```css
box-sizing: border-box;
```
→ Total width stays 100px (includes padding + border)

---

## ⛓ Min/Max Limits

```css
min-width: 300px;
max-width: 90%;
min-height: 200px;
max-height: 100vh;
```

---

## ⚠️ Common Pitfalls

1. **height: 100% not working?**
   - Parent must have defined height:
   ```css
   html, body {
     height: 100%;
   }
   ```

2. **Inline elements ignore width/height**
   - Use `display: block` or `inline-block`

3. **Responsive media**
   ```css
   img {
     max-width: 100%;
     height: auto;
   }
   ```

---

## 💡 Examples

### Fixed box with padding
```css
.card {
  width: 300px;
  height: 200px;
  padding: 20px;
  box-sizing: border-box;
  background-color: #f0f0f0;
}
```

### Responsive box
```css
.responsive-box {
  width: 80vw;
  height: 50vh;
}
```

---

## ✅ Best Practices
- Use `box-sizing: border-box` for predictable layouts.
- Prefer relative units (`%`, `vh`, `vw`) in responsive designs.
- Use `min-/max-` properties to restrict resizing behavior.
