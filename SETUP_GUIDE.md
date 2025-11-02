# Quick Setup Guide - Part 3 Complete

**Project:** Cape Hope Foundation Website  
**Student:** Moad Elzwawi  
**Course:** WEDE5020

---

## How to Run the Project (No Live Server Needed)

### Method 1: Double-Click (Easiest)
1. Navigate to: `C:\Users\User\OneDrive\Desktop\WEDE5020\wede moad elzwawi`
2. Double-click `index.html`
3. Website opens in your default browser
4. Navigate through all pages using the menu

### Method 2: Right-Click
1. Right-click on `index.html`
2. Select "Open with"
3. Choose your preferred browser

---

## Adding the Google Form to enquiry.html

### Step 1: Find the Form Section
Open `enquiry.html` and locate the volunteer form section (around line 150-400)

### Step 2: Replace with This Code

Copy the code from `GOOGLE_FORM_EMBED_CODE.html` file and paste it into `enquiry.html` where the old volunteer form was.

The form URL is already configured:
```
https://docs.google.com/forms/d/e/1FAIpQLSd_Sq1ASgfN2ls7GjFaLX-3zTKBSN9M73ODUlKJxl05mlRP4g/viewform
```

### Step 3: Add CSS
Open `css/styles.css` and add the styling code from `GOOGLE_FORM_EMBED_CODE.html` at the end of the file.

### Step 4: Test
1. Open `enquiry.html` in browser
2. Scroll to the volunteer section
3. The Google Form should be embedded and working

---

## Adding Locations Link to Navigation

In ALL HTML files (index.html, about.html, Programmes.html, enquiry.html, contact.html), add this line to the navigation menu:

```html
<li><a href="locations.html">Locations</a></li>
```

Add it after the "Contact & Donate" line, before the closing `</ul>` tag.

---

## File Checklist

Make sure you have these files:
- [x] index.html
- [x] about.html
- [x] Programmes.html
- [x] enquiry.html
- [x] contact.html
- [x] locations.html
- [x] robots.txt
- [x] sitemap.xml
- [x] css/styles.css
- [x] js/scripts.js
- [x] images/ (folder with images)
- [x] README.md

---

## Testing Checklist

Test these features:
- [ ] All navigation links work
- [ ] Locations page shows map with 5 markers
- [ ] Google Form loads in enquiry.html
- [ ] Images can be clicked to open lightbox
- [ ] Mobile menu works on small screens
- [ ] Search works on Programmes page
- [ ] Forms validate input correctly

---

## Submitting to GitHub

```bash
git add .
git commit -m "Part 3 Complete - Forms, SEO, and Interactive Features"
git push origin master
```

Then submit your GitHub repository URL to the LMS.

---

## Features Completed

### JavaScript Features:
- Lightbox gallery for images
- Accordion FAQ on About page
- Mobile responsive menu
- Scroll reveal animations
- Form validation with error messages
- Search filter on Programmes page
- Interactive map on Locations page

### SEO Features:
- Meta tags on all pages
- robots.txt file
- sitemap.xml file
- Schema.org structured data
- Open Graph tags for social sharing
- Optimized images with alt text
- Clean URL structure

### Forms:
- Google Forms integration
- Email validation
- Phone number validation
- Real-time error feedback
- Success messages
- Mobile responsive

---

## Project Structure

```
wede moad elzwawi/
├── index.html               (Home page)
├── about.html              (About us + FAQ)
├── Programmes.html         (Programmes with search)
├── enquiry.html           (Volunteer form)
├── contact.html           (Contact & donations)
├── locations.html         (Interactive map)
├── robots.txt            (SEO)
├── sitemap.xml           (SEO)
├── README.md             (Documentation)
├── css/
│   └── styles.css        (All styling)
├── js/
│   └── scripts.js        (All JavaScript)
└── images/
    └── [image files]
```

---

## Technical Details

**Languages:** HTML5, CSS3, JavaScript ES6  
**Libraries:** Leaflet.js 1.9.4, Google Forms API  
**Browser Support:** Chrome, Firefox, Safari, Edge  
**Mobile:** Fully responsive (320px - 1920px)  
**Performance:** Optimized for fast loading

---

## References Used

All references are listed in Harvard format in the README.md file, including:
- Agafonkin (2023) for Leaflet.js
- Duckett (2014) for JavaScript techniques
- Google (2024) for SEO guidelines
- Nielsen Norman Group (2023) for UX patterns
- W3C (2023) for accessibility standards

---
