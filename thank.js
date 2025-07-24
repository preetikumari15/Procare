document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const messageBox = document.getElementById("form-message");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    fetch("https://formsubmit.co/ajax/procare309@gmail.com", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: form.name.value,
        email: form.email.value,
        phone: form.phone.value,
        preferredDate: form["preferred-date"].value,
        message: form.message.value
      })
    })
    .then(response => response.json())
    .then(data => {
      form.reset();
      messageBox.innerHTML = "✅ Thank you! Your request has been submitted.";
    })
    .catch(error => {
      messageBox.innerHTML = "❌ Something went wrong. Please try again.";
    });
  });
});
