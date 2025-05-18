document.addEventListener("DOMContentLoaded", function() {
  const signupForm = document.getElementById("signup-form");
  const loginForm = document.getElementById("login-form");
  const formContainer = document.getElementById("form-container");

  document.getElementById("signup-link").addEventListener("click", function() {
    formContainer.style.display = "block";
    signupForm.style.display = "block";
    loginForm.style.display = "none";
  });

  document.getElementById("login-link").addEventListener("click", function() {
    formContainer.style.display = "block";
    loginForm.style.display = "block";
    signupForm.style.display = "none";
  });

  document.getElementById("toggle-login").addEventListener("click", function() {
    signupForm.style.display = "none";
    loginForm.style.display = "block";
  });

  document.getElementById("toggle-signup").addEventListener("click", function() {
    loginForm.style.display = "none";
    signupForm.style.display = "block";
  });
});

function signup() {
  const username = document.getElementById("signup-username").value;
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  if (username && email && password) {
    localStorage.setItem(email, JSON.stringify({ username, password }));
    alert("Sign-up successful! You can now log in.");
  } else {
    alert("Please fill in all fields.");
  }
}

function login() {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;
  const storedData = localStorage.getItem(email);

  if (storedData) {
    const { username, password: storedPassword } = JSON.parse(storedData);
    if (password === storedPassword) {
      alert(`Welcome back, ${username}!`);
    } else {
      alert("Incorrect password.");
    }
  } else {
    alert("Account not found. Please sign up.");
  }
}

function togglePassword(fieldId) {
  const field = document.getElementById(fieldId);
  field.type = field.type === "password" ? "text" : "password";
}
