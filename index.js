document.addEventListener("DOMContentLoaded", function () {
  // ==========================
  // Mobile Menu
  // ==========================
  const menuToggle = document.getElementById("mobile-menu");
  const navLinks = document.getElementById("nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
      navLinks.classList.toggle("active");
    });
  }

  // ==========================
  // Scroll to Projects
  // ==========================
  const projectBtn = document.getElementById("btn-projects");

  if (projectBtn) {
    projectBtn.addEventListener("click", function () {
      const projectSection = document.getElementById("project");
      if (projectSection) {
        projectSection.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  }

  // ==========================
  // Resume Button
  // ==========================
  const resumeBtn = document.getElementById("resumebtn");

  if (resumeBtn) {
    resumeBtn.addEventListener("click", function () {
      const ok = confirm("Do you want to download the resume?");
      if (ok) {
        console.log("Downloading...");
      }
    });
  }

  // ==========================
  // Contact Form
  // ==========================
  const form = document.getElementById("contactForm");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (name === "" || phone === "" || email === "" || message === "") {
        alert("Please fill all fields.");
        return;
      }

      if (!/^[0-9]{10}$/.test(phone)) {
        alert("Enter a valid 10-digit phone number.");
        return;
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert("Enter a valid email address.");
        return;
      }

      const whatsappNumber = "919847328745";

      const text = `*📩 New Portfolio Contact*

👤 Name: ${name}

📞 Phone: ${phone}

📧 Email: ${email}

💬 Message:
${message}`;

      const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

      window.open(url, "_blank");

      form.reset();
    });
  }
});
