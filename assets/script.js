

const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const mobile = document.getElementById('mobile');
const email = document.getElementById('email');
const password = document.getElementById('password');
const submitButton = document.getElementById('submitButton');
const passwordEye = document.getElementById('passwordEye');
const nameRegex = /^[a-z0-9_-]{3,15}$/;
const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
const mobileRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;

let validFields = {
    firstName: false,
    lastName: false,
    mobile: false,
    email: false,
    password: false
};

firstName.addEventListener('keyup', () => {
    validFields.firstName = nameRegex.test(firstName.value);
    if (validFields.firstName) {
        showToast('Valid First Name...');
    } else {
        showToast('Invalid First Name...');
    }
    updateSubmitButton();
});




lastName.addEventListener('keyup', () => {
    validFields.lastName = nameRegex.test(lastName.value);
    if (validFields.lastName) {
        showToast('Valid Last Name...');
    } else {
        showToast('Invalid Last Name...');
    }
    updateSubmitButton();
});

mobile.addEventListener('keyup', () => {
    validFields.mobile = mobileRegex.test(mobile.value);
    if (validFields.mobile) {
        showToast('Valid mobile...');
    } else {
        showToast('Invalid mobile...');
    }
    updateSubmitButton();
})

email.addEventListener('keyup', () => {
    validFields.email = emailRegex.test(email.value);
    if (validFields.email) {
        showToast('Valid email...');
    } else {
        showToast('Invalid email...');
    }
    updateSubmitButton();
})

password.addEventListener('keyup', () => {
    validFields.password = passwordRegex.test(password.value);
    if (validFields.password) {
        showToast('Valid password...');
    } else {
        showToast('Invalid password...');
    }
    updateSubmitButton();
})





function showToast(message, duration = 2000) {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    const toastClose = document.getElementById('toastClose')
    toastMessage.textContent = message;
    toast.classList.remove('hidden');
    setTimeout(() => {
        toast.classList.add('hidden');
    }, duration);
}


function updateSubmitButton() {
    const allFieldsValid = Object.values(validFields).every(Boolean);

    if (allFieldsValid) {
        console.log('All fields are valid!');
        submitButton.classList.remove('cursor-not-allowed');
        submitButton.classList.add('hover:bg-purple-700');
        submitButton.disabled = false;
       

    } else {
        submitButton.classList.remove('hover:bg-purple-700');
        submitButton.classList.add('cursor-not-allowed');
        submitButton.disabled = true;
    }
}
document.getElementById('signupForm').addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('All fields are valid!');

});
toastClose.addEventListener('click', () => {
    toast.classList.add('hidden');
})

passwordEye.addEventListener('click', () => {
    const isPassword = password.type === 'password';
    password.type = isPassword ? 'text' : 'password';
    passwordEye.innerHTML = isPassword
        ? '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>'
        : '<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line>';
});




//////////////////////////////////////////////
const profile = document.getElementById('profile');
const ring = profile.querySelector('.ring');
const ringElements = ring.querySelectorAll('.ring-element');
const pic = profile.querySelector('.pic');
const logosContainer = pic.querySelector('.logos-container');
const svgs = logosContainer.querySelectorAll('a'); 

function handleRingMouseEnter() {
ringElements.forEach((element, index) => {
    let color;
    switch (index) {
        case 0: color = '#00ff0a'; break;
        case 1: color = '#ff0057'; break;
        case 2: color = '#fffd44'; break;
        default: color = '#ffffff';
    }
    element.style.border = `2px solid ${color}`;
    element.style.filter = `drop-shadow(0 0 20px ${color})`;
});
}

function handleRingMouseLeave() {
ringElements.forEach(element => {
    element.style.border = '2px solid #5b5b5b75';
    element.style.filter = 'none';
});
}

function handlePicMouseEnter() {
logosContainer.style.opacity = '1';
logosContainer.style.left = '-70%';
}

function handlePicMouseLeave() {
logosContainer.style.opacity = '0';
logosContainer.style.left = '-40%';
}

ring.addEventListener('mouseenter', handleRingMouseEnter);
ring.addEventListener('mouseleave', handleRingMouseLeave);
pic.addEventListener('mouseenter', handlePicMouseEnter);
pic.addEventListener('mouseleave', handlePicMouseLeave);

svgs.forEach((link, i) => {
link.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('svg clicked', link, i);

    let url = '';
    switch (i) {
        case 0: url = 'https://t.me/MahLaNikookar'; break;
        case 1: url = 'https://github.com/nikmahla'; break;
        case 2: url = 'http://linkedin.com/in/fatemeh-nikookar-b00a28291'; break;
    }
    if (url) {
        window.open(url, '_blank');
    }
});
});

