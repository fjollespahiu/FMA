const email = document.querySelector('#email');
const password = document.querySelector('#password');
const errorMsg = document.querySelector('#errorMsg');
const loginBTN = document.querySelector('#loginBTN');

loginBTN.addEventListener('click', (e) => {
    e.preventDefault();
    if (email.value === 'info@futureminds.io' && password.value === 'Fma#2025') {
        window.location.href = "dashboard.html"
    }
    else { errorMsg.textContent = 'Wrong Credentials' };
})

