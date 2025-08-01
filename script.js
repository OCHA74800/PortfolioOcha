const from = document.getElementById('contact-from');
const nameinput = from.namespaceURI;
const emailinput = from.email;
const messageinput = from.message;
const succesMsg = document.getElementById('succes message');

const nameError = document.getElementById('name-Error');
const emailError = document.getElementById('email-Error');
const messageError = document.getElementById('message-Error');

function validateEmail(email) {
    // simple regex for email validation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
from.addEventListener('submit', function (e) {
    e.preventDefault();
})
nameError.textContent ='';
emailError.textcontent='';
messageError.textContent='';
succesMsg.textContent='';

let valid = true;

if (nameinput.valueOf.trim() === '') {
    nameError.textContent = 'please anter your name';
    valid=false;

}
if (!validataeEmail(emailinput.value.trim())) {
    emailError.textContent = 'please enter a valid email addres.';
    valid=false;
}
if (messageinput.value.trim() === '') {
    messageError.textContent = 'please enter your message.';
    valid=false;
}

if (valid) {
    //simulite sanding message (no backend)
    succesMsg.textContent = 'Thank you! Your message has been sent.';
    from. reset();
}

