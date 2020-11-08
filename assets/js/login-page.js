const register_form = document.getElementById("register-form"),
    login_form = document.getElementById("login-form");

function enterAnim(elem, anim_duration) {
    elem.animate({
        opacity: [0, 1],
        transform: ['scale(0)', 'scale(1)']
    }, {
        delay: anim_duration,
        duration: anim_duration,
        fill: "forwards"
    });
}

function exitAnim(elem, anim_duration) {
    elem.animate({
        opacity: [1, 0],
        transform: ['scale(1)', 'scale(0)']
    }, {
        duration: anim_duration,
        fill: "forwards"
    });
}

function registerFormShow() {
    exitAnim(login_form, 300);
    enterAnim(register_form, 300);
    setTimeout(() => {
        login_form.setAttribute('hidden', '');
        register_form.removeAttribute('hidden');
    }, 300);
}

function loginFormShow() {
    exitAnim(register_form, 300);
    enterAnim(login_form, 300);
    setTimeout(() => {
        register_form.setAttribute('hidden', '');
        login_form.removeAttribute('hidden');
    }, 300);
}

function togglePasswordView(elem) {
    pwd_box = elem.parentElement.children[0];
    if (pwd_box.hasAttribute('show')) {
        pwd_box.type = 'password'; //hide password
        pwd_box.removeAttribute('show');
        elem.querySelector('img').src = 'assets/img/icons/eye-closed.png';
    } else {
        pwd_box.type = 'text'; //show password
        pwd_box.setAttribute('show', '');
        elem.querySelector('img').src = 'assets/img/icons/eye-opened.png';
    }
}