// Form Submission Script
document.getElementById("signup-form").addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent the default form submission

  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  // Check if passwords match
  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  // Show a success message
  const formContainer = document.querySelector(".signup-container");
  formContainer.innerHTML = `
    <div class="alert alert-success text-center p-4">
      <h3 class="mb-3">Account Created Successfully!</h3>
      <p>You can now <a href="login.html" class="text-primary">log in</a> to your account.</p>
    </div>
  `;
});
