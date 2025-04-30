# 📏 Width in CSS for Responsive Design

Responsive design requires flexible widths that adapt to various screen sizes. This note explains how different CSS width units work for building responsive layouts.

---

## 🧮 CSS Width Units

### ✅ **1. Percentages (%)**
- Relative to the parent element.
```css
.container {
  width: 80%;
}
```
🔹 Useful for fluid layouts.

---

### ✅ **2. Viewport Units (vw, vh)**
- `1vw` = 1% of the viewport width
- `1vh` = 1% of the viewport height

```css
.hero {
  width: 100vw;
  height: 100vh;
}
```
🔹 Great for full-screen sections.

---

### ✅ **3. `auto`**
- Automatically adjusts based on content or parent container.
```css
.box {
  width: auto;
}
```
🔹 Default and flexible.

---

### ✅ **4. `max-width` and `min-width`**
- Control how large/small an element can be.

```css
img {
  width: 100%;
  max-width: 600px;
}
```
🔹 Prevents elements from growing too large or shrinking too much.

---

### ✅ **5. CSS Functions**
#### `calc()`
- Combine units dynamically.

```css
.sidebar {
  width: calc(100% - 300px);
}
```

---

## 📌 Media Query Example for Width

```css
.container {
  width: 90%;
}

@media (min-width: 768px) {
  .container {
    width: 70%;
  }
}
```

---

## 💡 Best Practices

- Use `%` or `vw`/`vh` for responsiveness.
- Avoid fixed `px` widths for layout elements.
- Use `max-width` for images and containers.
- Combine with `media queries` for control at different breakpoints.

---