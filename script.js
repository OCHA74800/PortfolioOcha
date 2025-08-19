// Ambil elemen form dan input
const form = document.getElementById('contact-form');
const nameInput = form.name;
const emailInput = form.email;
const messageInput = form.message;
const successMsg = document.getElementById('success-message');

// Ambil elemen error
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const messageError = document.getElementById('message-error');

// Fungsi validasi email
function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Event submit form
form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Reset pesan error & sukses
    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';
    successMsg.textContent = '';

    let valid = true;

    // Validasi nama
    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Please enter your name.';
        valid = false;
    }

    // Validasi email
    if (!validateEmail(emailInput.value.trim())) {
        emailError.textContent = 'Please enter a valid email address.';
        valid = false;
    }

    // Validasi pesan
    if (messageInput.value.trim() === '') {
        messageError.textContent = 'Please enter your message.';
        valid = false;
    }

    // Jika semua valid
    if (valid) {
        successMsg.textContent = 'Thank you! Your message has been sent.';
        form.reset();
    }
});
