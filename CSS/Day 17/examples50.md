# 50 CSS Transform Examples (2D + 3D)

## 📦 2D Transform Examples

### 🔄 Translate
1. Slide button on hover: `transform: translateX(10px);`
2. Move tooltip up: `transform: translateY(-100%);`
3. Dropdown slide down: `transform: translateY(20px);`
4. Side menu show: `transform: translateX(-100%);`
5. Slide image on scroll: `transform: translate(0, -50px);`

### 🔁 Rotate
6. Rotate refresh icon: `transform: rotate(360deg);`
7. Turn arrow on dropdown: `transform: rotate(180deg);`
8. Rotate image slightly for effect: `transform: rotate(-5deg);`
9. Compass needle rotation: `transform: rotate(45deg);`
10. Rotate clock hands: `transform: rotate(90deg);`

### 🔍 Scale
11. Zoom image on hover: `transform: scale(1.1);`
12. Shrink button on click: `transform: scale(0.95);`
13. Scale icon on active state: `transform: scale(1.2);`
14. Pulse animation: `transform: scale(1.1);`
15. Emphasize card on hover: `transform: scale(1.05);`

### 🔶 Skew
16. Skew banner for dynamic look: `transform: skew(-10deg);`
17. Skew heading text: `transform: skewX(15deg);`
18. Skew card for a stylish tilt: `transform: skewY(5deg);`
19. Creative skewed image effect: `transform: skew(10deg, 5deg);`
20. Skew loader bar: `transform: skewX(-20deg);`

### 🧮 Matrix
21. Combined rotate and scale: `transform: matrix(1, 0.3, 0.2, 1, 0, 0);`
22. Custom 2D animation math: `transform: matrix(0.8, 0.3, -0.3, 0.8, 50, 100);`

---

## 🌐 3D Transform Examples

### 📦 translateZ
23. Popup depth effect: `transform: translateZ(50px);`
24. Move card into scene: `transform: translateZ(200px);`

### 🔁 rotateX / rotateY / rotateZ
25. Flip card front: `transform: rotateY(180deg);`
26. Flip vertically: `transform: rotateX(180deg);`
27. Tilt phone preview: `transform: rotateX(20deg);`
28. Rotate 3D cube: `transform: rotateX(45deg) rotateY(45deg);`
29. Loading spinner 3D: `transform: rotateZ(360deg);`

### 🔎 scaleZ
30. 3D popup scale: `transform: scaleZ(2);`
31. Compress in Z-axis: `transform: scaleZ(0.5);`

### 🧊 perspective
32. 3D flip with perspective:
```css
perspective: 1000px;
transform: rotateY(180deg);
````

33. Page turn effect:

```css
perspective: 800px;
transform: rotateY(-90deg);
```

---

## 🧪 Real-World UI Examples

### 🧰 UI Components

34. Modal popup: `transform: scale(1.2) translateY(-50px);`
35. Notification bounce in: `transform: translateY(0);`
36. Navigation bar slide in: `transform: translateY(0);`
37. Hamburger to X icon: `transform: rotate(45deg);`
38. Tab indicator slide: `transform: translateX(100%);`

### 📷 Image / Media

39. Image hover zoom: `transform: scale(1.05);`
40. Gallery lightbox open: `transform: scale(1.1) rotate(2deg);`
41. Image float: `transform: translateY(-10px);`
42. Product rotation preview: `transform: rotateY(360deg);`

### 🃏 Cards / Blocks

43. Card hover rise: `transform: translateY(-5px);`
44. Card 3D flip: `transform: rotateY(180deg);`
45. Card zoom & rotate: `transform: scale(1.1) rotate(2deg);`

### 🌀 Animations

46. Loader rotate: `transform: rotate(360deg);`
47. Pulse button: `transform: scale(1.1);`
48. Bouncing ball: `transform: translateY(-50px);`
49. Flip text effect: `transform: rotateX(90deg);`
50. 3D cube loader: `transform: rotateX(360deg) rotateY(360deg);`

---

## 📝 Tip:

To animate these, use `transition` or `@keyframes`:

```css
transition: transform 0.3s ease-in-out;
```

Or use:

```css
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
```

---

## 📚 Resources

* [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)
* [CSS Tricks Guide](https://css-tricks.com/almanac/properties/t/transform/)

```
