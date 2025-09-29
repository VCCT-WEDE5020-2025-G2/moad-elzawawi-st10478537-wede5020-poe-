## Table of Contents
1. [Project Overview](#project-overview)
2. [Part 2 Implementation](#part-2-implementation)
3. [Features Implemented](#features-implemented)
4. [Technical Specifications](#technical-specifications)
5. [Responsive Design](#responsive-design)
6. [File Structure](#file-structure)
7. [Changelog](#changelog)
8. [How to Run](#how-to-run)
9. [References](#references)

---

## Project Overview

The Cape Hope Foundation website is a comprehensive platform designed to showcase the organization's mission of providing food security and educational support to underprivileged children in Cape Town. This project demonstrates modern web design principles, responsive layouts, and accessibility standards.

**Mission Statement:**  
To provide food security and educational support to underprivileged children, empowering them to break the cycle of poverty through education and community support.

---

## Part 2 Implementation

Part 2 focuses on CSS styling and responsive design implementation, transforming the HTML structure from Part 1 into a fully-styled, modern, and responsive website.

### Learning Outcomes Achieved:
- Created an external CSS stylesheet linked to all pages
- Implemented appropriate selectors for styling web page elements
- Applied decorative, typographic, and layout styling for desktop solutions
- Utilized CSS cascading principles with minimal selectors
- Used browser developer tools for CSS development
- Implemented responsive styling using relative values, media queries, and breakpoints
- Optimized images for different screen sizes
- Tested website across multiple devices and screen sizes

---

## Features Implemented

### 1. Modern Design System
- **Color Palette:** Gradient-based design with purple/violet primary colors (#667eea to #764ba2)
- **Typography:** Responsive font sizing using CSS clamp() function
- **Glass Morphism:** Transparent, frosted glass effects on stat cards
- **Smooth Animations:** Fade-ins, slides, rotations, and hover effects throughout

### 2. Component Styling

#### Header & Navigation
- Sticky navigation with backdrop blur effect
- Smooth hover animations on navigation links
- Active page indicator with gradient background
- Logo rotation animation on hover

#### Buttons
- Three button variants: Primary, Secondary, and Tertiary
- Gradient backgrounds with shine animation effects
- Hover states with elevation and shadow changes
- Full-width responsive behavior on mobile

#### Cards
- Uniform card design across all pages
- Hover effects with elevation transitions
- Gradient accent bars on top of cards
- Image zoom effects on hover

#### Forms
- Modern input styling with focus states
- Custom checkbox and radio button styling
- Clear validation feedback
- Responsive multi-column layouts

### 3. Page-Specific Styling

#### Home Page (index.html)
- Hero section with animated gradient background
- Impact statistics with glass morphism cards
- Campaign cards with image hover effects
- Success story preview sections

#### About Page (about.html)
- Timeline layout for organization history
- Team member cards with profile photos
- Mission, Vision, Values grid layout
- Recognition and awards section

#### Programmes Page (Programmes.html)
- Alternating left-right content layout
- Programme impact metrics display
- Interactive hover states on programme cards
- Community involvement sections

#### Enquiry Page (enquiry.html)
- Multi-section volunteer application form
- Sponsorship tier comparison cards
- Checkbox and radio button groups
- Form validation styling

#### Contact Page (contact.html)
- Donation impact examples grid
- Contact information layout
- Office locations display
- Integrated map styling (placeholder)

### 4. Responsive Design Implementation

#### Desktop (1280px+)
- Multi-column grid layouts
- Full navigation menu
- Large hero images
- 4-column stat grids

#### Tablet (768px - 1279px)
- 2-column layouts
- Wrapped navigation
- Adjusted spacing
- 2-column stat grids

#### Mobile (< 768px)
- Single column layouts
- Stacked navigation
- Full-width buttons
- Single column grids
- Optimized touch targets

---

## Technical Specifications

### CSS Architecture

#### CSS Variables (Custom Properties)
```css
:root {
    --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --spacing-xs: 0.5rem;
    --spacing-sm: 1rem;
    --spacing-md: 1.5rem;
    --radius-lg: 20px;
    --shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.15);
}
```

#### Responsive Typography
- Uses CSS `clamp()` for fluid typography
- Font sizes scale automatically between min and max values
- Example: `font-size: clamp(2rem, 5vw, 3.5rem);`

#### Relative Units
- **rem:** Used for font sizes and spacing (relative to root element)
- **em:** Used for component-specific spacing
- **%:** Used for widths and responsive layouts
- **vw/vh:** Used for viewport-relative sizing

#### CSS Grid
- Used for page layouts and card grids
- `repeat(auto-fit, minmax(250px, 1fr))` for responsive grids
- Gap property for consistent spacing

#### Flexbox
- Used for navigation menus
- Button groups and form layouts
- Footer content distribution

### Media Queries

```css
/* Tablet Breakpoint */
@media (max-width: 768px) {
    /* Tablet-specific styles */
}

/* Mobile Breakpoint */
@media (max-width: 480px) {
    /* Mobile-specific styles */
}
```

### Animations & Transitions

#### Keyframe Animations
- `slideInLeft` - Logo animation on page load
- `fadeInUp` - Hero content entrance
- `pulse` - Background decoration animation
- `rotate` - Continuous rotation for decorative elements
- `gridMove` - Animated grid pattern

#### Transitions
- Fast: 0.15s cubic-bezier(0.4, 0, 0.2, 1)
- Base: 0.3s cubic-bezier(0.4, 0, 0.2, 1)
- Slow: 0.5s cubic-bezier(0.4, 0, 0.2, 1)

### Accessibility Features
- Focus visible states for keyboard navigation
- Screen reader only class (.sr-only)
- Proper color contrast ratios
- Semantic HTML structure
- ARIA attributes where necessary

---

## File Structure

```
wede moad elzwawi/
│
├── index.html                  # Home page
├── about.html                  # About page
├── Programmes.html             # Programmes page
├── enquiry.html                # Get Involved page
├── contact.html                # Contact & Donate page
│
├── css/
│   └── styles.css              # Main stylesheet (Part 2)
│
├── js/
│   └── scripts.js              # JavaScript functionality
│
├── images/
│   ├── README.md               # Image requirements guide
│   └── [image files]           # Website images
│
└── README.md                   # This file
```

---

## Changelog

### Part 2 - CSS Styling and Responsive Design (September 2025)

#### Added
- Complete CSS stylesheet (styles.css) with modern design system
- Responsive layouts for desktop, tablet, and mobile devices
- CSS custom properties for consistent theming
- Glass morphism effects on statistics cards
- Smooth animations and transitions throughout the site
- Gradient backgrounds and text effects
- Modern button styles with hover animations
- Form styling with focus states
- Footer with dark gradient theme
- JavaScript file for basic interactivity (scripts.js)
- Images folder structure with README guide

#### Improved from Part 1
- Enhanced semantic HTML structure for better CSS targeting
- Optimized class naming conventions
- Improved accessibility with focus states
- Better content hierarchy and spacing
- Responsive image handling

#### Technical Implementation
- Mobile-first responsive approach
- CSS Grid and Flexbox layouts
- Clamp() for fluid typography
- Media queries at 768px and 480px breakpoints
- Backdrop filter effects for glass morphism
- Transform and transition properties for animations
- Custom scrollbar styling (where supported)

### Part 1 - HTML Structure (Initial Submission)

#### Created
- Five HTML pages: index.html, about.html, Programmes.html, enquiry.html, contact.html
- Semantic HTML5 structure across all pages
- Navigation menu linking all pages
- Header with logo and navigation
- Footer with contact information and social links
- Content sections for:
  - Organization mission and history
  - Programme descriptions
  - Volunteer opportunities
  - Contact information
  - Donation options

#### Implemented
- Meta tags for SEO optimization
- Proper heading hierarchy (h1-h6)
- Forms with various input types
- Lists (ordered and unordered)
- Links (internal and external placeholders)
- Image placeholders with alt text
- Tables for data presentation (rubrics)

---

## How to Run

### Method 1: Direct File Opening
1. Navigate to the project folder: `C:\\Users\\User\\OneDrive\\Desktop\\WEDE5020\\wede moad elzwawi`
2. Double-click `index.html` to open in your default browser
3. Alternatively, right-click and select \"Open with\" → Choose your browser

### Method 2: Live Server (Recommended)
1. Open the project folder in Visual Studio Code
2. Install \"Live Server\" extension if not already installed
3. Right-click on `index.html`
4. Select \"Open with Live Server\"
5. The website will open at `http://127.0.0.1:5500/`

### Method 3: Local Web Server
```bash
# Using Python 3
cd \"C:\\Users\\User\\OneDrive\\Desktop\\WEDE5020\\wede moad elzwawi\"
python -m http.server 8000

# Then open browser to: http://localhost:8000
```

### Testing Responsive Design
1. Open the website in your browser
2. Press F12 to open Developer Tools
3. Click the device toolbar icon (or press Ctrl+Shift+M)
4. Test different screen sizes:
   - Desktop: 1920x1080, 1280x720
   - Tablet: 768x1024, 834x1112
   - Mobile: 375x667, 414x896

---

## References

### Images
Pinterest. (n.d.) *Volunteer feeding child*. [Online image]. Available at: https://www.pinterest.com [Accessed 29 September 2025].

Pinterest. (n.d.) *Food distribution volunteers*. [Online image]. Available at: https://www.pinterest.com [Accessed 29 September 2025].

Pinterest. (n.d.) *Children in classroom*. [Online image]. Available at: https://www.pinterest.com [Accessed 29 September 2025].

Pinterest. (n.d.) *Students with raised hands*. [Online image]. Available at: https://www.pinterest.com [Accessed 29 September 2025].

Pinterest. (n.d.) *Community food distribution event*. [Online image]. Available at: https://www.pinterest.com [Accessed 29 September 2025].

### Web Development Resources
Mozilla Developer Network (2025) *CSS: Cascading Style Sheets*. [Online]. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS [Accessed 28 September 2025].

Mozilla Developer Network (2025) *Responsive design*. [Online]. Available at: https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design [Accessed 28 September 2025].

W3C (2024) *CSS Flexible Box Layout Module Level 1*. [Online]. Available at: https://www.w3.org/TR/css-flexbox-1/ [Accessed 28 September 2025].

W3C (2024) *CSS Grid Layout Module Level 2*. [Online]. Available at: https://www.w3.org/TR/css-grid-2/ [Accessed 28 September 2025].

### Design Inspiration
Awwwards (2025) *Best CSS websites*. [Online]. Available at: https://www.awwwards.com/websites/css/ [Accessed 27 September 2025].

CSS Tricks (2025) *A complete guide to CSS Grid*. [Online]. Available at: https://css-tricks.com/snippets/css/complete-guide-grid/ [Accessed 27 September 2025].

Google Fonts (2025) *Inter font family*. [Online]. Available at: https://fonts.google.com/specimen/Inter [Accessed 28 September 2025].

### Color Theory & Accessibility
WebAIM (2025) *Contrast checker*. [Online]. Available at: https://webaim.org/resources/contrastchecker/ [Accessed 28 September 2025].

Adobe Color (2025) *Color wheel*. [Online]. Available at: https://color.adobe.com/create/color-wheel [Accessed 27 September 2025].

### Responsive Design
Marcotte, E. (2011) *Responsive web design*. New York: A Book Apart.

Kadlec, T. (2013) *Implementing responsive design: Building sites for an anywhere, everywhere web*. Berkeley: New Riders.

### CSS Techniques
Coyier, C. (2024) *CSS-Tricks: Tips, tricks, and techniques on using Cascading Style Sheets*. [Online]. Available at: https://css-tricks.com [Accessed 27-29 September 2025].

Verou, L. (2012) *CSS secrets: Better solutions to everyday web design problems*. Sebastopol: O'Reilly Media.

### Web Standards & Best Practices
W3C (2024) *HTML5: A vocabulary and associated APIs for HTML and XHTML*. [Online]. Available at: https://www.w3.org/TR/html5/ [Accessed 28 September 2025].

Web Content Accessibility Guidelines (WCAG) 2.1 (2023) [Online]. Available at: https://www.w3.org/WAI/WCAG21/quickref/ [Accessed 28 September 2025].

---

## Browser Compatibility

**Tested and Compatible:**
- Google Chrome 118+
- Mozilla Firefox 119+
- Microsoft Edge 118+
- Safari 17+
- Opera 104+

**Known Issues:**
- Backdrop filter may not work in older browsers (graceful degradation included)
- Some CSS Grid features require modern browser support
- Internet Explorer is not supported

---

## Future Enhancements (Part 3)

Planned features for future implementation:
- JavaScript form validation
- Interactive donation calculator
- Image gallery with lightbox
- Scroll animations
- Newsletter subscription functionality
- Social media feed integration
- Multi-language support
- Dark mode toggle

---

## License & Usage

This project is submitted as part of the WEDE5020 course assessment. The code and design are the intellectual property of the student (Moad Elzwawi) and VCCT College.

**Academic Integrity Statement:**  
This project represents original work completed by the student. All external resources, code snippets, and design inspiration have been properly referenced following Harvard referencing style.

---

## Contact Information

**Student:** Moad Elzwawi  
**Student Number:** ST10478537  
**Institution:** VCCT College  
**Course:** WEDE5020 - Web Development  
**Submission Date:** September 2025

---

## Acknowledgments

Special thanks to:
- WEDE5020 lecturers for project guidance and feedback
- Pinterest community for providing inspirational images
- MDN Web Docs for comprehensive CSS documentation
- The open-source web development community

---
