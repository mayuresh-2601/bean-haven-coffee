

document.addEventListener("DOMContentLoaded", function () {

    console.log("Payment page loaded");


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
       2) CARD NUMBER FORMAT (ADD SPACES)
     */

    const cardNumberInput = document.querySelector('input[name="cardnumber"]');

    if (cardNumberInput) {

        cardNumberInput.addEventListener("input", function () {

            let value = cardNumberInput.value.replace(/\D/g, "");

            value = value.substring(0, 16);

            let formatted = value.match(/.{1,4}/g);

            if (formatted) {
                cardNumberInput.value = formatted.join(" ");
            }

        });

    }


    /* 
       3) CVV LENGTH CHECK
     */

    const cvvInput = document.querySelector('input[name="cvv"]');

    if (cvvInput) {

        cvvInput.addEventListener("input", function () {

            if (cvvInput.value.length > 3) {

                cvvInput.value = cvvInput.value.slice(0, 3);

            }

        });

    }


    /* 
       4) EXPIRY DATE FORMAT (MM/YY)
     */

    const expiryInput = document.querySelector('input[name="expiry"]');

    if (expiryInput) {

        expiryInput.addEventListener("input", function () {

            let value = expiryInput.value.replace(/\D/g, "");

            if (value.length >= 2) {

                value = value.substring(0, 4);

                expiryInput.value =
                    value.substring(0, 2) +
                    (value.length > 2 ? "/" + value.substring(2) : "");

            }

        });

    }


    /* 
       5) FORM VALIDATION
     */

    const form = document.querySelector(".payment-form");

    if (form) {

        form.addEventListener("submit", function (event) {

            const name = form.querySelector('input[name="cardname"]');
            const card = form.querySelector('input[name="cardnumber"]');
            const expiry = form.querySelector('input[name="expiry"]');
            const cvv = form.querySelector('input[name="cvv"]');

            let valid = true;


            /* Name check */

            if (name.value.trim() === "") {

                alert("Please enter card holder name");
                valid = false;

            }


            /* Card number check */

            if (card.value.replace(/\s/g, "").length !== 16) {

                alert("Card number must be 16 digits");
                valid = false;

            }


            /* Expiry check */

            if (expiry.value.length !== 5) {

                alert("Enter expiry date in MM/YY format");
                valid = false;

            }


            /* CVV check */

            if (cvv.value.length !== 3) {

                alert("CVV must be 3 digits");
                valid = false;

            }


            /* Stop form if invalid */

            if (!valid) {

                event.preventDefault();

            }

            else {

                alert("Payment successful!");

            }

        });

    }


    /* 
       6) AUTO FOCUS FIRST FIELD
     */

    const firstInput = document.querySelector('input[name="cardname"]');

    if (firstInput) {

        firstInput.focus();

    }

});