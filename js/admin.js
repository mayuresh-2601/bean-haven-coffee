/* CHECK LOGIN */

if (
    sessionStorage.getItem("isLoggedIn")
    !== "true"
) {

    window.location.href =
        "admin-login.html";

}




document.addEventListener("DOMContentLoaded", function () {

    console.log("Admin page loaded successfully");

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
       
       2) LOAD PRODUCTS FROM STORAGE
       
    */

    let products = JSON.parse(localStorage.getItem("products")) || [];

    const tableBody = document.getElementById("productTableBody");

    const totalProductsElement = document.getElementById("totalProducts");
    const totalOrdersElement = document.getElementById("totalOrders");
    const totalRevenueElement = document.getElementById("totalRevenue");

    /* 
       
       3) DISPLAY PRODUCTS
       
    */

    function displayProducts() {

        tableBody.innerHTML = "";

        products.forEach(function (product, index) {

            const row = document.createElement("tr");

            row.innerHTML = `
                <td>
                    <img 
                        src="image/${product.image}" 
                        class="table-image"
                        alt="${product.name}">
                </td>

                <td>
                    ${product.name}
                </td>

                <td>
                    ₹${product.price}
                </td>

                <td>
                    ${product.category}
                </td>

                <td>
                    <button 
                        class="delete-btn"
                        data-index="${index}">
                        Delete
                    </button>
                </td>
            `;

            tableBody.appendChild(row);

        });

        updateStats();

    }

    /* 
       
       4) UPDATE DASHBOARD STATS
       
    */

    function updateStats() {

        totalProductsElement.textContent =
            products.length;

        let totalRevenue = 0;

        products.forEach(function (product) {

            totalRevenue +=
                Number(product.price);

        });

        totalRevenueElement.textContent =
            "₹" + totalRevenue;

        /* Example orders count */

        totalOrdersElement.textContent =
            Math.floor(products.length * 2);

    }

    /* 
       
       5) ADD PRODUCT
       
    */

    const productForm =
        document.querySelector(".product-form");

    if (productForm) {

        productForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();

                const name =
                    productForm.querySelector(
                        'input[name="productName"]'
                    );

                const price =
                    productForm.querySelector(
                        'input[name="productPrice"]'
                    );

                const category =
                    productForm.querySelector(
                        'select[name="productCategory"]'
                    );

                const image =
                    productForm.querySelector(
                        'input[name="productImage"]'
                    );

                let valid = true;

                /* Name validation */

                if (name.value.trim() === "") {

                    alert("Please enter product name");
                    valid = false;

                }

                /* Price validation */

                if (
                    price.value === "" ||
                    price.value <= 0
                ) {

                    alert("Enter valid price");
                    valid = false;

                }

                /* Category validation */

                if (category.value === "") {

                    alert("Select category");
                    valid = false;

                }

                /* Image validation */

                if (image.value.trim() === "") {

                    alert("Enter image file name");
                    valid = false;

                }

                if (!valid) {
                    return;
                }

                const newProduct = {

                    name:
                        name.value,

                    price:
                        price.value,

                    category:
                        category.value,

                    image:
                        image.value

                };

                products.push(newProduct);

                localStorage.setItem(
                    "products",
                    JSON.stringify(products)
                );

                alert(
                    "Product added successfully!"
                );

                productForm.reset();

                displayProducts();

            }
        );

    }

    /* 
       
       6) DELETE PRODUCT
       
    */

    tableBody.addEventListener(
        "click",
        function (event) {

            if (
                event.target.classList.contains(
                    "delete-btn"
                )
            ) {

                const index =
                    event.target.getAttribute(
                        "data-index"
                    );

                if (
                    confirm(
                        "Delete this product?"
                    )
                ) {

                    products.splice(index, 1);

                    localStorage.setItem(
                        "products",
                        JSON.stringify(products)
                    );

                    displayProducts();

                }

            }

        }
    );

    /* 
       
       7) SCROLL ANIMATION
       
    */

    const sections =
        document.querySelectorAll("section");

    sections.forEach(function (section) {

        section.style.opacity = "0";

        section.style.transform =
            "translateY(40px)";

        section.style.transition =
            "0.5s ease";

    });

    window.addEventListener(
        "scroll",
        function () {

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

        }
    );

    /* 
       
       INITIAL LOAD
       
    */

    displayProducts();

});