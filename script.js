// PRISM English Hub - Main JavaScript

document.addEventListener("DOMContentLoaded", () => {

    // ==========================
    // Mobile Navigation
    // ==========================

    const menuBtn = document.querySelector(".menu-btn");
    const navMenu = document.querySelector("nav");

    if (menuBtn && navMenu) {
        menuBtn.addEventListener("click", () => {
            navMenu.classList.toggle("active");
        });
    }


    // ==========================
    // Smooth Scrolling
    // ==========================

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener("click", function(e) {

            const target = document.querySelector(
                this.getAttribute("href")
            );

            if (target) {
                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }

        });
    });


    // ==========================
    // Course Card Animation
    // ==========================

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        card.addEventListener("mouseenter", () => {
            card.classList.add("active-card");
        });

        card.addEventListener("mouseleave", () => {
            card.classList.remove("active-card");
        });

    });


    // ==========================
    // Reveal Animation On Scroll
    // ==========================

    const sections = document.querySelectorAll(
        ".section, .card, .about, .hero"
    );

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    }, {
        threshold: 0.15
    });


    sections.forEach(section => {
        observer.observe(section);
    });


    // ==========================
    // WhatsApp Button Tracking
    // ==========================

    const whatsappBtn = document.querySelector(".whatsapp-btn");

    if (whatsappBtn) {

        whatsappBtn.addEventListener("click", () => {

            console.log(
                "WhatsApp enquiry button clicked"
            );

        });

    }


    // ==========================
    // Current Year Footer
    // ==========================

    const year = document.querySelector("#year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }


    console.log(
        "PRISM English Hub website loaded successfully!"
    );

});
