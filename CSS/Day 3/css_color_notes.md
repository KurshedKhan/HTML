
# 🎨 CSS Colors: HEX, RGB, HSL (Basic to Advanced)

---

## 🧠 1. Basic Color Formats in CSS

### ✅ HEX (Hexadecimal)
- Format: `#RRGGBB`
- Example: `#FF0000` = Red  
- Shorthand: `#F00` = Red

```css
color: #00FF00; /* Green */
color: #0000FF; /* Blue */
```

---

### ✅ RGB (Red, Green, Blue)
- Format: `rgb(red, green, blue)`
- Each value: 0 to 255
- Example: `rgb(255, 0, 0)` = Red

```css
color: rgb(0, 255, 0);   /* Green */
color: rgb(0, 0, 255);   /* Blue */
```

---

### ✅ RGBA (RGB + Alpha)
- Adds transparency
- Format: `rgba(r, g, b, a)`
- `a` = alpha (0 = transparent, 1 = opaque)

```css
color: rgba(255, 0, 0, 0.5); /* Semi-transparent red */
```

---

### ✅ HSL (Hue, Saturation, Lightness)
- Format: `hsl(hue, saturation%, lightness%)`
- Hue: Angle on color wheel (0–360)
- Saturation: 0% (gray) to 100% (full color)
- Lightness: 0% (black) to 100% (white)

```css
color: hsl(120, 100%, 50%); /* Bright green */
color: hsl(240, 100%, 50%); /* Bright blue */
```

---

### ✅ HSLA (HSL + Alpha)
- Format: `hsla(h, s%, l%, a)`
- Adds transparency

```css
color: hsla(0, 100%, 50%, 0.3); /* Transparent red */
```

---

## 🌈 2. Named Colors in CSS

```css
color: red;
color: blue;
color: orange;
color: teal;
```

More than 140 named colors are supported in CSS.

---

## 🎯 3. Advanced Techniques

### 🔄 Color Functions (CSS4+)
- `color-mix()`: Mix two colors

```css
color: color-mix(in srgb, red 50%, blue);
```

- `color-contrast()`: Auto choose contrast

```css
color: color-contrast(white vs black, red, blue);
```

*(Browser support needed for these features)*

---

## 🧪 4. Accessibility Tips

- Use sufficient contrast between text and background.
- Tools: [contrast-ratio.com](https://contrast-ratio.com), [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

---

## 📌 Summary Table

| Format | Example | Transparency? |
|--------|---------|----------------|
| HEX    | `#FF0000` | ❌ |
| RGB    | `rgb(255, 0, 0)` | ❌ |
| RGBA   | `rgba(255, 0, 0, 0.5)` | ✅ |
| HSL    | `hsl(0, 100%, 50%)` | ❌ |
| HSLA   | `hsla(0, 100%, 50%, 0.5)` | ✅ |

---

Happy Styling! 🎨✨
