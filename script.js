document.addEventListener("DOMContentLoaded", () => {
    // Text Carousel Placeholder
});

document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

const contactForm = document.querySelector(".contact-form");
contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you for reaching out! I will get back to you soon.");
    contactForm.reset();
});
