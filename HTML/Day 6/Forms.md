# **HTML Forms & Input Tags**

Forms in HTML are used to collect user input. The `<form>` element is a container for input elements such as text fields, checkboxes, radio buttons, submit buttons, etc.

## **1️⃣ HTML `<form>` Element**
The `<form>` tag defines an HTML form used to collect user input.

🔹 **Syntax:**
```html
<form action="submit-form.php" method="post">
  <!-- Form elements go here -->
</form>
```

🔹 **Attributes:**
- `action`: URL where form data is sent.
- `method`: HTTP method (`GET` or `POST`).
- `target`: Specifies where to display response (`_self`, `_blank`).
- `autocomplete`: Enables or disables auto-completion (`on`, `off`).

---

## **2️⃣ HTML Input Elements**
The `<input>` tag is used to create various types of input fields.

### **🔹 Text Input (`type="text"`)**
Creates a single-line text field for user input.
```html
<input type="text" name="username" placeholder="Enter your name" required>
```

### **🔹 Password Input (`type="password"`)**
Creates a password field where input is masked.
```html
<input type="password" name="password" placeholder="Enter your password" required>
```

### **🔹 Email Input (`type="email"`)**
Validates email input before submission.
```html
<input type="email" name="email" placeholder="Enter your email" required>
```

### **🔹 Number Input (`type="number"`)**
Allows only numeric values.
```html
<input type="number" name="age" min="1" max="100">
```

### **🔹 Date Input (`type="date"`)**
Allows users to select a date.
```html
<input type="date" name="dob">
```

### **🔹 Radio Buttons (`type="radio"`)**
Allows users to select **one option** from multiple choices.
```html
<input type="radio" name="gender" value="male"> Male
<input type="radio" name="gender" value="female"> Female
```

### **🔹 Checkboxes (`type="checkbox"`)**
Allows users to select **multiple options**.
```html
<input type="checkbox" name="hobby" value="reading"> Reading
<input type="checkbox" name="hobby" value="traveling"> Traveling
```

### **🔹 File Upload (`type="file"`)**
Allows users to upload a file.
```html
<input type="file" name="profile_pic">
```

### **🔹 Submit Button (`type="submit"`)**
Sends the form data to the server.
```html
<input type="submit" value="Submit">
```

### **🔹 Reset Button (`type="reset"`)**
Resets all form fields to their default values.
```html
<input type="reset" value="Reset">
```

### **🔹 Button (`type="button"`)**
A clickable button that can execute JavaScript functions.
```html
<button type="button" onclick="alert('Button Clicked!')">Click Me</button>
```

---

## **3️⃣ HTML `<textarea>` Element**
A multi-line text input field.
```html
<textarea name="message" rows="4" cols="50" placeholder="Enter your message..."></textarea>
```

---

## **4️⃣ HTML `<select>` & `<option>` Elements**
Creates a dropdown list.
```html
<select name="country">
  <option value="india">India</option>
  <option value="usa">USA</option>
  <option value="uk">UK</option>
</select>
```

---

## **5️⃣ HTML Form Validation Attributes**
| Attribute  | Description |
|------------|------------|
| `required` | Ensures the field is not empty. |
| `min` & `max` | Defines min & max values for number/date inputs. |
| `maxlength` | Limits number of characters. |
| `pattern` | Defines a regex pattern for validation. |

🔹 **Example of Validation:**
```html
<input type="text" name="username" required minlength="3" maxlength="15">
```

---

## **✅ Summary Table of Input Types**

| Input Type | Description | Example |
|------------|------------|---------|
| `text` | Single-line text input | `<input type="text">` |
| `password` | Password field | `<input type="password">` |
| `email` | Email validation | `<input type="email">` |
| `number` | Numeric input | `<input type="number">` |
| `date` | Date selector | `<input type="date">` |
| `radio` | Select one option | `<input type="radio">` |
| `checkbox` | Select multiple options | `<input type="checkbox">` |
| `file` | Upload a file | `<input type="file">` |
| `submit` | Submit button | `<input type="submit">` |
| `reset` | Reset button | `<input type="reset">` |
| `button` | Clickable button | `<button>Click Me</button>` |

---

✅ **Use these HTML form and input elements to collect user data efficiently! 🚀**

