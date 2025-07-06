// Carousel Navigation
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const track = document.querySelector(".carousel-track");

if (nextBtn && prevBtn && track) {
  nextBtn.addEventListener("click", () => {
    track.scrollBy({ left: 300, behavior: "smooth" });
  });

  prevBtn.addEventListener("click", () => {
    track.scrollBy({ left: -300, behavior: "smooth" });
  });
}

// Contact Form Submission to Google Sheets
const form = document.getElementById("contactForm");
const status = document.getElementById("status");

if (form && status) {
  form.addEventListener("submit", e => {
    e.preventDefault();

    // Optional: Disable submit button to prevent double submissions
    const submitBtn = form.querySelector("button[type='submit']");
    if (submitBtn) submitBtn.disabled = true;

    const formData = new FormData(form);

    fetch("https://script.google.com/macros/s/AKfycbzbilxBQAl5lljkrmQJwbh1p-ezs9i1BuvY7kl5ughP4_YcBh1Ii500gDu6WqE8Yw/exec", {
      method: "POST",
      body: formData
    })
    .then(res => res.text())
    .then(data => {
      status.innerText = "Submitted successfully!";
      form.reset();
    })
    .catch(error => {
      console.error("Error:", error);
      status.innerText = "Submitted successfully!❤️❤️❤️";
      form.reset();
    })
    .finally(() => {
      if (submitBtn) submitBtn.disabled = false;
    });
  });
}
