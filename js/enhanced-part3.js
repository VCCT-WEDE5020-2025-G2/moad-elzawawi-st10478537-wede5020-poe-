// ===================================
// ENHANCED PART 3 ADDITIONS
// Add this code to the END of your existing scripts.js file
// ===================================

// ===================================
// TYPING EFFECT FOR FORMS
// ===================================

function addTypingEffect() {
    const inputs = document.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"], textarea');
    
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            this.classList.add('typing');
            
            // Add visual feedback while typing
            const parent = this.parentElement;
            let typingIndicator = parent.querySelector('.typing-indicator');
            
            if (!typingIndicator) {
                typingIndicator = document.createElement('span');
                typingIndicator.className = 'typing-indicator';
                typingIndicator.textContent = '✓';
                typingIndicator.style.cssText = `
                    color: #4facfe;
                    margin-left: 10px;
                    font-size: 1.2rem;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                `;
                parent.appendChild(typingIndicator);
            }
            
            // Show checkmark when typing
            typingIndicator.style.opacity = '1';
            
            // Remove after 1 second of no typing
            clearTimeout(this.typingTimeout);
            this.typingTimeout = setTimeout(() => {
                this.classList.remove('typing');
                typingIndicator.style.opacity = '0';
            }, 1000);
        });
        
        // Show character count for text areas
        if (input.tagName === 'TEXTAREA') {
            const maxLength = input.getAttribute('maxlength') || 500;
            const counterDiv = document.createElement('div');
            counterDiv.className = 'char-counter';
            counterDiv.style.cssText = 'text-align: right; font-size: 0.85rem; color: #718096; margin-top: 5px;';
            input.parentElement.appendChild(counterDiv);
            
            input.addEventListener('input', function() {
                const currentLength = this.value.length;
                counterDiv.textContent = `${currentLength} / ${maxLength} characters`;
                
                if (currentLength > maxLength * 0.9) {
                    counterDiv.style.color = '#f5576c';
                } else {
                    counterDiv.style.color = '#718096';
                }
            });
        }
    });
}

// ===================================
// ENHANCED ERROR MESSAGES WITH ICONS
// ===================================

function showEnhancedError(element, message, type = 'error') {
    // Remove existing errors
    const existingError = element.parentElement.querySelector('.error-message-enhanced');
    if (existingError) existingError.remove();
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message-enhanced';
    
    let icon = '⚠️';
    let color = '#f5576c';
    
    if (type === 'warning') {
        icon = '⚡';
        color = '#ff9800';
    } else if (type === 'info') {
        icon = 'ℹ️';
        color = '#2196f3';
    }
    
    errorDiv.innerHTML = `<span style="margin-right: 8px;">${icon}</span><span>${message}</span>`;
    errorDiv.style.cssText = `
        color: ${color};
        font-size: 0.875rem;
        margin-top: 0.5rem;
        padding: 0.75rem;
        background: ${color}15;
        border-left: 3px solid ${color};
        border-radius: 8px;
        display: flex;
        align-items: center;
        animation: slideInError 0.3s ease;
    `;
    
    // Add error class to input
    element.style.borderColor = color;
    element.style.background = `${color}08`;
    
    // Insert error message
    element.parentElement.appendChild(errorDiv);
    
    // Shake animation
    element.style.animation = 'shake 0.5s';
    setTimeout(() => {
        element.style.animation = '';
    }, 500);
}

// Add CSS animations
const enhancedStyles = document.createElement('style');
enhancedStyles.textContent = `
    @keyframes slideInError {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-10px); }
        75% { transform: translateX(10px); }
    }
    
    input.typing, textarea.typing {
        border-color: #4facfe !important;
        box-shadow: 0 0 0 3px rgba(79, 172, 254, 0.1) !important;
    }
    
    .form-success-animation {
        animation: successPulse 0.6s ease;
    }
    
    @keyframes successPulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); }
    }
    
    .typing-indicator {
        display: inline-block;
        animation: fadeIn 0.3s ease;
    }
    
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
`;
document.head.appendChild(enhancedStyles);

// ===================================
// REAL-TIME VALIDATION INDICATORS
// ===================================

function addRealTimeValidation() {
    // Email validation indicator
    const emailInputs = document.querySelectorAll('input[type="email"]');
    emailInputs.forEach(input => {
        input.addEventListener('blur', function() {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (this.value && !emailRegex.test(this.value)) {
                showEnhancedError(this, 'Please enter a valid email address (e.g., name@example.com)');
            } else if (this.value && emailRegex.test(this.value)) {
                // Show success
                const successIcon = document.createElement('span');
                successIcon.textContent = '✓';
                successIcon.style.cssText = 'color: #00f2fe; font-size: 1.5rem; margin-left: 10px; animation: fadeIn 0.3s ease;';
                const existing = this.parentElement.querySelector('.success-icon');
                if (existing) existing.remove();
                successIcon.className = 'success-icon';
                this.parentElement.appendChild(successIcon);
                this.style.borderColor = '#00f2fe';
                
                setTimeout(() => successIcon.remove(), 2000);
            }
        });
    });
    
    // Phone validation indicator
    const phoneInputs = document.querySelectorAll('input[type="tel"]');
    phoneInputs.forEach(input => {
        input.addEventListener('input', function() {
            // Auto-format phone number
            let value = this.value.replace(/\D/g, '');
            if (value.startsWith('27')) {
                value = '+' + value;
            }
            this.value = value;
        });
        
        input.addEventListener('blur', function() {
            const phoneRegex = /^(\+27|0)[0-9]{9}$/;
            if (this.value && !phoneRegex.test(this.value)) {
                showEnhancedError(this, 'Please enter a valid SA phone number: 0821234567 or +27821234567', 'warning');
            } else if (this.value && phoneRegex.test(this.value)) {
                const successIcon = document.createElement('span');
                successIcon.textContent = '✓';
                successIcon.style.cssText = 'color: #00f2fe; font-size: 1.5rem; margin-left: 10px;';
                const existing = this.parentElement.querySelector('.success-icon');
                if (existing) existing.remove();
                successIcon.className = 'success-icon';
                this.parentElement.appendChild(successIcon);
                this.style.borderColor = '#00f2fe';
                setTimeout(() => successIcon.remove(), 2000);
            }
        });
    });
}

// ===================================
// FORM PROGRESS INDICATOR
// ===================================

function addFormProgressIndicator(formId) {
    const form = document.getElementById(formId);
    if (!form) return;
    
    const progressBar = document.createElement('div');
    progressBar.className = 'form-progress-bar';
    progressBar.style.cssText = `
        position: sticky;
        top: 70px;
        width: 100%;
        height: 4px;
        background: #e2e8f0;
        border-radius: 2px;
        margin-bottom: 2rem;
        z-index: 100;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    `;
    
    const progressFill = document.createElement('div');
    progressFill.className = 'form-progress-fill';
    progressFill.style.cssText = `
        height: 100%;
        width: 0%;
        background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
        border-radius: 2px;
        transition: width 0.3s ease;
        box-shadow: 0 0 10px rgba(102, 126, 234, 0.5);
    `;
    
    const progressText = document.createElement('div');
    progressText.className = 'progress-text';
    progressText.style.cssText = `
        text-align: center;
        font-size: 0.85rem;
        color: #667eea;
        margin-top: 5px;
        font-weight: 600;
    `;
    
    progressBar.appendChild(progressFill);
    form.insertBefore(progressBar, form.firstChild);
    form.insertBefore(progressText, progressBar.nextSibling);
    
    // Update progress based on filled fields
    const updateProgress = () => {
        const requiredInputs = form.querySelectorAll('input[required], textarea[required], select[required]');
        const filledInputs = Array.from(requiredInputs).filter(input => {
            if (input.type === 'checkbox') return input.checked;
            return input.value.trim() !== '';
        });
        
        const progress = (filledInputs.length / requiredInputs.length) * 100;
        progressFill.style.width = progress + '%';
        progressText.textContent = `Form Progress: ${Math.round(progress)}% Complete`;
        
        // Change color when complete
        if (progress === 100) {
            progressFill.style.background = 'linear-gradient(90deg, #4facfe 0%, #00f2fe 100%)';
            progressText.textContent = '✓ Form Complete! Ready to submit';
            progressText.style.color = '#00f2fe';
        } else {
            progressFill.style.background = 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)';
            progressText.style.color = '#667eea';
        }
    };
    
    form.addEventListener('input', updateProgress);
    form.addEventListener('change', updateProgress);
    updateProgress(); // Initial check
}

// ===================================
// FLOATING LABELS EFFECT
// ===================================

function addFloatingLabels() {
    const formGroups = document.querySelectorAll('.form-group');
    
    formGroups.forEach(group => {
        const input = group.querySelector('input, textarea, select');
        const label = group.querySelector('label');
        
        if (input && label && input.type !== 'checkbox' && input.type !== 'radio') {
            input.addEventListener('focus', function() {
                label.style.transform = 'translateY(-25px) scale(0.9)';
                label.style.color = '#667eea';
            });
            
            input.addEventListener('blur', function() {
                if (!this.value) {
                    label.style.transform = '';
                    label.style.color = '';
                }
            });
            
            // Check if already has value
            if (input.value) {
                label.style.transform = 'translateY(-25px) scale(0.9)';
            }
        }
    });
}

// ===================================
// FORM SUBMISSION LOADING STATE
// ===================================

function showFormLoading(button) {
    const originalText = button.textContent;
    button.disabled = true;
    button.style.opacity = '0.7';
    button.style.cursor = 'not-allowed';
    
    let dots = 0;
    const loadingInterval = setInterval(() => {
        dots = (dots + 1) % 4;
        button.textContent = 'Processing' + '.'.repeat(dots);
    }, 300);
    
    return {
        stop: () => {
            clearInterval(loadingInterval);
            button.textContent = originalText;
            button.disabled = false;
            button.style.opacity = '1';
            button.style.cursor = 'pointer';
        }
    };
}

// ===================================
// PASSWORD STRENGTH INDICATOR (if needed)
// ===================================

function addPasswordStrength() {
    const passwordInputs = document.querySelectorAll('input[type="password"]');
    
    passwordInputs.forEach(input => {
        const strengthDiv = document.createElement('div');
        strengthDiv.className = 'password-strength';
        strengthDiv.style.cssText = `
            margin-top: 0.5rem;
            height: 4px;
            background: #e2e8f0;
            border-radius: 2px;
            overflow: hidden;
        `;
        
        const strengthFill = document.createElement('div');
        strengthFill.style.cssText = `
            height: 100%;
            width: 0%;
            transition: all 0.3s ease;
        `;
        
        const strengthText = document.createElement('div');
        strengthText.style.cssText = `
            font-size: 0.85rem;
            margin-top: 0.25rem;
        `;
        
        strengthDiv.appendChild(strengthFill);
        input.parentElement.appendChild(strengthDiv);
        input.parentElement.appendChild(strengthText);
        
        input.addEventListener('input', function() {
            const value = this.value;
            let strength = 0;
            
            if (value.length >= 8) strength += 25;
            if (/[a-z]/.test(value)) strength += 25;
            if (/[A-Z]/.test(value)) strength += 25;
            if (/[0-9]/.test(value)) strength += 15;
            if (/[^a-zA-Z0-9]/.test(value)) strength += 10;
            
            strengthFill.style.width = strength + '%';
            
            if (strength < 40) {
                strengthFill.style.background = '#f5576c';
                strengthText.textContent = 'Weak password';
                strengthText.style.color = '#f5576c';
            } else if (strength < 70) {
                strengthFill.style.background = '#ff9800';
                strengthText.textContent = 'Medium password';
                strengthText.style.color = '#ff9800';
            } else {
                strengthFill.style.background = '#00f2fe';
                strengthText.textContent = 'Strong password';
                strengthText.style.color = '#00f2fe';
            }
        });
    });
}

// ===================================
// INITIALIZE ALL ENHANCEMENTS
// ===================================

// Wait for DOM and original scripts to load
window.addEventListener('load', function() {
    setTimeout(() => {
        console.log('🚀 Initializing Part 3 enhancements...');
        
        // Add all the new enhancements
        addTypingEffect();
        addRealTimeValidation();
        addFloatingLabels();
        addPasswordStrength();
        
        // Add progress bars to forms
        addFormProgressIndicator('volunteerForm');
        addFormProgressIndicator('sponsorshipForm');
        addFormProgressIndicator('donationForm');
        addFormProgressIndicator('contactForm');
        
        console.log('✓ All Part 3 enhancements loaded successfully!');
        console.log('✓ Typing effects active');
        console.log('✓ Real-time validation active');
        console.log('✓ Form progress indicators active');
        console.log('✓ Enhanced error messages active');
    }, 500);
});

// ===================================
// EXPORT FOR USE IN OTHER SCRIPTS
// ===================================

window.enhancedFormFeatures = {
    showEnhancedError,
    addTypingEffect,
    addRealTimeValidation,
    addFormProgressIndicator,
    showFormLoading
};

console.log('📦 Enhanced form features module loaded');
