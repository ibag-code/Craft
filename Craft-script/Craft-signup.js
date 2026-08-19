




const formPage = document.getElementById('sign-up-form')



formPage.addEventListener("submit", (event) => {
    event.preventDefault();

    const firstName = document.getElementById("first-name")
    const lastName = document.getElementById("last-name");
    const  emailAddress = document.getElementById("email")
    const password = document.getElementById("password");
    const rePassword = document.getElementById("re-enter-password")

    // alert('All fields are required.');

    if (!firstName.value.trim() || !lastName.value.trim() ||!emailAddress.value.trim() || !password.value.trim() || !rePassword.value.trim()) {
        alert('All fields are required.');
        return;
    }

    if (password.value.length < 8) {
          alert('Password must be at least 8 characters long.');
          password.classList.add('wrong')
          rePassword.classList.add('wrong')
          return;
    }

     if (password.value !== rePassword.value) {
          alert('Passwords do not match.');
          password.classList.add('wrong')
          rePassword.classList.add('wrong')
          return;
    }


    if (!emailAddress.value.includes('@')) {
        alert("Wrong Email Address");
        emailAddress.classList.add('wrong')
        return;
    }



      const users = JSON.parse(localStorage.getItem('users')) || [];

      users.push({
        email: emailAddress.value,
        password: password.value
        });

      localStorage.setItem('users', JSON.stringify(users));

      alert('User signed up successfully!');

      setTimeout(() => {
          window.location.href = 'Craft-website.html';
      }, 1000);
})


const allInput = [ firstName, lastName, emailAddress, password, rePassword];

allInput.forEach(input => {
    input.addEventListener('input', () => {
        if (input.classList.contain('wrong')) {
            input.classList.remove('wrong');
            input.value = "";
        }
    })
})