document
  .querySelector("#signup-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting

    // Clear any previous error messages
    document.querySelector(".error-message")?.remove();

    // Get the input values
    const fullname = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    // Basic form validation
    if (
      fullname === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      const errorMessage = document.createElement("p");
      errorMessage.classList.add("error-message");
      errorMessage.textContent = "All fields are required.";
      document.querySelector("#signup-form").appendChild(errorMessage);
      return;
    }

    // Check if password and confirm password match
    if (password !== confirmPassword) {
      const errorMessage = document.createElement("p");
      errorMessage.classList.add("error-message");
      errorMessage.textContent = "Passwords do not match.";
      document.querySelector("#signup-form").appendChild(errorMessage);
      return;
    }

    // Simulate successful sign-up (for demonstration purposes)
    alert("Sign Up Successful");
    window.location.href = "welcome.html"; // Redirect to a new page (for example)
  });
