




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
          return;
    }

     if (password.value !== rePassword.value) {
          alert('Passwords do not match.');
          return;
    }


    if (!emailAddress.value.includes('@')) {
        alert("Wrong Email Address");
        return;
    }
})