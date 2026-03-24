

document.addEventListener("DOMContentLoaded", function () {

    console.log("Home page loaded");


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
       2) HERO BUTTON CLICK MESSAGE
     */

    const orderBtn = document.querySelector(".btn-order");
    const visitBtn = document.querySelector(".btn-visit");

    if (orderBtn) {

        orderBtn.addEventListener("click", function () {

            alert("Redirecting to Order page...");

        });

    }

    if (visitBtn) {

        visitBtn.addEventListener("click", function () {

            alert("Opening Contact page...");

        });

    }


    /* 
       3) DRINK CARD CLICK MESSAGE
     */

    const drinkCards = document.querySelectorAll(".drink-card");

    drinkCards.forEach(function (card) {

        card.addEventListener("click", function () {

            const drinkName = card.querySelector("h3").textContent;

            alert("You selected: " + drinkName);

        });

    });


    /* 
       4) NEWSLETTER EMAIL VALIDATION
     */

    const subscribeForm = document.querySelector(".subscribe-form");

    if (subscribeForm) {

        subscribeForm.addEventListener("submit", function (event) {

            const emailInput = subscribeForm.querySelector("input");

            if (emailInput.value.trim() === "") {

                alert("Please enter your email");
                event.preventDefault();

            }

            else if (!emailInput.value.includes("@")) {

                alert("Please enter a valid email");
                event.preventDefault();

            }

            else {

                alert("Subscribed successfully!");

            }

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