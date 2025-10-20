document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");
  const successToast = document.getElementById("formSuccess");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let valid = true;

    // Clear previous errors
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    successToast.classList.add("hidden");

    // Validate name
    if (nameInput.value.trim() === "") {
      nameError.textContent = "Name is required.";
      valid = false;
    }

    // Validate email
    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (emailInput.value.trim() === "") {
      emailError.textContent = "Email is required.";
      valid = false;
    } else if (!emailPattern.test(emailInput.value.trim())) {
      emailError.textContent = "Please enter a valid email address.";
      valid = false;
    }

    // Validate message
    if (messageInput.value.trim() === "") {
      messageError.textContent = "Message is required.";
      valid = false;
    }

    // Show success
    if (valid) {
      successToast.classList.remove("hidden");
      form.reset();
    }
  });
});
