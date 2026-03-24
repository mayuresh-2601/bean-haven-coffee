

document.addEventListener("DOMContentLoaded", function () {

    console.log("Career page loaded");


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
       2) JOB CARD CLICK MESSAGE
     */

    const jobCards = document.querySelectorAll(".job-card");

    jobCards.forEach(function (card) {

        card.addEventListener("click", function () {

            const title = card.querySelector(".job-title").textContent;

            alert("You selected position: " + title);

        });

    });


    /* 
       3) FORM VALIDATION
     */

    const form = document.querySelector(".application-form");

    if (form) {

        form.addEventListener("submit", function (event) {

            const inputs = form.querySelectorAll("input");
            const select = form.querySelector("select");
            const fileInput = form.querySelector('input[type="file"]');

            let valid = true;


            /* Check empty fields */

            inputs.forEach(function (input) {

                if (input.value.trim() === "") {

                    alert("Please fill all fields");
                    valid = false;

                }

            });


            /* Check position selected */

            if (select.value === "") {

                alert("Please select a position");
                valid = false;

            }


            /* Check file uploaded */

            if (fileInput.files.length === 0) {

                alert("Please upload your resume");
                valid = false;

            }


            /* Stop submit if invalid */

            if (!valid) {

                event.preventDefault();

            }
            else {

                alert("Application submitted successfully!");

            }

        });

    }


    /* 
       4) FILE TYPE CHECK (PDF ONLY)
     */

    const resumeInput = document.querySelector('input[type="file"]');

    if (resumeInput) {

        resumeInput.addEventListener("change", function () {

            const file = resumeInput.files[0];

            if (file) {

                const fileName = file.name.toLowerCase();

                if (!fileName.endsWith(".pdf")) {

                    alert("Please upload PDF file only");

                    resumeInput.value = "";

                }

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