# CSS Animation Notes (Basic to Advanced)

## 📌 Introduction
CSS animations allow the transition between CSS styles over a period of time.

---

## 🧱 Basic Concepts

### 1. `transition`
Used for simple state changes.

```css
.box {
  transition: all 0.3s ease;
}
````

* **Properties**: `transition-property`, `transition-duration`, `transition-timing-function`, `transition-delay`

### 2. `:hover` Example

```css
.button {
  background: blue;
  transition: background 0.3s ease;
}
.button:hover {
  background: red;
}
```

---

## 🎞️ Keyframes Animation

### 3. `@keyframes`

Define stages of animation.

```css
@keyframes slideIn {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}

.box {
  animation: slideIn 1s ease-in-out forwards;
}
```

### Properties

* `animation-name`
* `animation-duration`
* `animation-delay`
* `animation-iteration-count`
* `animation-direction`
* `animation-fill-mode`
* `animation-timing-function`
* `animation-play-state`

---

## ⚙️ Animation Shorthand

```css
animation: slideIn 1s ease-in-out 0s 1 normal forwards;
```

Order:

1. `name`
2. `duration`
3. `timing-function`
4. `delay`
5. `iteration-count`
6. `direction`
7. `fill-mode`

---

## 🔁 Looping Animations

```css
.blink {
  animation: blink 1s infinite alternate;
}
@keyframes blink {
  from { opacity: 1; }
  to { opacity: 0; }
}
```

---

## 🧭 Animation Directions

* `normal`
* `reverse`
* `alternate`
* `alternate-reverse`

```css
animation-direction: alternate;
```

---

## 🧱 Fill Modes

* `none` (default)
* `forwards`
* `backwards`
* `both`

```css
animation-fill-mode: forwards;
```

---

## ⏯️ Control Animation

```css
animation-play-state: paused | running;
```

---

## 📦 Real-World Examples

### 1. Bouncing Ball

```css
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-100px); }
}
.ball {
  animation: bounce 1s infinite ease-in-out;
}
```

### 2. Loader Spinner

```css
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
.spinner {
  animation: spin 1s linear infinite;
}
```

### 3. Fade In

```css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
.fade {
  animation: fadeIn 2s ease forwards;
}
```

---

## ⚠️ Performance Tips

* Prefer `transform` and `opacity` over `top`, `left`, etc.
* Avoid animating large images or complex DOM nodes.

---

## 🧠 Advanced Tricks

### Animation Delay Staggering

```css
.item:nth-child(1) { animation-delay: 0s; }
.item:nth-child(2) { animation-delay: 0.2s; }
.item:nth-child(3) { animation-delay: 0.4s; }
```

### Animate with Variables

```css
:root {
  --duration: 1s;
}
.box {
  animation: fadeIn var(--duration) ease;
}
```

---

## 📚 Tools & Libraries

* [Animate.css](https://animate.style)
* [GSAP](https://greensock.com/gsap/)

---

## ✅ Summary Checklist

* [x] Understand `transition` basics
* [x] Master `@keyframes`
* [x] Use `animation` shorthand
* [x] Control with direction, delay, and fill-mode
* [x] Use performance-friendly properties
* [x] Create real-world animation effects

---

## 📎 Resources

* [MDN CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations)
* [CSS Tricks Animation Guide](https://css-tricks.com/almanac/properties/a/animation/)

---

