# CSS Selectors Notes (Basic to Advanced)

---

## 🔰 1. Basic Selectors

### ✅ Universal Selector
```css
* {
  margin: 0;
  padding: 0;
}
```
- Targets all HTML elements.

### ✅ Element Selector
```css
p {
  color: blue;
}
```
- Targets all `<p>` elements.

### ✅ Class Selector
```css
.box {
  background: yellow;
}
```
- Targets elements with `class="box"`.

### ✅ ID Selector
```css
#main {
  padding: 10px;
}
```
- Targets the element with `id="main"`.

---

## 🧩 2. Grouping and Nesting Selectors

### ✅ Grouping Selector
```css
h1, h2, p {
  font-family: Arial;
}
```
- Applies style to multiple elements.

### ✅ Nesting Selector (Hierarchy)
```css
nav ul li {
  list-style: none;
}
```
- Targets `li` inside `ul` inside `nav`.

---

## 🎯 3. Combinators

### ✅ Descendant Selector (space)
```css
div p {
  color: red;
}
```
- Targets all `p` inside `div`.

### ✅ Child Selector (>)
```css
ul > li {
  color: green;
}
```
- Targets direct `li` children of `ul`.

### ✅ Adjacent Sibling (+)
```css
h1 + p {
  font-style: italic;
}
```
- Targets `p` immediately after `h1`.

### ✅ General Sibling (~)
```css
h1 ~ p {
  color: orange;
}
```
- Targets all `p` siblings after `h1`.

---

## ✨ 4. Pseudo-classes
```css
a:hover {
  color: red;
}
li:first-child {
  font-weight: bold;
}
input:focus {
  border: 2px solid blue;
}
```
- Style based on element states.

**Popular pseudo-classes:**
- `:hover`, `:focus`, `:visited`, `:nth-child()`, `:first-child`, `:last-child`, `:not()`

---

## 🌟 5. Pseudo-elements
```css
p::first-line {
  color: green;
}
h1::before {
  content: "🔥 ";
}
```
- Style specific parts of an element.

**Popular pseudo-elements:**
- `::before`, `::after`, `::first-letter`, `::first-line`, `::selection`

---

## 📎 6. Attribute Selectors
```css
input[type="text"] {
  border: 1px solid gray;
}
a[target="_blank"] {
  color: purple;
}
```
- Targets elements by their attributes.

**Variants:**
- `[attr]`
- `[attr=value]`
- `[attr^=val]` (starts with)
- `[attr$=val]` (ends with)
- `[attr*=val]` (contains)

