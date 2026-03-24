

document.addEventListener("DOMContentLoaded", function () {

    console.log("Blog page loaded successfully");

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
       2) READ MORE BUTTON MESSAGE
     */

    const readMoreButtons = document.querySelectorAll(".read-more");

    readMoreButtons.forEach(function (button) {

        button.addEventListener("click", function (event) {

            event.preventDefault();

            alert("Full blog article will open here.");

        });

    });


    /* 
       3) BLOG CARD CLICK EFFECT
     */

    const blogCards = document.querySelectorAll(".blog-card");

    blogCards.forEach(function (card) {

        card.addEventListener("click", function () {

            const title = card.querySelector("h3").textContent;

            alert("Opening article: " + title);

        });

    });


    /* 
       4) POPULAR POSTS HOVER COLOR CHANGE
     */

    const popularPosts = document.querySelectorAll(".popular-list li");

    popularPosts.forEach(function (post) {

        post.addEventListener("mouseenter", function () {
            post.style.color = "#d2691e";
        });

        post.addEventListener("mouseleave", function () {
            post.style.color = "";
        });

    });


    /* 
       5) SCROLL ANIMATION FOR SECTIONS
     */

    const sections = document.querySelectorAll("section");

    function showSections() {

        const trigger = window.innerHeight * 0.85;

        sections.forEach(function (section) {

            const top = section.getBoundingClientRect().top;

            if (top < trigger) {

                section.style.opacity = "1";
                section.style.transform = "translateY(0)";

            }

        });

    }

    window.addEventListener("scroll", showSections);

    /* Initial hidden style */

    sections.forEach(function (section) {

        section.style.opacity = "0";
        section.style.transform = "translateY(40px)";
        section.style.transition = "0.5s ease";

    });

});