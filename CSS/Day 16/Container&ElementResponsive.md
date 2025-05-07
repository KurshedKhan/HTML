## ✅ 1. Use a Responsive Container

A **container** is the main wrapper of your content. Make it responsive like this:

```css
.container {
  width: 100%;        /* Full width on small screens */
  max-width: 1200px;  /* Max size on large screens */
  margin: 0 auto;     /* Center the container */
  padding: 0 15px;    /* Space inside the edges */
}
```

➡️ This ensures the container scales with the screen but doesn't get too wide.

---

## ✅ 2. Use Relative Units Instead of Pixels

Use `%`, `em`, `rem`, `vw`, `vh` instead of `px` so the layout scales.

```css
.card {
  width: 50%;   /* Takes 50% of its parent container */
  padding: 2rem;
}
```

---

## ✅ 3. Use Flexbox or Grid for Layout

These layout systems are **responsive by default**:

### Flexbox Example:

```css
.row {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
.col {
  flex: 1 1 300px;  /* Grow, shrink, and base width */
}
```

### Grid Example:

```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}
```

---

## ✅ 4. Use Media Queries for Custom Layouts

You can change the layout or size of elements for different screen sizes:

```css
@media (max-width: 768px) {
  .container {
    padding: 0 10px;
  }
  .col {
    width: 100%;
  }
}
```

---

## ✅ 5. Responsive Text and Images

### Text:

```css
h1 {
  font-size: clamp(1.5rem, 5vw, 3rem);
}
```

### Images:

```css
img {
  max-width: 100%;
  height: auto;
  display: block;
}
```

---

## ✅ Summary Table

| Feature              | What to Use                                |
| -------------------- | ------------------------------------------ |
| Responsive container | `width: 100%`, `max-width`, `margin: auto` |
| Units                | %, rem, vw, vh                             |
| Layout               | Flexbox, Grid                              |
| Adapt styles         | Media queries                              |
| Text                 | `clamp()` or `rem`                         |
| Images               | `max-width: 100%; height: auto;`           |

---
