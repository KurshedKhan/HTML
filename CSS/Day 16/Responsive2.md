Responsive design बनाने के लिए CSS में आपको कुछ मुख्य **steps और techniques** को फॉलो करना होता है, जिससे आपकी वेबसाइट हर डिवाइस (mobile, tablet, desktop) पर सही दिखे और काम करे।

---

## ✅ Steps for Responsive Design in CSS

### 1. **Use a Responsive Viewport Meta Tag**

HTML में यह जरूरी है:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

➡️ यह ब्राउज़र को बताता है कि layout को screen-width के अनुसार scale किया जाए।

---

### 2. **Use Relative Units (%, em, rem, vw, vh)**

Avoid `px` for widths, fonts, paddings.

```css
.container {
  width: 80%;  /* not fixed pixels */
}

h1 {
  font-size: 2.5rem;  /* scales with screen */
}
```

---

### 3. **Use Media Queries**

Media queries allow different styles for different screen sizes.

```css
@media (max-width: 768px) {
  .menu {
    display: none; /* hide menu on smaller screens */
  }
}
```

---

### 4. **Use Flexbox or Grid for Layout**

These layouts are flexible and adjust better.

```css
.container {
  display: flex;
  flex-wrap: wrap;
}
```

---

### 5. **Make Images and Videos Responsive**

```css
img, video {
  max-width: 100%;
  height: auto;
}
```

---

### 6. **Use `clamp()` for Responsive Fonts**

```css
h1 {
  font-size: clamp(1.5rem, 4vw, 3rem);
}
```

---

### 7. **Hide or Adjust Elements on Small Screens**

```css
@media (max-width: 600px) {
  .sidebar {
    display: none;
  }
}
```

---

### 8. **Mobile-First Approach**

Start designing for mobile, then scale up using media queries.

```css
/* Mobile styles */
body {
  font-size: 1rem;
}

/* Tablet and up */
@media (min-width: 768px) {
  body {
    font-size: 1.2rem;
  }
}
```

---

## 🔚 Summary Table

| Step                     | Purpose                                 |
| ------------------------ | --------------------------------------- |
| Viewport meta tag        | Set screen width for responsiveness     |
| Relative units           | Scale with screen size                  |
| Media queries            | Apply styles based on screen width      |
| Flexbox/Grid             | Flexible layout system                  |
| Responsive images/videos | Auto-adjust size without overflow       |
| Clamp function           | Smooth font scaling                     |
| Hide/show components     | Optimize for device                     |
| Mobile-first design      | Start small, enhance for larger screens |

---
