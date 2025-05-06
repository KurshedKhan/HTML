# 📏 CSS Units: Basic to Advanced Guide

## 🔰 1. Introduction to CSS Units

CSS units define the measurement of lengths such as width, height, margin, padding, font-size, etc. Units can be **absolute** or **relative**.

---

## 📐 2. Absolute Units

Absolute units are fixed and do not scale with screen size.

| Unit | Description      | Example |
|------|------------------|---------|
| `px` | Pixels           | `font-size: 16px;` |
| `cm` | Centimeters      | `width: 10cm;` |
| `mm` | Millimeters      | `height: 50mm;` |
| `in` | Inches           | `width: 2in;` |
| `pt` | Points (1/72 in) | `font-size: 12pt;` |
| `pc` | Picas (1pc = 12pt) | `font-size: 1pc;` |

> ⚠️ Absolute units are rarely used in responsive design.

---

## 🔁 3. Relative Units

Relative units depend on other elements or the viewport.

### 3.1 Font-Relative Units

| Unit | Relative To         | Example |
|------|----------------------|---------|
| `em` | Parent's font-size   | `padding: 2em;` |
| `rem`| Root font-size (`html`) | `font-size: 1.5rem;` |
| `%`  | Parent value         | `width: 50%;` |

### 3.2 Viewport-Relative Units

| Unit  | Description                      | Example |
|-------|----------------------------------|---------|
| `vw`  | 1% of viewport width             | `width: 80vw;` |
| `vh`  | 1% of viewport height            | `height: 100vh;` |
| `vmin`| 1% of smaller viewport dimension | `font-size: 5vmin;` |
| `vmax`| 1% of larger viewport dimension  | `font-size: 5vmax;` |

---

## 🧠 4. Advanced CSS Units

### 4.1 `ch` and `ex`

| Unit | Description                                | Example |
|------|--------------------------------------------|---------|
| `ch` | Width of the `0` character in current font | `width: 30ch;` |
| `ex` | Height of the lowercase `x`                | `line-height: 2ex;` |

### 4.2 `fr` (Fractional Unit – CSS Grid)

Used in CSS Grid to distribute space.

```css
grid-template-columns: 1fr 2fr;
````

Means: 1 part + 2 parts = total 3 parts (33.33% and 66.66%).

---

## 🧪 5. Custom Properties & Calculations

### Using `calc()`

```css
width: calc(100% - 50px);
```

### Combining Units

```css
font-size: calc(1rem + 0.5vw);
```

---

## 📊 6. Best Practices

* Use `rem` or `em` for font sizing (accessibility-friendly).
* Use `vh`/`vw` for full screen sections.
* Avoid `px` for responsive design.
* Use `fr` in Grid layouts.
* Use `calc()` for dynamic calculations.

---

## ✅ 7. Summary Table

| Unit Type | Examples             | Use Case                        |
| --------- | -------------------- | ------------------------------- |
| Absolute  | `px`, `cm`, `in`     | Print, fixed sizes              |
| Relative  | `em`, `rem`, `%`     | Font sizing, responsive layouts |
| Viewport  | `vh`, `vw`           | Full-screen sections            |
| Grid      | `fr`                 | CSS Grid layout                 |
| Advanced  | `ch`, `ex`, `calc()` | Typography, dynamic sizing      |

---
