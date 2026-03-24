document.addEventListener("DOMContentLoaded", function () {

    const form =
        document.querySelector(".login-form");

    form.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            const username =
                document.getElementById("username").value;

            const password =
                document.getElementById("password").value;

            const error =
                document.getElementById("error-message");

            /* LOGIN CREDENTIALS */

            const ADMIN_USER = "@mayuresh";
            const ADMIN_PASS = "9082475445";

            if (
                username === ADMIN_USER &&
                password === ADMIN_PASS
            ) {

                /* Save login session */

                sessionStorage.setItem(
                    "isLoggedIn",
                    "true"
                );

                window.location.href =
                    "admin.html";

            }

            else {

                error.textContent =
                    "Invalid username or password";

            }

        }
    );

});