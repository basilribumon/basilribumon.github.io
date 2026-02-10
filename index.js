document.addEventListener("DOMContentLoaded", function() {

    // --- 1. Navbar Toggle ---
    const menuToggle = document.getElementById("mobile-menu");
    const navLinks = document.getElementById("nav-links");

    menuToggle.addEventListener("click", function() {
        navLinks.classList.toggle("active");
    });

    // --- 2. Scroll to Projects ---
    const projectBtn = document.getElementById("btn-projects");
    projectBtn.addEventListener("click", function() {
        document.getElementById("project").scrollIntoView({
            behavior: "smooth"
        });
    });

    // --- 3. Resume Download Alert ---
    const resumeBtn = document.getElementById("resumebtn");
    resumeBtn.addEventListener("click", function() {
        // You can link this to a real file later
        const confirmDownload = confirm("Do you want to download the resume?");
        if(confirmDownload) {
            // window.location.href = "path/to/resume.pdf";
            console.log("Downloading...");
        }
    });

    // --- 4. Contact Form Validation ---
    const form = document.getElementById("contactForm");
    
    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Stop default reload first

        let name = document.getElementById("name").value.trim();
        let phone = document.getElementById("phone").value.trim();
        let email = document.getElementById("email").value.trim();
        let message = document.getElementById("message").value.trim();

        // Check empty fields
        if (!name || !phone || !email || !message) {
            alert("Please fill all fields");
            return;
        }

        // Email regex check
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address");
            return;
        }

        // Confirmation
        if(!confirm("Are you sure you want to send this message?")) {
            return;
        }

        let subject = "Contact from Portfolio Website";
        let body = 
            `Name: ${name}%0D%0A` +
            `Phone: ${phone}%0D%0A` +
            `Email: ${email}%0D%0A%0D%0A` +
            `Message:%0D%0A${message}`;

        // Send
        window.location.href = `mailto:basilribumon@gmail.com?subject=${subject}&body=${body}`;
        
        // Optional: clear form after send
        form.reset();
    });

});