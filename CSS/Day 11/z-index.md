The `z-index` property in CSS controls the **stacking order** of elements on a web page along the **z-axis** (which is perpendicular to the screen).

### 🔹 Syntax:
```css
element {
  z-index: value;
}
```

### 🔹 Values:
- `auto` – Default value; the element does not get a new stacking order.
- Integer (`1`, `10`, `100`, `-1`, etc.) – A higher value means the element is placed **in front** of elements with lower values.
- Negative values are allowed (e.g., `z-index: -1`) – these elements go behind others.

### 🔹 Important Notes:
1. `z-index` **only works on positioned elements**:
   - Elements with `position: relative`, `absolute`, `fixed`, or `sticky`.
2. Higher `z-index` = closer to the viewer.

### 🔹 Example:
```html
<div style="position: absolute; z-index: 2; background: red;">Red Box</div>
<div style="position: absolute; z-index: 1; background: blue;">Blue Box</div>
```
> In this case, the **Red Box** will appear **on top** of the **Blue Box**.