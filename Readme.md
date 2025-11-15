# 📂 Accordion Component : Modern UI/UX

A beautifully animated, responsive, and minimal **Accordion Component** built using **HTML, CSS, and Vanilla JavaScript**.
This component uses advanced CSS transitions, subtle glow effects, and accessibility-friendly interactions to create a smooth and modern user experience.

---

## 🚀 Features

### ✨ Modern UI

* Soft-glass card styling
* Gradient background
* Smooth elevation on hover
* Left accent glow bar when expanded

### 🎯 Clean & Intuitive Interaction

* Click a header to expand the corresponding panel
* Automatically collapses previously opened panels
* Smooth height animation using `max-height` transition
* Chevron icon rotates on expansion

### 💡 Built with Vanilla JavaScript

* Lightweight, zero dependencies
* Event delegation for efficient performance
* Handles repeated toggling cleanly

### 📱 Fully Responsive

* Optimized for mobile and desktop
* Smooth scaling
* Reduced-motion support for accessibility

---

## 🛠️ Project Structure

```
/
├── index.html   # Main structure of the accordion
├── style.css    # Modern animations, gradients, responsive layout
└── script.js    # Accordion logic using Vanilla JS
```

---

## 📘 Usage

### 1. Clone or Download

```
git clone https://github.com/Dileep-kumawat/Accordion-Component-using-html-css-and-js.git
```

### 2. Open the project

Simply open **index.html** in a browser : no installation or build tools required.

---

## 🧩 How It Works

### ✔ HTML

Each accordion item is a `<li>` containing:

* A clickable `<h1>` heading
* A `<p>` panel that expands and collapses

### ✔ CSS

This project relies heavily on CSS transitions:

* `max-height` for smooth expand/collapse
* gradient background
* soft glow hover shadows
* `:has()` selectors for parent-based state styling
* chevron animation via `transform`

### ✔ JavaScript

A tiny script toggles the “active” state:

* Adds `.select` to the clicked header
* Removes it from all others
* Triggers CSS transitions automatically

---

## 📸 Preview


![Modal Preview](./preview.png)


---

## 🎥 Demo Video


🎬 Watch Demo: [click to watch](./demo.mp4)


---

## 🌐 Live Demo

🔗 Live Site: [https://dileep-kumawat.github.io/Accordion-Component-using-html-css-and-js/](https://dileep-kumawat.github.io/Accordion-Component-using-html-css-and-js/)



---

## 🔧 Customization

You can easily adjust:

* Accent color (`--accent`)
* Card radius (`--radius`)
* Animation speed (`--transition`)
* Max panel height (`--max-panel-height`)

All values are inside the `:root` section of `style.css` for easy editing.

---

## ♿ Accessibility

* Text-rendering optimized
* Reduced-motion support (`prefers-reduced-motion`)
* Keyboard accessibility is optional (add `tabindex="0"` to `<h1>` tags if needed)

---

## 🤝 Contributing

Feel free to submit improvements, suggestions, or pull requests if you'd like to extend the component.

---

## 🧑‍💻 Author

👤 **Dileep kumawat**
- 📧 [dileepkumawat525@gmail.com](mailto:dileepkumawat525@gmail.com)
- 🔗 [LinkedIn](https://www.linkedin.com/in/dileep-kumawat/)

---

## 📄 License

MIT License — free to use, modify, and distribute.
