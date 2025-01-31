# Melbourne Website Design - Landing Page Maintenance Guide

This guide will help you maintain and customize the Melbourne Website Design landing page. Whether you're new to web development or just getting started, follow these instructions to make updates while preserving the design integrity.

## Table of Contents
- [Updating Text and Styling](#updating-text-and-styling)
- [Managing Links](#managing-links)
- [Adding Privacy and Terms Pages](#adding-privacy-and-terms-pages)
- [Troubleshooting](#troubleshooting)

## Updating Text and Styling

### Header Section
The header contains the logo and navigation menu. To modify:

1. **Logo Text (MWD)**
```html
<a href="#" class="text-2xl font-bold text-white hover:text-blue-400 transition-colors duration-300">
    MWD
</a>
```
- Replace "MWD" with your desired text
- The `text-2xl` class controls size
- `hover:text-blue-400` creates the blue hover effect

### Hero Section
Located at the top of the page with the main headline:

```html
<h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
    Melbourne Website Design
</h1>
```
- Replace "Melbourne Website Design" with your headline
- Text sizes are responsive:
  - `text-4xl`: mobile devices
  - `md:text-5xl`: medium screens
  - `lg:text-6xl`: large screens

### Features Section
To modify feature cards:

```html
<div class="bg-gray-800 rounded-xl p-8 hover:bg-gray-750 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
    <i class="fas fa-server text-4xl text-blue-500 mb-6"></i>
    <h3 class="text-xl font-semibold mb-4">Free Hosting</h3>
    <p class="text-gray-400">Premium hosting included with every website package...</p>
</div>
```
- Change icons by updating the `fa-server` class to any [Font Awesome](https://fontawesome.com/icons) icon
- Modify heading and paragraph text as needed
- Keep the existing classes for consistent styling

## Managing Links

### Navigation Menu Links
Current navigation links are:

```html
<div class="hidden md:flex space-x-8">
    <a href="#features" class="text-gray-300 hover:text-white transition-colors duration-300">Features</a>
    <a href="#benefits" class="text-gray-300 hover:text-white transition-colors duration-300">Benefits</a>
    <a href="#faq" class="text-gray-300 hover:text-white transition-colors duration-300">FAQ</a>
    <a href="#contact" class="text-gray-300 hover:text-white transition-colors duration-300">Contact</a>
</div>
```

To update links:
1. Locate the `href` attribute
2. For internal page sections, use `#section-id`
3. For external links, use the full URL: `https://example.com`

### Call-to-Action Buttons
Update the "Get Started" and "Start Your Project" buttons:

```html
<a href="https://mwd.com" class="inline-block px-8 py-4 text-lg font-semibold bg-blue-600 text-white rounded-full hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/50">
    Start Your Project
</a>
```
- Replace `https://mwd.com` with your desired URL
- Modify button text as needed
- Maintain the existing classes for consistent styling

## Adding Privacy and Terms Pages

### Footer Link Updates
Locate the footer section:

```html
<div>
    <h4 class="text-xl font-bold mb-6">Legal</h4>
    <ul class="space-y-3 text-gray-400">
        <li><a href="#" class="hover:text-white transition-colors duration-300">Privacy Policy</a></li>
        <li><a href="#" class="hover:text-white transition-colors duration-300">Terms of Service</a></li>
    </ul>
</div>
```

To link privacy and terms pages:
1. Create `privacy.html` and `terms.html` in your project folder
2. Update the href attributes:
```html
<li><a href="privacy.html" class="hover:text-white transition-colors duration-300">Privacy Policy</a></li>
<li><a href="terms.html" class="hover:text-white transition-colors duration-300">Terms of Service</a></li>
```

## Troubleshooting

### Common Issues

1. **Broken Internal Links**
- Ensure section IDs match the href attributes
- Section IDs should not contain spaces
- Example: `href="#features"` links to `<section id="features">`

2. **Responsive Design Issues**
- Don't remove `md:` or `lg:` prefixes from classes
- These control how elements appear on different screen sizes
- Test your changes on mobile, tablet, and desktop views

3. **Icon Problems**
- Verify the Font Awesome CSS is properly loaded
- Check icon class names against the [Font Awesome website](https://fontawesome.com/icons)
- Maintain the `fas` prefix for solid icons

### Need Help?
- Check the [Tailwind CSS documentation](https://tailwindcss.com/docs) for styling options
- Validate your HTML using [W3C Validator](https://validator.w3.org/)
- Test all links after making changes
- Ensure smooth scrolling works for internal links

Remember to always backup your files before making changes, and test thoroughly across different devices and browsers.