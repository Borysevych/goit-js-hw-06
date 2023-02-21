const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', (e) => {
    e.preventDefault();

    const {
        elements: { email, password } } = e.currentTarget;
    const formData = {
        Login: email.value,
        Password: password.value
    };
    
    if (email.value === '' || password.value === '') {
        return alert('Всі поля повинні бути заповнені')
    } else {
        console.log(formData);
        e.currentTarget.reset();
    }
});