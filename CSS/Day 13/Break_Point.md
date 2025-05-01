# 🧱 CSS Breakpoints for Responsive Layouts

Breakpoints define the **screen widths** at which your website layout should change to provide the best user experience on all devices.

---

## 📊 Common Breakpoints

These are widely used standard breakpoints:

| Device           | Width Range           | Media Query Example                       |
|------------------|------------------------|-------------------------------------------|
| 📱 Mobile (Small) | 0 – 480px              | `@media (max-width: 480px)`               |
| 📱 Mobile (Medium)| 481px – 767px          | `@media (max-width: 767px)`               |
| 📱📱 Tablet        | 768px – 1024px         | `@media (min-width: 768px)`               |
| 💻 Laptop         | 1025px – 1280px        | `@media (min-width: 1025px)`              |
| 🖥️ Desktop        | 1281px and above       | `@media (min-width: 1281px)`              |

---

## 🧩 Example Usage

```css
/* Mobile First */
body {
  font-size: 14px;
}

/* Tablets */
@media (min-width: 768px) {
  body {
    font-size: 16px;
  }
}

/* Laptops */
@media (min-width: 1025px) {
  body {
    font-size: 18px;
  }
}

/* Desktops */
@media (min-width: 1281px) {
  body {
    font-size: 20px;
  }
}
```

---

## 🧠 Tips

- ✅ Use a **mobile-first** approach with `min-width`.
- 🎯 Test your layout at **each breakpoint**.
- 🛠 Customize breakpoints based on your project needs.

---

