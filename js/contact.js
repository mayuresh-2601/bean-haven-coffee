

document.addEventListener("DOMContentLoaded", function () {

    console.log("Contact page loaded");


    /* 
       1) NAVIGATION ACTIVE LINK
     */

    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.forEach(function (item) {
                item.classList.remove("active");
            });

            this.classList.add("active");

        });

    });


    /* 
       2) FORM VALIDATION
     */

    const form = document.querySelector(".contact-form");

    if (form) {

        form.addEventListener("submit", function (event) {

            const name = form.querySelector('input[type="text"]');
            const email = form.querySelector('input[type="email"]');
            const phone = form.querySelector('input[type="tel"]');
            const message = form.querySelector("textarea");

            let valid = true;


            /* Check empty fields */

            if (name.value.trim() === "") {
                alert("Please enter your name");
                valid = false;
            }

            if (email.value.trim() === "") {
                alert("Please enter your email");
                valid = false;
            }

            if (phone.value.trim() === "") {
                alert("Please enter your phone number");
                valid = false;
            }

            if (message.value.trim() === "") {
                alert("Please write your message");
                valid = false;
            }


            /* Simple email check */

            if (!email.value.includes("@")) {
                alert("Please enter a valid email");
                valid = false;
            }


            /* Stop form if invalid */

            if (!valid) {
                event.preventDefault();
            }
            else {
                alert("Message sent successfully!");
            }

        });

    }


    /* 
       3) PHONE NUMBER LENGTH CHECK
     */

    const phoneInput = document.querySelector('input[type="tel"]');

    if (phoneInput) {

        phoneInput.addEventListener("input", function () {

            if (phoneInput.value.length > 10) {
                phoneInput.value = phoneInput.value.slice(0, 10);
            }

        });

    }


    /* 
       4) MAP IMAGE CLICK EFFECT
     */

    const mapImage = document.querySelector(".map-box img");

    if (mapImage) {

        mapImage.addEventListener("click", function () {

            alert("Opening map location");

        });

    }


    /* 
       5) SCROLL ANIMATION
     */

    const sections = document.querySelectorAll("section");

    sections.forEach(function (section) {

        section.style.opacity = "0";
        section.style.transform = "translateY(40px)";
        section.style.transition = "0.5s ease";

    });

    window.addEventListener("scroll", function () {

        const trigger = window.innerHeight * 0.85;

        sections.forEach(function (section) {

            const top = section.getBoundingClientRect().top;

            if (top < trigger) {

                section.style.opacity = "1";
                section.style.transform = "translateY(0)";

            }

        });

    });

});