document.getElementById("login-form").addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent form submission

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const name = document.getElementById("name")
    ? document.getElementById("name").value.trim()
    : "";

  // Email validation rege
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Validate email
  if (!email) {
    alert("Email is required!");
    return;
  } else if (!emailRegex.test(email)) {
    alert("Please enter a valid email address!");
    return;
  }

  // Validate name (if present)
  if (name && name.length < 2) {
    alert("Name must be at least 2 characters long!");
    return;
  }

  // Validate password
  if (!password) {
    alert("Password is required!");
    return;
  } else if (password.length > 8) {
    alert("Password cannot exceed 8 characters!");
    return;
  }
  if (name && name.length < 2) {
    alert("Name must be at least 2 characters long!");
    return;
  }

  // Validate password for minimum 2 letters
  const lettersOnly = password.replace(/[^a-zA-Z]/g, ""); // Remove non-letter characters
  if (lettersOnly.length <= 2) {
    alert("Password must contain more than 2 letters!");
    return;
  }
  // Display login success message
  const formContainer = document.querySelector(".login-container");
  formContainer.innerHTML = `
    <div class="alert alert-success text-center p-4">
      <h3 class="mb-3">Login Successful!</h3>
       <h3 class="mb-3">Your request has been delivered!</h3>
      <p>Thank you, ${name}. We will get back to you soon.</p>
      <p>Welcome, ${name || email}!</p>
    </div>
  `;
});
