const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', (e) => {
    e.preventDefault();

    const {
        elements: { email, password } } = e.currentTarget;
    if (email.value === '' || password.value === '') {
        return alert('Всі поля повинні бути заповнені')
    } else {
        e.currentTarget.reset();
    }
});