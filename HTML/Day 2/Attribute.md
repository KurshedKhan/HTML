# HTML Attributes (Basic to Advanced)

## 1. Introduction
HTML attributes provide additional information about an element. They are always included in the opening tag and usually come in key-value pairs.

### Example:
```html
<a href="https://example.com">Visit Example</a>
```
Here, `href` is an attribute that specifies the URL.

---

## 2. Common HTML Attributes
### 2.1. `id` Attribute
- Uniquely identifies an element.
- Used for JavaScript and CSS.

```html
<p id="unique">This is a paragraph with an ID.</p>
```

### 2.2. `class` Attribute
- Groups elements for styling or scripting.

```html
<p class="highlight">This is a highlighted paragraph.</p>
```

### 2.3. `style` Attribute
- Adds inline CSS.

```html
<p style="color: red; font-size: 20px;">Styled paragraph</p>
```

### 2.4. `title` Attribute
- Provides additional information as a tooltip.

```html
<p title="This is a tooltip">Hover over me</p>
```

### 2.5. `alt` Attribute (for Images)
- Provides alternative text if the image cannot be displayed.

```html
<img src="image.jpg" alt="Description of image">
```

---

## 3. Form-Related Attributes
### 3.1. `placeholder` (for Input Fields)
- Displays hint text inside input fields.

```html
<input type="text" placeholder="Enter your name">
```

### 3.2. `required`
- Makes a field mandatory.

```html
<input type="email" required>
```

### 3.3. `disabled`
- Disables an input field.

```html
<input type="text" disabled>
```

### 3.4. `readonly`
- Makes a field read-only.

```html
<input type="text" value="Fixed Text" readonly>
```

### 3.5. `maxlength`
- Limits the number of characters.

```html
<input type="text" maxlength="10">
```

---

## 4. Event Attributes
Event attributes trigger JavaScript code when a specific event occurs.

### 4.1. `onclick`
```html
<button onclick="alert('Button Clicked!')">Click Me</button>
```

### 4.2. `onmouseover`
```html
<p onmouseover="this.style.color='blue'">Hover over me</p>
```

---

## 5. Global Attributes (Can be used on most HTML elements)
| Attribute  | Description |
|------------|-------------|
| `id`       | Unique identifier |
| `class`    | Defines a class name for CSS and JS |
| `style`    | Inline CSS styling |
| `title`    | Tooltip text |
| `hidden`   | Hides an element |
| `contenteditable` | Makes an element editable |
| `draggable` | Enables drag-and-drop |

Example:
```html
<p contenteditable="true">You can edit this text!</p>
```

---

## 6. Conclusion
- HTML attributes enhance elements with extra functionalities.
- Some attributes are specific to elements, while others are global.
- They are essential for styling, interactivity, and accessibility.
