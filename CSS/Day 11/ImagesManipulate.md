### 🖼️ CSS Image Manipulation Notes

---

#### 🔹 1. **CSS Filters**
- Filters apply visual effects (like blur, brightness, contrast) to elements, mainly images.

```css
img {
  filter: blur(4px) brightness(0.8) grayscale(50%);
}
```

**Common Filter Functions:**

| Filter        | Description                      | Example                   |
|---------------|----------------------------------|---------------------------|
| `blur(px)`    | Blurs the image                  | `blur(2px)`              |
| `brightness(%)` | Brightness level               | `brightness(120%)`       |
| `contrast(%)` | Controls contrast                | `contrast(80%)`          |
| `grayscale(%)`| Converts to grayscale            | `grayscale(100%)`        |
| `sepia(%)`    | Applies a sepia tone             | `sepia(50%)`             |
| `invert(%)`   | Inverts colors                   | `invert(100%)`           |
| `hue-rotate(deg)` | Rotates hue                  | `hue-rotate(90deg)`      |
| `saturate(%)` | Saturation level                 | `saturate(200%)`         |

---

#### 🔹 2. **object-fit**
- Controls how an image should be resized to fit its container.

```css
img {
  width: 300px;
  height: 200px;
  object-fit: cover;
}
```

**object-fit Values:**

| Value      | Description |
|------------|-------------|
| `fill`     | Default. Stretches image to fill container |
| `contain`  | Keeps aspect ratio, fits within box |
| `cover`    | Keeps aspect ratio, fills box (may crop) |
| `none`     | No resizing |
| `scale-down` | Chooses `none` or `contain`, whichever is smaller |

---

#### 🔹 3. **object-position**
- Adjusts the position of the image inside its container (used with `object-fit`).

```css
img {
  object-fit: cover;
  object-position: top right;
}
```

**Common Values:**
- Keywords: `top`, `bottom`, `left`, `right`, `center`
- Percentages: `object-position: 20% 80%;`

---

#### 📝 Quick Example

```html
<img src="photo.jpg" 
     style="width:300px; height:200px; 
            object-fit: cover; 
            object-position: center;
            filter: grayscale(80%) blur(1px);" />
```

---

### 🌫️ CSS `backdrop-filter` Notes

---

#### 🔹 What is `backdrop-filter`?

- Applies **graphical effects** (like blur, brightness, contrast) to the **background** behind an element.
- Think of it like a "frosted glass" effect.

```css
.glass-effect {
  backdrop-filter: blur(8px);
}
```

> ⚠️ Works **only** when the element has some **transparency** (like `background-color: rgba(...)` or `opacity`).

---

#### 🔹 Syntax

```css
selector {
  backdrop-filter: blur(5px) brightness(0.8);
}
```

You can combine multiple filters like in the `filter` property.

---

#### 🔹 Common Values:

| Value           | Effect                              | Example                  |
|------------------|-------------------------------------|--------------------------|
| `blur(px)`       | Blurs the background                | `blur(5px)`              |
| `brightness(%)`  | Adjusts background brightness       | `brightness(80%)`        |
| `contrast(%)`    | Adjusts background contrast         | `contrast(150%)`         |
| `grayscale(%)`   | Makes background grayscale          | `grayscale(60%)`         |
| `sepia(%)`       | Applies sepia tone                  | `sepia(100%)`            |
| `hue-rotate(deg)`| Rotates hue of background colors    | `hue-rotate(180deg)`     |

---

#### 🔹 Full Example:

```html
<div class="frosted-box">
  <p>Hello, world!</p>
</div>
```

```css
.frosted-box {
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  padding: 20px;
  border-radius: 10px;
}
```

---

#### 🔸 Notes:
- Often used in **modals**, **overlays**, **glassmorphism**.
- Ensure the browser supports it (`backdrop-filter` is not supported in some old versions).
- For broader support, consider using:
  
```css
-webkit-backdrop-filter: blur(10px);
```

---
