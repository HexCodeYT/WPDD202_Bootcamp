const contactForm = document.getElementById("contactForm");
const messageField = document.getElementById("message");
const charCount = document.getElementById("charCount");
const formStatus = document.getElementById("formStatus");

// Live character counter

messageField.addEventListener("input", () => {
  const currentLength = messageField.value.length;
  charCount.textContent = `${currentLength} / 500 characters`;
});

// Form submission

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const fullName = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const service = document.getElementById("service").value;
  const message = messageField.value.trim();

  if (fullName.length < 2) {
    alert("Please enter your full name.");
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    alert("Please enter a valid email address.");
    return;
  }

  if (subject.length < 3) {
    alert("Please enter a subject.");
    return;
  }

  if (service === "") {
    alert("Please select a service.");
    return;
  }

  if (message.length < 20) {
    alert("Message must be at least 20 characters long.");
    return;
  }

  formStatus.textContent = "Sending message...";
  formStatus.style.color = "#e67e22";

  setTimeout(() => {
    formStatus.textContent = "✓ Message sent successfully!";
    formStatus.style.color = "#27ae60";

    contactForm.reset();
    charCount.textContent = "0 / 500 characters";
  }, 1500);
});

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;

    answer.classList.toggle("active");
  });
});
