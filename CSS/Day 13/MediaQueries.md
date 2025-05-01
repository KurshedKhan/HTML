Here are **media queries** in CSS explained concisely in a Markdown (`.md`) format suitable for notes:

---

# 📱 Media Queries in CSS

Media queries allow you to apply CSS rules based on the **device’s characteristics**, like screen size, resolution, orientation, etc.

---

## 📌 Basic Syntax

```css
@media media-type and (condition) {
  /* CSS rules */
}
```

---

## ✅ Common Media Types

- `all` – Suitable for all devices (default)
- `screen` – For screens (desktops, tablets, phones)
- `print` – For printers
- `speech` – For screen readers

---

## 📐 Common Conditions (Media Features)

| Condition         | Description                        |
|------------------|------------------------------------|
| `min-width`      | Minimum width of the viewport      |
| `max-width`      | Maximum width of the viewport      |
| `min-height`     | Minimum height                     |
| `max-height`     | Maximum height                     |
| `orientation`    | `portrait` or `landscape`          |
| `resolution`     | Screen resolution (DPI, dppx)      |

---

## 💡 Examples

### 1. Responsive Layout for Tablets (width ≥ 768px)
```css
@media (min-width: 768px) {
  body {
    font-size: 18px;
  }
}
```

### 2. Mobile Styles (width ≤ 600px)
```css
@media (max-width: 600px) {
  .nav {
    display: none;
  }
}
```

### 3. Portrait Mode
```css
@media (orientation: portrait) {
  .image {
    width: 100%;
  }
}
```

---

## 🧠 Tips

- Combine multiple conditions with `and`:
```css
@media screen and (min-width: 600px) and (orientation: landscape) {
  /* CSS rules */
}
```

- Use media queries for **responsive web design** (RWD).
- Keep mobile-first approach by using `min-width`.

---