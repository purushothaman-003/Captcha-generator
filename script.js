let captchaText = '';

function generateCaptcha() {
    const charsArray = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lengthOtp = 6;
    let captcha = '';
    for (let i = 0; i < lengthOtp; i++) {
        const index = Math.floor(Math.random() * charsArray.length);
        captcha += charsArray[index];
    }
    captchaText = captcha;
    document.getElementById('captcha').innerText = captcha;
}

function validateCaptcha() {
    const userCaptcha = document.getElementById('captchaInput').value;
    if (userCaptcha === captchaText) {
        alert('You entered a valid captcha.');
    } else {
        alert('You entered an invalid captcha.');
    }
}

window.onload = generateCaptcha;
