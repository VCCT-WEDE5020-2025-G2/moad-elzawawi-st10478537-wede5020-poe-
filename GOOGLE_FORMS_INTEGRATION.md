# 📝 GOOGLE FORMS INTEGRATION GUIDE

## 🎯 Step-by-Step: Create Google Forms

### FORM 1: Volunteer Application Form

1. **Go to Google Forms:** https://forms.google.com
2. **Click** "Blank Form" or "+" 
3. **Title:** "Volunteer Application - Cape Hope Foundation"
4. **Add these questions:**

#### Personal Information:
- First Name (Short answer, Required)
- Last Name (Short answer, Required)
- Email Address (Short answer, Required)
- Phone Number (Short answer, Required)
- Age Range (Dropdown: 16-18, 19-25, 26-35, 36-50, 51-65, 65+)
- Location/Area (Short answer)

#### Volunteer Interests:
- What volunteer opportunities interest you? (Checkboxes, Required)
  - After-School Tutoring
  - Reading Programme
  - Computer Literacy
  - Meal Preparation
  - Food Distribution
  - Community Events
  - Administrative Support
  - Social Media & Marketing
  - Community Gardens
  - Professional Mentoring
  - Skills Workshops

#### Availability:
- Time Commitment (Dropdown)
  - 1-2 hours per week
  - 3-5 hours per week
  - 6-10 hours per week
  - More than 10 hours per week
  - Occasional/Event-based

- Preferred Days (Checkboxes)
  - Monday
  - Tuesday
  - Wednesday
  - Thursday
  - Friday
  - Saturday
  - Sunday

- Preferred Time of Day (Multiple choice)
  - Morning (6:00 AM - 12:00 PM)
  - Afternoon (12:00 PM - 6:00 PM)
  - Evening (6:00 PM - 9:00 PM)
  - Flexible

#### Skills & Experience:
- Highest Level of Education (Dropdown)
- Languages Spoken (Checkboxes: English, Afrikaans, isiXhosa, isiZulu, Other)
- Special Skills or Qualifications (Paragraph)
- Previous Volunteer Experience (Paragraph)

#### Additional Information:
- Why do you want to volunteer? (Paragraph, Required)
- Do you have reliable transport? (Multiple choice: Own transport, Public transport, Need transport assistance)
- I consent to a background check (Checkbox, Required)

5. **Click Send** → Get embed code

---

### FORM 2: Contact/General Inquiry Form

1. **Create New Form**
2. **Title:** "Contact Us - Cape Hope Foundation"
3. **Add these questions:**

- Full Name (Short answer, Required)
- Email Address (Short answer, Required)
- Phone Number (Short answer)
- Subject (Short answer, Required)
- Message Type (Dropdown)
  - General Inquiry
  - Volunteer Question
  - Partnership Opportunity
  - Donation Question
  - Event Information
  - Media Request
  - Other
- Your Message (Paragraph, Required, Min 10 characters)
- How did you hear about us? (Dropdown)
  - Google Search
  - Social Media
  - Friend/Family
  - News Article
  - Community Event
  - Other

4. **Click Send** → Get embed code

---

## 🔗 How to Get Embed Code

1. Click **Send** button (top right)
2. Click **< >** icon (embed)
3. Copy the iframe code
4. Paste into your HTML (instructions below)

---

## 💻 UPDATED HTML CODE

### UPDATE enquiry.html - Replace the volunteer form section with:

```html
<!-- Volunteer Application Form with Google Forms -->
<section class="volunteer-form-section">
    <div class="container">
        <h3>Volunteer Application Form</h3>
        <p>Ready to make a difference? Fill out this form and we'll be in touch within 5 working days.</p>
        
        <!-- Option 1: Embedded Google Form -->
        <div class="google-form-container">
            <iframe 
                src="YOUR_GOOGLE_FORM_EMBED_URL_HERE" 
                width="100%" 
                height="2200" 
                frameborder="0" 
                marginheight="0" 
                marginwidth="0">
                Loading…
            </iframe>
        </div>
        
        <!-- Alternative: Button to open in new tab -->
        <div class="form-alternative" style="text-align: center; margin: 2rem 0;">
            <p>Prefer to fill the form in a new window?</p>
            <a href="YOUR_GOOGLE_FORM_URL_HERE" 
               target="_blank" 
               class="btn-primary"
               rel="noopener noreferrer">
                Open Volunteer Form in New Tab
            </a>
        </div>
    </div>
</section>
```

### UPDATE contact.html - Add this after the donation section:

```html
<!-- Contact Form with Google Forms -->
<section class="contact-form-section">
    <div class="container">
        <h3>Send Us a Message</h3>
        <p>Have a question or want to get in touch? Fill out our contact form below.</p>
        
        <!-- Embedded Google Form -->
        <div class="google-form-container">
            <iframe 
                src="YOUR_CONTACT_FORM_EMBED_URL_HERE" 
                width="100%" 
                height="1400" 
                frameborder="0" 
                marginheight="0" 
                marginwidth="0">
                Loading…
            </iframe>
        </div>
        
        <!-- Alternative: Button to open in new tab -->
        <div class="form-alternative" style="text-align: center; margin: 2rem 0;">
            <p>Prefer to fill the form in a new window?</p>
            <a href="YOUR_CONTACT_FORM_URL_HERE" 
               target="_blank" 
               class="btn-primary"
               rel="noopener noreferrer">
                Open Contact Form in New Tab
            </a>
        </div>
    </div>
</section>
```

---

## 🎨 ADD CSS for Google Forms

Add this to your `css/styles.css` at the end:

```css
/* ===================================
   GOOGLE FORMS STYLING
   =================================== */

.google-form-container {
    background: white;
    padding: 2rem;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    margin: 2rem 0;
    overflow: hidden;
}

.google-form-container iframe {
    border-radius: 10px;
    width: 100%;
    min-height: 1400px;
}

.form-alternative {
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    padding: 2rem;
    border-radius: 15px;
    margin: 2rem 0;
}

.form-alternative p {
    font-size: 1.1rem;
    color: #4a5568;
    margin-bottom: 1rem;
}

.form-alternative .btn-primary {
    display: inline-block;
    padding: 1rem 2rem;
    margin-top: 1rem;
}

/* Responsive iframe */
@media (max-width: 768px) {
    .google-form-container {
        padding: 1rem;
    }
    
    .google-form-container iframe {
        min-height: 2000px;
    }
}
```

---

## 📋 COMPLETE SETUP INSTRUCTIONS

### Step 1: Create Your Google Forms (15 minutes)
1. Create Volunteer Form with all fields above
2. Create Contact Form with all fields above
3. Customize colors to match your site (Settings → Presentation)

### Step 2: Get Embed Codes (2 minutes)
1. In each form, click **Send** → **< >** icon
2. Copy the iframe code
3. Save both codes in a text file

### Step 3: Update HTML Files (5 minutes)

**For enquiry.html:**
1. Find the `<section class="volunteer-form-section">` 
2. Replace entire section with code above
3. Replace `YOUR_GOOGLE_FORM_EMBED_URL_HERE` with your actual embed URL
4. Replace `YOUR_GOOGLE_FORM_URL_HERE` with your form's shareable link

**For contact.html:**
1. Find a good place (after donation section)
2. Add the contact form section code above
3. Replace placeholder URLs with your actual URLs

### Step 4: Add CSS (2 minutes)
1. Open `css/styles.css`
2. Scroll to the bottom
3. Paste the CSS code above

### Step 5: Test! (2 minutes)
1. Double-click `enquiry.html`
2. Scroll to form section
3. Verify Google Form loads
4. Test the "Open in New Tab" button
5. Repeat for `contact.html`

---

## 🎯 EXAMPLE (How it should look):

```html
<!-- REAL EXAMPLE with actual Google Form URL -->
<iframe 
    src="https://docs.google.com/forms/d/e/1FAIpQLSe_EXAMPLE_ID_HERE/viewform?embedded=true" 
    width="100%" 
    height="2200" 
    frameborder="0" 
    marginheight="0" 
    marginwidth="0">
    Loading…
</iframe>
```

The URL will look like:
`https://docs.google.com/forms/d/e/1FAIpQLSe...../viewform?embedded=true`

---

## ✅ BENEFITS OF GOOGLE FORMS

1. ✅ **Free** - No cost
2. ✅ **Easy to manage** - All responses in Google Sheets
3. ✅ **Email notifications** - Get notified of new submissions
4. ✅ **No backend needed** - No PHP/database required
5. ✅ **Mobile friendly** - Works on all devices
6. ✅ **Spam protection** - Built-in captcha
7. ✅ **Professional** - Looks clean and modern
8. ✅ **Works offline** - Responses saved when reconnected

---

## 📊 VIEW RESPONSES

1. Open your Google Form
2. Click **Responses** tab
3. See all submissions
4. Click Google Sheets icon to export

---

## 🔔 ENABLE EMAIL NOTIFICATIONS

1. In Google Form, click **Responses**
2. Click three dots (⋮)
3. Select "Get email notifications for new responses"
4. ✅ You'll get an email for every submission!

---

## 🎨 CUSTOMIZE FORM APPEARANCE

1. Click palette icon (🎨)
2. Choose colors matching your website:
   - Header color: #667eea
   - Background color: #f7fafc
   - Text color: #1a202c
3. Upload your logo (optional)

---

## 🚀 QUICK START (If you're in a hurry)

**Don't have time to create custom forms?**

Use these pre-made templates:
1. Go to: https://forms.google.com/templates
2. Search "Contact Form" or "Registration"
3. Use a template and modify it
4. Get embed code
5. Add to your HTML

**This takes only 5 minutes!**

---

## 💡 PRO TIP

Keep both options:
- **Embedded form** for users who want to stay on your site
- **"Open in new tab" button** for users who prefer full-screen form

This gives the best user experience!

---

## 📞 NEED HELP?

**Can't create Google Form?**
1. Watch YouTube: "How to create Google Form"
2. Takes 10 minutes to learn
3. Very easy once you try it!

**Form not showing?**
- Check internet connection
- Verify embed URL is correct
- Try opening form URL directly in browser

---

## ✅ CHECKLIST

- [ ] Created Volunteer Google Form
- [ ] Created Contact Google Form
- [ ] Got embed codes for both
- [ ] Updated enquiry.html with volunteer form code
- [ ] Updated contact.html with contact form code
- [ ] Added CSS styling for forms
- [ ] Tested both forms work
- [ ] Enabled email notifications
- [ ] Customized form colors

---

**Total Time: 25 minutes**

**YOU'LL HAVE PROFESSIONAL FORMS THAT ACTUALLY WORK! 🎉**
