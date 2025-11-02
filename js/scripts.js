// ===================================
// Cape Hope Foundation - Enhanced JavaScript
// Part 3 - Advanced Functionality and Validation
// Author: Moad Elzwawi
// ===================================

// ===================================
// GLOBAL VARIABLES AND CONFIGURATION
// ===================================
const CONFIG = {
    emailRegex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    phoneRegex: /^(\+27|0)[0-9]{9}$/,
    animationDelay: 100,
    scrollThreshold: 100
};

// ===================================
// DOM CONTENT LOADED - INITIALIZATION
// ===================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('Cape Hope Foundation website loaded successfully!');
    
    // Initialize all features
    initSmoothScrolling();
    initMobileMenu();
    initScrollAnimations();
    initLightbox();
    initCustomAmountToggle();
    initAccordions();
    initImageGallery();
    initSearchFilter();
    
    // Initialize form validation if forms exist
    const volunteerForm = document.getElementById('volunteerForm');
    const sponsorshipForm = document.getElementById('sponsorshipForm');
    const donationForm = document.getElementById('donationForm');
    const contactForm = document.getElementById('contactForm');
    
    if (volunteerForm) initVolunteerFormValidation();
    if (sponsorshipForm) initSponsorshipFormValidation();
    if (donationForm) initDonationFormValidation();
    if (contactForm) initContactFormValidation();
    
    // Newsletter form validation (present in footer of all pages)
    initNewsletterValidation();
});

// ===================================
// SMOOTH SCROLLING FOR ANCHOR LINKS
// ===================================
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Update URL without jumping
                history.pushState(null, null, targetId);
            }
        });
    });
}

// ===================================
// MOBILE MENU FUNCTIONALITY
// ===================================
function initMobileMenu() {
    const nav = document.querySelector('nav');
    if (!nav) return;
    
    // Create mobile menu toggle button
    const menuToggle = document.createElement('button');
    menuToggle.className = 'mobile-menu-toggle';
    menuToggle.innerHTML = '&#9776;'; // Hamburger icon
    menuToggle.setAttribute('aria-label', 'Toggle menu');
    
    // Insert before nav
    const header = document.querySelector('header .container');
    if (header) {
        header.insertBefore(menuToggle, nav);
        
        // Toggle menu on click
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('mobile-menu-open');
            this.innerHTML = nav.classList.contains('mobile-menu-open') ? '&times;' : '&#9776;';
        });
        
        // Close menu when link is clicked
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                nav.classList.remove('mobile-menu-open');
                menuToggle.innerHTML = '&#9776;';
            });
        });
    }
}

// ===================================
// SCROLL ANIMATIONS
// ===================================
function initScrollAnimations() {
    const animateElements = document.querySelectorAll('.stat-item, .campaign-card, .story-card, .team-member');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * CONFIG.animationDelay);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// ===================================
// LIGHTBOX FOR IMAGE GALLERY
// ===================================
function initLightbox() {
    // Create lightbox overlay
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <span class="lightbox-close">&times;</span>
            <img class="lightbox-img" src="" alt="">
            <div class="lightbox-caption"></div>
            <button class="lightbox-prev">&#10094;</button>
            <button class="lightbox-next">&#10095;</button>
        </div>
    `;
    document.body.appendChild(lightbox);
    
    const lightboxImg = lightbox.querySelector('.lightbox-img');
    const lightboxCaption = lightbox.querySelector('.lightbox-caption');
    const closeBtn = lightbox.querySelector('.lightbox-close');
    const prevBtn = lightbox.querySelector('.lightbox-prev');
    const nextBtn = lightbox.querySelector('.lightbox-next');
    
    let currentImages = [];
    let currentIndex = 0;
    
    // Make images clickable
    const galleryImages = document.querySelectorAll('.campaign-card img, .story-card img, .team-member img, .programme-image img');
    galleryImages.forEach((img, index) => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', function() {
            currentImages = Array.from(galleryImages);
            currentIndex = index;
            showLightbox(this.src, this.alt);
        });
    });
    
    function showLightbox(src, alt) {
        lightboxImg.src = src;
        lightboxCaption.textContent = alt;
        lightbox.classList.add('lightbox-active');
        document.body.style.overflow = 'hidden';
    }
    
    function closeLightbox() {
        lightbox.classList.remove('lightbox-active');
        document.body.style.overflow = 'auto';
    }
    
    function showNext() {
        currentIndex = (currentIndex + 1) % currentImages.length;
        showLightbox(currentImages[currentIndex].src, currentImages[currentIndex].alt);
    }
    
    function showPrev() {
        currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
        showLightbox(currentImages[currentIndex].src, currentImages[currentIndex].alt);
    }
    
    closeBtn.addEventListener('click', closeLightbox);
    prevBtn.addEventListener('click', showNext);
    nextBtn.addEventListener('click', showPrev);
    
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) closeLightbox();
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (!lightbox.classList.contains('lightbox-active')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') showPrev();
        if (e.key === 'ArrowRight') showNext();
    });
}

// ===================================
// CUSTOM DONATION AMOUNT TOGGLE
// ===================================
function initCustomAmountToggle() {
    const customRadio = document.getElementById('amount-custom');
    const customAmountInput = document.getElementById('customAmountInput');
    
    if (customRadio && customAmountInput) {
        const amountRadios = document.querySelectorAll('input[name="amount"]');
        amountRadios.forEach(radio => {
            radio.addEventListener('change', function() {
                if (this.value === 'custom') {
                    customAmountInput.style.display = 'block';
                    document.getElementById('custom-amount-value').focus();
                } else {
                    customAmountInput.style.display = 'none';
                }
            });
        });
    }
}

// ===================================
// ACCORDION FUNCTIONALITY
// ===================================
function initAccordions() {
    // Create FAQ accordion section if doesn't exist
    createFAQSection();
    
    const accordionButtons = document.querySelectorAll('.accordion-button');
    accordionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const isActive = this.classList.contains('active');
            
            // Close all accordions
            document.querySelectorAll('.accordion-button').forEach(btn => {
                btn.classList.remove('active');
                btn.nextElementSibling.style.maxHeight = null;
            });
            
            // Open clicked accordion if it wasn't active
            if (!isActive) {
                this.classList.add('active');
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        });
    });
}

function createFAQSection() {
    // Add FAQ section to About page if it exists
    const aboutMain = document.querySelector('body');
    if (aboutMain && window.location.pathname.includes('about')) {
        // Check if FAQ doesn't already exist
        if (!document.querySelector('.faq-section')) {
            const faqHTML = `
                <section class="faq-section">
                    <div class="container">
                        <h3 class="text-center">Frequently Asked Questions</h3>
                        <div class="accordion-container">
                            <div class="accordion-item">
                                <button class="accordion-button">How can I become a volunteer?</button>
                                <div class="accordion-content">
                                    <p>To become a volunteer, visit our Get Involved page and fill out the volunteer application form. We'll review your application and contact you within 5 working days to discuss available opportunities that match your skills and interests.</p>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <button class="accordion-button">Are donations tax deductible?</button>
                                <div class="accordion-content">
                                    <p>Yes! Cape Hope Foundation is a registered Non-Profit Organisation (NPO 123-456). All donations are tax deductible under Section 18A. We'll provide you with a tax certificate for your donation.</p>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <button class="accordion-button">What areas do you serve in Cape Town?</button>
                                <div class="accordion-content">
                                    <p>We currently serve 15 partner schools across Cape Town, primarily in townships and underprivileged areas including Khayelitsha, Gugulethu, Langa, and Nyanga. Our reach extends to over 2,500 children daily.</p>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <button class="accordion-button">How do I track how my donation is used?</button>
                                <div class="accordion-content">
                                    <p>We believe in complete transparency. Donors receive quarterly impact reports showing how funds are allocated and the direct impact on children and communities. You can also visit our programmes in action by contacting us to arrange a site visit.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            `;
            
            const footer = document.querySelector('footer');
            if (footer) {
                footer.insertAdjacentHTML('beforebegin', faqHTML);
                // Reinitialize accordion buttons for new content
                setTimeout(initAccordions, 100);
            }
        }
    }
}

// ===================================
// IMAGE GALLERY WITH FILTERING
// ===================================
function initImageGallery() {
    const programmeImages = document.querySelectorAll('.programme-image img');
    if (programmeImages.length > 0) {
        programmeImages.forEach(img => {
            img.classList.add('gallery-image');
            img.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
        });
    }
}

// ===================================
// SEARCH AND FILTER FUNCTIONALITY
// ===================================
function initSearchFilter() {
    // Add search functionality to programmes page
    if (window.location.pathname.includes('Programmes') || window.location.pathname.includes('programmes')) {
        const searchHTML = `
            <div class="search-filter-container">
                <input type="text" id="programmeSearch" placeholder="Search programmes..." class="search-input">
                <div id="searchResults"></div>
            </div>
        `;
        
        const programmeOverview = document.querySelector('.programme-overview .container');
        if (programmeOverview) {
            programmeOverview.insertAdjacentHTML('beforeend', searchHTML);
            
            const searchInput = document.getElementById('programmeSearch');
            searchInput.addEventListener('input', function() {
                const searchTerm = this.value.toLowerCase();
                const programmeSections = document.querySelectorAll('.programme-section');
                
                programmeSections.forEach(section => {
                    const text = section.textContent.toLowerCase();
                    if (text.includes(searchTerm) || searchTerm === '') {
                        section.style.display = 'block';
                        section.style.animation = 'fadeIn 0.5s ease';
                    } else {
                        section.style.display = 'none';
                    }
                });
            });
        }
    }
}

// ===================================
// FORM VALIDATION - VOLUNTEER FORM
// ===================================
function initVolunteerFormValidation() {
    const form = document.getElementById('volunteerForm');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Clear previous errors
        clearErrors();
        
        let isValid = true;
        
        // Validate required fields
        const firstName = document.getElementById('firstName');
        const lastName = document.getElementById('lastName');
        const email = document.getElementById('email');
        const phone = document.getElementById('phone');
        const criminalCheck = document.getElementById('criminal-check');
        
        if (!firstName.value.trim()) {
            showError(firstName, 'First name is required');
            isValid = false;
        } else if (firstName.value.trim().length < 2) {
            showError(firstName, 'First name must be at least 2 characters');
            isValid = false;
        }
        
        if (!lastName.value.trim()) {
            showError(lastName, 'Last name is required');
            isValid = false;
        } else if (lastName.value.trim().length < 2) {
            showError(lastName, 'Last name must be at least 2 characters');
            isValid = false;
        }
        
        if (!email.value.trim()) {
            showError(email, 'Email is required');
            isValid = false;
        } else if (!CONFIG.emailRegex.test(email.value)) {
            showError(email, 'Please enter a valid email address');
            isValid = false;
        }
        
        if (!phone.value.trim()) {
            showError(phone, 'Phone number is required');
            isValid = false;
        } else if (!CONFIG.phoneRegex.test(phone.value)) {
            showError(phone, 'Please enter a valid South African phone number (e.g., 0821234567 or +27821234567)');
            isValid = false;
        }
        
        // Check if at least one interest is selected
        const interests = document.querySelectorAll('input[name="interests"]:checked');
        if (interests.length === 0) {
            showError(document.querySelector('.volunteer-interests'), 'Please select at least one volunteer interest');
            isValid = false;
        }
        
        if (!criminalCheck.checked) {
            showError(criminalCheck, 'You must consent to a background check');
            isValid = false;
        }
        
        if (isValid) {
            // Compile form data for enquiry
            const formData = {
                name: firstName.value + ' ' + lastName.value,
                email: email.value,
                phone: phone.value,
                interests: Array.from(interests).map(i => i.value).join(', '),
                availability: document.getElementById('timeCommitment').value,
                message: document.getElementById('motivation').value
            };
            
            const subject = 'Volunteer Application - ' + formData.name;
            const body = `Volunteer Application Details:
            
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

Volunteer Interests: ${formData.interests}
Availability: ${formData.availability}

Motivation:
${formData.message}`;
            
            showSuccessMessage(form, 'Thank you for your volunteer application! Processing your enquiry...');
            
            setTimeout(() => {
                window.location.href = `mailto:volunteer@capehopefoundation.org.za?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                form.reset();
            }, 1500);
        } else {
            scrollToFirstError();
        }
    });
}

// ===================================
// FORM VALIDATION - SPONSORSHIP FORM
// ===================================
function initSponsorshipFormValidation() {
    const form = document.getElementById('sponsorshipForm');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        clearErrors();
        
        let isValid = true;
        
        const companyName = document.getElementById('companyName');
        const contactPerson = document.getElementById('contactPerson');
        const companyEmail = document.getElementById('companyEmail');
        const companyPhone = document.getElementById('companyPhone');
        
        if (!companyName.value.trim()) {
            showError(companyName, 'Organization name is required');
            isValid = false;
        }
        
        if (!contactPerson.value.trim()) {
            showError(contactPerson, 'Contact person name is required');
            isValid = false;
        }
        
        if (!companyEmail.value.trim()) {
            showError(companyEmail, 'Email is required');
            isValid = false;
        } else if (!CONFIG.emailRegex.test(companyEmail.value)) {
            showError(companyEmail, 'Please enter a valid email address');
            isValid = false;
        }
        
        if (!companyPhone.value.trim()) {
            showError(companyPhone, 'Phone number is required');
            isValid = false;
        } else if (!CONFIG.phoneRegex.test(companyPhone.value)) {
            showError(companyPhone, 'Please enter a valid South African phone number');
            isValid = false;
        }
        
        if (isValid) {
            // Compile sponsorship enquiry
            const formData = {
                company: companyName.value,
                contact: contactPerson.value,
                email: companyEmail.value,
                phone: companyPhone.value,
                type: document.getElementById('partnershipType').value,
                budget: document.getElementById('budget').value,
                goals: document.getElementById('partnershipGoals').value
            };
            
            const subject = 'Partnership Inquiry - ' + formData.company;
            const body = `Partnership Inquiry from ${formData.company}

Contact Person: ${formData.contact}
Email: ${formData.email}
Phone: ${formData.phone}

Partnership Type: ${formData.type}
Budget Range: ${formData.budget}

Goals and Objectives:
${formData.goals}`;
            
            showSuccessMessage(form, 'Thank you for your partnership inquiry! We will contact you within 3 working days to discuss opportunities.');
            
            setTimeout(() => {
                window.location.href = `mailto:partnerships@capehopefoundation.org.za?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                form.reset();
            }, 1500);
        } else {
            scrollToFirstError();
        }
    });
}

// ===================================
// FORM VALIDATION - DONATION FORM
// ===================================
function initDonationFormValidation() {
    const form = document.getElementById('donationForm');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        clearErrors();
        
        let isValid = true;
        
        // Validate donation amount
        const amountSelected = document.querySelector('input[name="amount"]:checked');
        if (!amountSelected) {
            showError(document.querySelector('.donation-amount'), 'Please select a donation amount');
            isValid = false;
        } else if (amountSelected.value === 'custom') {
            const customAmount = document.getElementById('custom-amount-value');
            if (!customAmount.value || parseFloat(customAmount.value) < 10) {
                showError(customAmount, 'Custom amount must be at least R10');
                isValid = false;
            }
        }
        
        // Validate donor information
        const donorName = document.getElementById('donor-name');
        const donorEmail = document.getElementById('donor-email');
        
        if (!donorName.value.trim()) {
            showError(donorName, 'Full name is required');
            isValid = false;
        }
        
        if (!donorEmail.value.trim()) {
            showError(donorEmail, 'Email is required');
            isValid = false;
        } else if (!CONFIG.emailRegex.test(donorEmail.value)) {
            showError(donorEmail, 'Please enter a valid email address');
            isValid = false;
        }
        
        // Validate phone if provided
        const donorPhone = document.getElementById('donor-phone');
        if (donorPhone.value.trim() && !CONFIG.phoneRegex.test(donorPhone.value)) {
            showError(donorPhone, 'Please enter a valid South African phone number');
            isValid = false;
        }
        
        if (isValid) {
            // Get donation details
            let amount;
            if (amountSelected.value === 'custom') {
                amount = document.getElementById('custom-amount-value').value;
            } else {
                amount = amountSelected.value;
            }
            
            const donationDetails = {
                amount: 'R' + amount,
                frequency: document.querySelector('input[name="frequency"]:checked').value,
                programme: document.getElementById('programme').value,
                name: donorName.value,
                email: donorEmail.value
            };
            
            // Simulate payment processing
            showSuccessMessage(form, `Thank you for your generous donation of ${donationDetails.amount}! You will be redirected to the secure payment gateway...`);
            
            setTimeout(() => {
                // In a real application, this would redirect to PayFast with payment details
                alert('Redirecting to PayFast secure payment gateway...\n\nDonation Amount: ' + donationDetails.amount + '\nFrequency: ' + donationDetails.frequency);
                form.reset();
            }, 2000);
        } else {
            scrollToFirstError();
        }
    });
}

// ===================================
// FORM VALIDATION - CONTACT FORM
// ===================================
function initContactFormValidation() {
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        clearErrors();
        
        let isValid = true;
        
        // Add validation for contact form fields
        const name = form.querySelector('input[name="name"]');
        const email = form.querySelector('input[name="email"]');
        const message = form.querySelector('textarea[name="message"]');
        
        if (name && !name.value.trim()) {
            showError(name, 'Name is required');
            isValid = false;
        }
        
        if (email && !email.value.trim()) {
            showError(email, 'Email is required');
            isValid = false;
        } else if (email && !CONFIG.emailRegex.test(email.value)) {
            showError(email, 'Please enter a valid email address');
            isValid = false;
        }
        
        if (message && !message.value.trim()) {
            showError(message, 'Message is required');
            isValid = false;
        } else if (message && message.value.trim().length < 10) {
            showError(message, 'Message must be at least 10 characters long');
            isValid = false;
        }
        
        if (isValid) {
            // Create mailto link with form data
            const subject = 'Contact Form Submission from ' + name.value;
            const body = message.value + '\n\nFrom: ' + name.value + '\nEmail: ' + email.value;
            const mailtoLink = `mailto:info@capehopefoundation.org.za?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            
            showSuccessMessage(form, 'Opening your email client to send the message...');
            setTimeout(() => {
                window.location.href = mailtoLink;
                form.reset();
            }, 1000);
        } else {
            scrollToFirstError();
        }
    });
}

// ===================================
// NEWSLETTER FORM VALIDATION
// ===================================
function initNewsletterValidation() {
    const newsletterForms = document.querySelectorAll('.newsletter-form');
    
    newsletterForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            
            if (!emailInput.value.trim()) {
                showError(emailInput, 'Email is required');
                return;
            }
            
            if (!CONFIG.emailRegex.test(emailInput.value)) {
                showError(emailInput, 'Please enter a valid email address');
                return;
            }
            
            // Show success message
            const successMsg = document.createElement('div');
            successMsg.className = 'newsletter-success';
            successMsg.textContent = 'Thank you for subscribing to our newsletter!';
            successMsg.style.cssText = 'color: #00f2fe; margin-top: 10px; font-weight: 600;';
            this.appendChild(successMsg);
            
            emailInput.value = '';
            
            setTimeout(() => {
                successMsg.remove();
            }, 5000);
        });
    });
}

// ===================================
// ERROR HANDLING UTILITIES
// ===================================
function showError(element, message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    errorDiv.style.cssText = 'color: #f5576c; font-size: 0.875rem; margin-top: 0.25rem; font-weight: 500;';
    
    // Add error class to input
    element.classList.add('error-input');
    element.style.borderColor = '#f5576c';
    
    // Insert error message after the element
    if (element.type === 'checkbox' || element.type === 'radio') {
        element.parentElement.parentElement.appendChild(errorDiv);
    } else {
        element.parentElement.appendChild(errorDiv);
    }
}

function clearErrors() {
    document.querySelectorAll('.error-message').forEach(error => error.remove());
    document.querySelectorAll('.error-input').forEach(input => {
        input.classList.remove('error-input');
        input.style.borderColor = '';
    });
    document.querySelectorAll('.success-message').forEach(msg => msg.remove());
}

function scrollToFirstError() {
    const firstError = document.querySelector('.error-message');
    if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

function showSuccessMessage(form, message) {
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.innerHTML = `
        <div style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); color: white; padding: 1.5rem; border-radius: 12px; margin: 2rem 0; text-align: center; box-shadow: 0 10px 25px rgba(79, 172, 254, 0.3);">
            <h4 style="margin: 0 0 0.5rem 0; font-size: 1.5rem;">✓ Success!</h4>
            <p style="margin: 0; font-size: 1.1rem;">${message}</p>
        </div>
    `;
    
    form.insertAdjacentElement('afterend', successDiv);
    successDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
    // Remove success message after 10 seconds
    setTimeout(() => {
        successDiv.remove();
    }, 10000);
}

// ===================================
// PERFORMANCE MONITORING
// ===================================
window.addEventListener('load', function() {
    const loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
    console.log(`Page loaded in ${loadTime}ms`);
});