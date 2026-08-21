
const formPage = document.getElementById('sign-up-form');
const firstName = document.getElementById("first-name")
const lastName = document.getElementById("last-name");
const  emailAddress = document.getElementById("email")
const password = document.getElementById("password");
const rePassword = document.getElementById("re-enter-password")



formPage.addEventListener("submit", (event) => {
    event.preventDefault();


    //All value in the input field
    const fname = firstName.value.trim();
    const lname = lastName.value.trim();
    const emailVal = emailAddress.value.trim();
    const pword = password.value.trim();
    const rePword = rePassword.value.trim();

    // if (!firstName.value.trim() || !lastName.value.trim() ||!emailAddress.value.trim() || !password.value.trim() || !rePassword.value.trim()) {
    //     alert('All fields are required Sir');
    //     return;
    // }

    if (fname === "") {

        alert('All fields are required Sir');
        firstName.classList.add('wrong')
        return;
    }
    if (lname === "") {

        alert('All fields are required Sir');
        lastName.classList.add('wrong')
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


    if (!emailAddress.value.includes('@gmail.com')) {
        
        alert("Your email address does not have include");
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
        //meant to be the dashboard
          window.location.href = 'Craft-website.html';
      }, 1000);
      
})

//remove erroor
const allInput = [firstName, lastName, emailAddress, password, rePassword];

allInput.forEach(input => {
    input.addEventListener('click', () => {
        if (input.classList.contains('wrong')) {
            input.classList.remove('wrong');
            input.value = "";
        }
    })
})