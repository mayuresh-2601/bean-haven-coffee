

document.addEventListener("DOMContentLoaded", function () {

    console.log("About page loaded successfully");

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
       2) TEAM CARD CLICK MESSAGE
     */

    const teamCards = document.querySelectorAll(".team-card");

    teamCards.forEach(function (card) {

        card.addEventListener("click", function () {

            const name = card.querySelector("h3").textContent;

            alert("You clicked on " + name);

        });

    });


    /* 
       3) GALLERY IMAGE CLICK ZOOM EFFECT
     */

    const galleryImages = document.querySelectorAll(".gallery-container img");

    galleryImages.forEach(function (image) {

        image.addEventListener("click", function () {

            image.style.transform = "scale(1.15)";

            setTimeout(function () {
                image.style.transform = "scale(1)";
            }, 300);

        });

    });


    /* 
       4) SCROLL ANIMATION FOR SECTIONS
     */

    const sections = document.querySelectorAll("section");

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


    /* 
       5) INITIAL STYLE FOR ANIMATION
     */

    sections.forEach(function (section) {

        section.style.opacity = "0";
        section.style.transform = "translateY(40px)";
        section.style.transition = "0.5s ease";

    });

});