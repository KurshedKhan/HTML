## 🎨 CSS Transitions - Explained with Examples

CSS Transitions allow changes in CSS properties to occur smoothly over a specified duration.

### 🧠 Syntax

```css
selector {
  transition: property duration timing-function delay;
}
```

### ✅ Common Properties that can be transitioned:

* `width`, `height`
* `background-color`
* `opacity`
* `transform`
* `color`
* `margin`, `padding`

---

## 📘 Basic Example: Button Hover

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    .btn {
      background-color: blue;
      color: white;
      padding: 10px 20px;
      transition: background-color 0.5s;
    }

    .btn:hover {
      background-color: green;
    }
  </style>
</head>
<body>
  <button class="btn">Hover Me</button>
</body>
</html>
```

---

## 🌀 Multiple Properties Example

```css
.box {
  width: 100px;
  height: 100px;
  background-color: red;
  transition: width 1s ease-in, background-color 1s ease-out;
}

.box:hover {
  width: 200px;
  background-color: yellow;
}
```

---

## ⏱ With Delay and Custom Timing

```css
.card {
  opacity: 0.5;
  transition: opacity 2s ease-in-out 1s;
}

.card:hover {
  opacity: 1;
}
```

---

## 🔄 Transition with Transform

```css
.square {
  width: 100px;
  height: 100px;
  background: purple;
  transition: transform 0.4s ease;
}

.square:hover {
  transform: rotate(45deg);
}
```

---

## 🧩 Transition Shorthand vs Longhand

### ✅ Shorthand:

```css
transition: all 0.5s ease-in;
```

### 🧾 Longhand:

```css
transition-property: all;
transition-duration: 0.5s;
transition-timing-function: ease-in;
transition-delay: 0s;
```

---

## 🧪 Tips

* Not all CSS properties can be transitioned (e.g., `display`).
* Combine with `:hover`, `:focus`, or JS-triggered classes for interactivity.
* Use dev tools to debug timing.

---
