# CSS Transforms (2D & 3D) - Notes

## 🧭 Introduction
CSS transforms allow you to visually manipulate an element by skewing, rotating, translating, or scaling it. Transforms can be **2D** or **3D**.

---

## ✅ Syntax

```css
transform: <transform-function>;
````

Multiple functions can be combined:

```css
transform: rotate(45deg) scale(1.5);
```

---

## 📌 2D Transforms

2D transforms affect the X and Y axes only.

### 1. `translate(x, y)`

Moves the element from its current position.

```css
transform: translate(50px, 100px);
```

### 2. `rotate(angle)`

Rotates the element around its origin.

```css
transform: rotate(45deg);
```

### 3. `scale(x, y)`

Scales the element in X and Y direction.

```css
transform: scale(2, 1.5);
```

### 4. `skew(x-angle, y-angle)`

Skews the element along X and Y axes.

```css
transform: skew(30deg, 10deg);
```

### 5. `matrix(a, b, c, d, e, f)`

Combines all 2D transforms in one.

```css
transform: matrix(1, 0.5, -0.5, 1, 0, 0);
```

---

## 🌐 3D Transforms

Enable deeper transformations along the Z-axis.

### 🔧 Required: `transform-style` and `perspective`

```css
transform-style: preserve-3d;
perspective: 1000px;
```

---

### 1. `translateZ(z)`

Moves an element closer or farther on Z-axis.

```css
transform: translateZ(100px);
```

### 2. `rotateX(angle)` / `rotateY(angle)` / `rotateZ(angle)`

Rotates the element around respective axes.

```css
transform: rotateX(45deg);
```

### 3. `scaleZ(z)`

Scales the element along Z-axis.

```css
transform: scaleZ(2);
```

### 4. `perspective(n)`

Gives the illusion of depth.

```css
perspective: 800px;
```

Can be applied to parent or combined:

```css
transform: perspective(800px) rotateX(30deg);
```

---

## 🎯 Combining Transforms

```css
transform: rotate(45deg) translateX(100px) scale(1.2);
```

Order matters!

---

## 🧪 Advanced Topics

### 🔁 `transform-origin`

Changes the pivot point.

```css
transform-origin: top left;
```

### 🧩 `backface-visibility`

Controls whether the back of the element is visible during 3D transformations.

```css
backface-visibility: hidden;
```

---

## 🧠 Best Practices

* Use `transform` instead of `top`, `left` for performance.
* Combine `transform` and `transition` for animations.
* Always define a `transform-origin` for complex animations.

---

## 📘 References

* [MDN: CSS Transforms](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)
* [CSS Tricks - 3D Transforms](https://css-tricks.com/almanac/properties/t/transform/)

---