
const signForm = document.getElementById("form");
const emailAddress = document.getElementById("email");
const password = document.getElementById("password");


signForm.addEventListener("submit", (event) => {
   event.preventDefault();

  const emailValue = emailAddress.value.trim();
  const passwordValue = password.value.trim();

  emailAddress.classList.remove("wrong");
  password.classList.remove("wrong");

  if (emailValue === "") {
    emailAddress.classList.add("wrong");
    alert("Email is required");
    return;
  }

  if (passwordValue === "") {
    password.classList.add("wrong");
    alert("Password is required");
    return;
  }

  if (passwordValue.length < 8) {
    password.classList.add("wrong");
    alert("Your password must be at least 8 characters");
    return;
  }

  if (!emailValue.includes("@")) {
    emailAddress.classList.add("wrong");
    alert("Wrong email address");
    return;
  }



  const users = JSON.parse(localStorage.getItem("users")) || [];

  const user = users.find((u) => {
    return u.email === emailValue && u.password === passwordValue;
  });

  if (user) {
    localStorage.setItem("loggedInUser", JSON.stringify(user));

    alert("Login successful!");

    setTimeout(() => {
      window.location.href = "Craft-website.html";
    }, 1000);
  } else {
    emailAddress.classList.add("wrong");
    password.classList.add("wrong");
    alert("Invalid email or password");
  }

});

const mainInput =[emailAddress, password];

mainInput.forEach(main => {
    main.addEventListener('click', () => {
        if (main.classList.contains('wrong')) {
            main.classList.remove('wrong')
            main.value=""
        }
    })
})