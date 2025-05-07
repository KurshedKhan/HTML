## ✅ Fluid Layouts in CSS

### 📌 What is it?

A **fluid layout** automatically adjusts to fit different screen sizes. Instead of using fixed units like `px`, it uses **relative units** like `%`, `vw`, and `vh`.

### 📘 Example:

```css
.container {
  width: 80%;       /* 80% of the parent container */
  margin: 0 auto;   /* center the container */
}
```

### ✅ Common Units Used:

* `%` (percentage)
* `vw` (viewport width – 1% of the viewport’s width)
* `vh` (viewport height – 1% of the viewport’s height)

---

## ✅ Responsive Typography in CSS

### 📌 What is it?

**Responsive typography** means the text size adapts based on the screen size to ensure readability on all devices.

### 🔹 Techniques:

1. **Relative Units**: `em`, `rem`
2. **Viewport Units**: `vw`, `vh`
3. **Clamp Function**: A modern CSS method to set a scalable font size with limits.

### 📘 Example 1: Using `rem`

```css
body {
  font-size: 1rem;  /* Usually equals 16px */
}
h1 {
  font-size: 2.5rem;  /* Scales based on root font-size */
}
```

### 📘 Example 2: Using `clamp()`

```css
h1 {
  font-size: clamp(1.5rem, 4vw, 3rem);
}
```

👉 Meaning: Minimum 1.5rem, preferred 4vw, maximum 3rem — great for responsiveness.

---

## ✅ Bonus: With Media Queries

```css
@media (max-width: 600px) {
  body {
    font-size: 14px;
  }
}
```

---

## 🔚 Summary

| Concept                   | Key Idea                            |
| ------------------------- | ----------------------------------- |
| **Fluid Layout**          | Uses %, vw, vh for flexible sizing  |
| **Responsive Typography** | Uses rem, vw, clamp() to scale text |


