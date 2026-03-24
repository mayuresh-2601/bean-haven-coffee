

document.addEventListener("DOMContentLoaded", function () {

    console.log("Order page loaded");


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
       2) QUANTITY LIMIT CHECK
     */

    const quantityInput = document.querySelector('input[name="quantity"]');

    if (quantityInput) {

        quantityInput.addEventListener("input", function () {

            if (quantityInput.value < 1) {
                quantityInput.value = 1;
            }

            if (quantityInput.value > 10) {

                alert("Maximum quantity is 10");

                quantityInput.value = 10;

            }

        });

    }


    /* 
       3) FORM VALIDATION
     */

    const form = document.querySelector(".order-form");

    if (form) {

        form.addEventListener("submit", function (event) {

            const name = form.querySelector('input[name="fullname"]');
            const coffee = form.querySelector('select[name="coffee"]');
            const quantity = form.querySelector('input[name="quantity"]');
            const address = form.querySelector('textarea[name="address"]');

            let valid = true;


            /* Name check */

            if (name.value.trim() === "") {

                alert("Please enter your name");

                valid = false;

            }


            /* Coffee selection check */

            if (coffee.value === "") {

                alert("Please select a coffee");

                valid = false;

            }


            /* Quantity check */

            if (quantity.value <= 0) {

                alert("Quantity must be at least 1");

                valid = false;

            }


            /* Address check */

            if (address.value.trim() === "") {

                alert("Please enter delivery address");

                valid = false;

            }


            /* Stop form if invalid */

            if (!valid) {

                event.preventDefault();

            }

            else {

                alert("Order placed successfully!");

            }

        });

    }


    /* 
       4) AUTO FOCUS FIRST FIELD
     */

    const firstInput = document.querySelector('input[name="fullname"]');

    if (firstInput) {

        firstInput.focus();

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