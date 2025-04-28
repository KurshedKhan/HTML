# CSS Shadows (Box Shadow, Text Shadow) - Basic to Advanced

## 1. Box Shadow

### Basic Syntax
```css
box-shadow: offset-x offset-y blur-radius color;
```
- **offset-x**: Shadow move right (+) or left (-)
- **offset-y**: Shadow move down (+) or up (-)
- **blur-radius**: Blur effect (higher = more blur)
- **color**: Shadow color

### Example 1: Simple Shadow
```css
.box {
  width: 200px;
  height: 200px;
  background: lightblue;
  box-shadow: 10px 10px 10px gray;
}
```

## Advanced Box Shadow

### (a) Adding Spread Radius
Syntax:
```css
box-shadow: offset-x offset-y blur-radius spread-radius color;
```
- **spread-radius**: Grows/shrinks the shadow

Example:
```css
.box {
  box-shadow: 10px 10px 20px 5px rgba(0, 0, 0, 0.5);
}
```

### (b) Inset Shadow
```css
.box {
  box-shadow: inset 5px 5px 10px gray;
}
```

### (c) Multiple Shadows
```css
.box {
  box-shadow: 5px 5px 10px red, -5px -5px 10px blue;
}
```

---

## 2. Text Shadow

### Basic Syntax
```css
text-shadow: offset-x offset-y blur-radius color;
```

### Example 5: Simple Text Shadow
```css
.heading {
  text-shadow: 2px 2px 5px gray;
}
```

### (a) Multiple Text Shadows
```css
.heading {
  text-shadow: 2px 2px 5px red, -2px -2px 5px blue;
}
```

### (b) Glow Effect
```css
.heading {
  color: white;
  text-shadow: 0 0 10px #00ff00, 0 0 20px #00ff00;
}
```

---

## 3. Pro Tips (Advanced Tricks)

- **Transparent Shadow**
  ```css
  box-shadow: 0 4px 6px rgba(0,0,0,0.3);
  ```

- **Neumorphism Effect**
  ```css
  box-shadow: 10px 10px 20px #d1d9e6, -10px -10px 20px #ffffff;
  ```

- **Hover Shadow Change**
  ```css
  .box:hover {
    box-shadow: 0px 0px 20px #ff00ff;
  }
  ```

---

## 4. Summary Table

| Feature         | Box Shadow                  | Text Shadow                 |
|-----------------|------------------------------|------------------------------|
| Syntax          | box-shadow: x y blur spread color; | text-shadow: x y blur color; |
| Inset allowed?  | Yes (with inset)             | No                           |
| Multiple allowed? | Yes (comma separated)      | Yes (comma separated)        |
| Used for        | Div, Image, Card, Button etc. | Heading, Text etc.           |

---

# 🌟 Bonus Tip
**Use rgba() for soft and realistic shadows!**

