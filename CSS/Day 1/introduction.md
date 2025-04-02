# CSS Basics for Web Development

## Introduction to CSS
CSS (Cascading Style Sheets) is a stylesheet language used to style HTML documents. It helps control the layout, colors, fonts, and other design elements of web pages.

## Why Use CSS?
- To style HTML content
- To manage web page layout
- For responsive design
- To optimize pages for different devices and screen sizes

## Types of CSS
1. **Inline CSS**: Written inside the `style` attribute of an HTML tag.
   ```html
   <p style="color: blue; font-size: 16px;">This is a paragraph.</p>
   ```
2. **Internal CSS**: Written inside the `<style>` tag in the `<head>` section of an HTML document.
   ```html
   <style>
       p {
           color: blue;
           font-size: 16px;
       }
   </style>
   ```
3. **External CSS**: Stored in a separate `.css` file and linked using the `<link>` tag.
   ```html
   <link rel="stylesheet" href="styles.css">
   ```

## Basic CSS Syntax
```css
selector {
    property: value;
}
```
Example:
```css
body {
    background-color: lightgray;
    font-family: Arial, sans-serif;
}
h1 {
    color: blue;
    text-align: center;
}
```

## Commonly Used CSS Properties
- **Color & Background:** `color`, `background-color`
- **Text Styling:** `font-size`, `font-family`, `text-align`
- **Box Model:** `margin`, `padding`, `border`
- **Layout & Positioning:** `display`, `position`, `flex`, `grid`

## CSS Selectors
1. **Universal Selector (`*`)**
   ```css
   * {
       margin: 0;
       padding: 0;
   }
   ```
2. **Element Selector**
   ```css
   p {
       color: green;
   }
   ```
3. **Class Selector (`.`)**
   ```css
   .my-class {
       font-weight: bold;
   }
   ```
4. **ID Selector (`#`)**
   ```css
   #my-id {
       text-align: center;
   }
   ```
5. **Group Selector (``,` `)**
   ```css
   h1, h2, h3 {
       color: red;
   }
   ```

## Responsive Design Basics
- **Media Queries:**
  ```css
  @media (max-width: 600px) {
      body {
          background-color: yellow;
      }
  }
  ```
- **Flexbox:**
  ```css
  .container {
      display: flex;
      justify-content: center;
  }
  ```
- **Grid Layout:**
  ```css
  .grid-container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
  }
  ```

## Conclusion
CSS is a crucial technology for web design and layout control. It helps style HTML, create responsive pages, and enhance user experience.