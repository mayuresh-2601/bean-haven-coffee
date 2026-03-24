

document.addEventListener("DOMContentLoaded", function () {

    console.log("Products page loaded");


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
       2) MENU ITEM CLICK MESSAGE
     */

    const menuItems = document.querySelectorAll(".menu-item");

    menuItems.forEach(function (item) {

        item.addEventListener("click", function () {

            const name =
                item.querySelector(".item-name").textContent;

            alert("You selected: " + name);

        });

    });


    /* 
       3) ORDER BUTTON CLICK MESSAGE
     */

    const orderButtons = document.querySelectorAll(".order-btn");

    orderButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const product =
                button
                .closest(".menu-item")
                .querySelector(".item-name")
                .textContent;

            console.log("Ordering:", product);

            alert(product + " added to your order");

        });

    });


    /* 
       4) SIMPLE PRICE DISPLAY
     */

    const prices =
        document.querySelectorAll(".item-price");

    prices.forEach(function (price) {

        price.addEventListener("click", function () {

            alert("Price: " + price.textContent);

        });

    });


    /* 
       5) SCROLL ANIMATION
     */

    const sections = document.querySelectorAll("section");

    sections.forEach(function (section) {

        section.style.opacity = "0";
        section.style.transform =
            "translateY(40px)";
        section.style.transition =
            "0.5s ease";

    });

    window.addEventListener("scroll", function () {

        const trigger =
            window.innerHeight * 0.85;

        sections.forEach(function (section) {

            const top =
                section.getBoundingClientRect().top;

            if (top < trigger) {

                section.style.opacity = "1";
                section.style.transform =
                    "translateY(0)";

            }

        });

    });

});