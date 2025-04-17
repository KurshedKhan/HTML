# Flexbox Layout in CSS - From Basic to Advanced

## Introduction
Flexbox (Flexible Box Layout) is a one-dimensional layout method for laying out items in rows or columns. It is part of the CSS3 standard and makes it easier to design flexible and efficient layouts.

---

## 1. Flex Container and Flex Items

### Declaring a Flex Container
To start using Flexbox, set the `display` property of the container to `flex` or `inline-flex`:
```css
.container {
  display: flex; /* or inline-flex */
}
```

### Flex Items
The direct children of the flex container become flex items.

---

## 2. Main Axis and Cross Axis
- **Main Axis**: The primary axis of layout (horizontal by default).
- **Cross Axis**: Perpendicular to the main axis.

The direction of the main axis is determined by `flex-direction`.

---

## 3. Flex Container Properties

### `flex-direction`
Defines the direction of the main axis.
```css
flex-direction: row | row-reverse | column | column-reverse;
```

### `flex-wrap`
Specifies whether flex items should wrap.
```css
flex-wrap: nowrap | wrap | wrap-reverse;
```

### `flex-flow`
Shorthand for `flex-direction` and `flex-wrap`.
```css
flex-flow: row wrap;
```

### `justify-content`
Aligns items along the main axis.
```css
justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly;
```

### `align-items`
Aligns items along the cross axis.
```css
align-items: stretch | flex-start | flex-end | center | baseline;
```

### `align-content`
Aligns lines of flex items when there's extra space on the cross axis.
```css
align-content: stretch | flex-start | flex-end | center | space-between | space-around;
```

---

## 4. Flex Item Properties

### `order`
Controls the order of items.
```css
.item {
  order: 2;
}
```

### `flex-grow`
Defines how much a flex item grows relative to others.
```css
.item {
  flex-grow: 1;
}
```

### `flex-shrink`
Defines how a flex item shrinks.
```css
.item {
  flex-shrink: 1;
}
```

### `flex-basis`
Defines the initial main size of a flex item.
```css
.item {
  flex-basis: 100px;
}
```

### `flex`
Shorthand for `flex-grow`, `flex-shrink`, and `flex-basis`.
```css
.item {
  flex: 1 0 100px;
}
```

### `align-self`
Overrides `align-items` for a specific item.
```css
.item {
  align-self: center;
}
```

---

## 5. Examples

### Example 1: Basic Layout
```html
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
```
```css
.container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 200px;
  border: 1px solid #000;
}

.item {
  width: 50px;
  height: 50px;
  background: lightblue;
  text-align: center;
  line-height: 50px;
}
```

### Example 2: Responsive Wrap
```css
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.item {
  flex: 1 1 200px;
  background: coral;
  padding: 20px;
  color: white;
  text-align: center;
}
```

---

## 6. Tips and Tricks
- Use `gap` instead of margins for consistent spacing.
- Combine `flex` with media queries for responsive design.
- Use `min-width`, `max-width` with `flex-basis` for better control.

---

## Conclusion
Flexbox is a powerful layout system ideal for components, navigation, and responsive design. It simplifies common layout tasks and gives precise control over alignment and spacing.

