# CSS Gradients (Linear, Radial) - Basic to Advanced

## 1. Introduction to Gradients
Gradients create a smooth transition between two or more colors without needing any image.

---

## 2. Linear Gradients

### Basic Syntax
```css
background: linear-gradient(direction, color-stop1, color-stop2, ...);
```

- **direction**: The direction of the gradient (top, bottom, left, right, angle).
- **color-stops**: Colors where the gradient should start/stop.

### Example 1: Top to Bottom Gradient
```css
.box {
  background: linear-gradient(to bottom, red, yellow);
}
```

### Example 2: Left to Right Gradient
```css
.box {
  background: linear-gradient(to right, blue, pink);
}
```

### Example 3: Custom Angle Gradient
```css
.box {
  background: linear-gradient(45deg, green, orange);
}
```

### Example 4: Multiple Color Stops
```css
.box {
  background: linear-gradient(to right, red, yellow, green, blue);
}
```

### Example 5: Hard Color Stops (Sharp transitions)
```css
.box {
  background: linear-gradient(to right, red 0%, red 50%, blue 50%, blue 100%);
}
```

---

## 3. Radial Gradients

### Basic Syntax
```css
background: radial-gradient(shape size at position, start-color, ..., last-color);
```

- **shape**: circle (default) or ellipse
- **size**: closest-side, farthest-corner, etc.
- **position**: center, top left, bottom right, etc.

### Example 6: Default Radial Gradient (circle)
```css
.box {
  background: radial-gradient(red, yellow, green);
}
```

### Example 7: Ellipse Shape
```css
.box {
  background: radial-gradient(ellipse at center, red, yellow, green);
}
```

### Example 8: Positioning the Gradient
```css
.box {
  background: radial-gradient(circle at top left, red, yellow, blue);
}
```

---

## 4. Advanced Techniques

### (a) Repeating Linear Gradient
```css
.box {
  background: repeating-linear-gradient(
    45deg,
    black,
    black 10px,
    white 10px,
    white 20px
  );
}
```

### (b) Repeating Radial Gradient
```css
.box {
  background: repeating-radial-gradient(
    circle,
    red,
    red 10px,
    blue 10px,
    blue 20px
  );
}
```

### (c) Transparent Gradients
```css
.box {
  background: linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1));
}
```

### (d) Combining Gradients with Images
```css
.box {
  background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('background.jpg');
  background-size: cover;
}
```

---

## 5. Tips and Best Practices

- Use `background-size` to control the repetition of gradients.
- Combine gradients with images for stylish overlays.
- Use tools like CSS Gradient Generators for complex gradients.

---

## 6. Summary Table

| Feature              | Linear Gradient                 | Radial Gradient                   |
|----------------------|----------------------------------|------------------------------------|
| Direction/Shape      | Left-Right, Top-Bottom, Angle    | Circle, Ellipse                   |
| Positioning          | Direction keywords or angle     | Position (center, top left, etc.)  |
| Repeating Allowed?   | Yes (repeating-linear-gradient)  | Yes (repeating-radial-gradient)    |
| Use Cases            | Backgrounds, Buttons, Borders    | Backgrounds, Spotlight effects    |

---

# 🌟 Bonus Tip
**Use transparent gradients for modern UI/UX designs!**

