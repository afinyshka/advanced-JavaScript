document.addEventListener("DOMContentLoaded", () => {
    // Загрузите список продуктов из LocalStorage
    const products = JSON.parse(localStorage.getItem("products")) || [];

    const productNameInput = document.getElementById("productName");
    const reviewTextInput = document.getElementById("reviewText");
    const addReviewButton = document.getElementById("addReview");
    const productsList = document.getElementById("productsList");
    const reviewsList = document.getElementById("reviewsList");

    // Функция для обновления списка продуктов в выпадающем списке
    function updateProductsList(products) {
        productsList.innerHTML = "";
        products.forEach((product) => {
            const option = document.createElement("option");
            option.value = product.name;
            option.textContent = product.name;
            productsList.appendChild(option);
        });
    }

    // Функция для добавления отзыва
    addReviewButton.addEventListener("click", () => {
        const productName = productNameInput.value;
        const reviewText = reviewTextInput.value;

        if (productName.trim() === "" || reviewText.trim() === "") {
            alert("Заполните название продукта и отзыв.");
            return;
        }

        // Проверим, есть ли уже отзывы для данного продукта
        let products = JSON.parse(localStorage.getItem("products")) || [];
        const productIndex = products.findIndex((product) => product.name === productName);

        if (productIndex === -1) {
            // Если продукта еще нет, добавим его в список
            products.push({ name: productName, reviews: [{ text: reviewText }] });
        } else {
            // Если продукт уже существует, добавим отзыв к нему
            products[productIndex].reviews.push({ text: reviewText });
        }

        // Сохраняем обновленный список продуктов в LocalStorage
        localStorage.setItem("products", JSON.stringify(products));

        // Очищаем поля ввода
        productNameInput.value = "";
        reviewTextInput.value = "";

        // Обновляем список продуктов и отзывов
        updateProductsList(products);
    });


    // Вызовите функцию для обновления списка продуктов
    updateProductsList(products);

    // Функция для обновления списка отзывов по выбранному продукту
    function updateReviews(reviews) {
        reviewsList.innerHTML = "";

        reviews.forEach((review, index) => {
            const reviewItem = document.createElement("div");
            reviewItem.className = "review-item";

            // Отзыв
            const reviewText = document.createElement("p");
            reviewText.textContent = `${index + 1}. ${review.text}`;

            // Кнопка для удаления отзыва
            const deleteButton = document.createElement("button");
            deleteButton.className = "delete-button"; // Добавляем класс для кнопки удаления
            deleteButton.addEventListener("click", () => {
                // Удалить отзыв из списка
                reviews.splice(index, 1);

                // Обновить данные в LocalStorage
                localStorage.setItem("products", JSON.stringify(products));

                // Повторно отобразить отзывы
                updateReviews(reviews);
            });

            reviewItem.appendChild(deleteButton);
            reviewItem.appendChild(reviewText);
            reviewsList.appendChild(reviewItem);
        });
    }

    // Функция для выбора продукта
    productsList.addEventListener("change", () => {
        const selectedProduct = productsList.value;
        const products = JSON.parse(localStorage.getItem("products")) || [];

        // Найдем выбранный продукт в списке
        const selectedProductData = products.find((product) => product.name === selectedProduct);

        if (selectedProductData) {
            // Очищаем список отзывов
            reviewsList.innerHTML = "";

            // // Отображаем отзывы по выбранному продукту
            // updateReviews(selectedProductData.reviews);

            selectedProductData.reviews.forEach((review, index) => {
                const reviewItem = document.createElement("div");
                reviewItem.className = "review-item";

                // Отзыв
                const reviewText = document.createElement("p");
                reviewText.textContent = `${index + 1}. ${review.text}`;

                // Кнопка для удаления отзыва
                const deleteButton = document.createElement("button");
                deleteButton.className = "delete-button"; // Добавляем класс для кнопки удаления
                deleteButton.addEventListener("click", () => {
                    // Удалить отзыв из списка
                    selectedProductData.reviews.splice(index, 1);

                    // Обновить данные в LocalStorage
                    localStorage.setItem("products", JSON.stringify(products));

                    // Повторно отобразить отзывы
                    updateReviews(selectedProductData.reviews);
                });

                reviewItem.appendChild(reviewText);
                reviewItem.appendChild(deleteButton);
                reviewsList.appendChild(reviewItem);
            });
        } else {
            // Если продукт не найден, очистить список отзывов
            reviewsList.innerHTML = "";
        }
    });

    // Функция для удаления отзыва
    reviewsList.addEventListener("click", (event) => {
        if (event.target.tagName === "BUTTON") {
            const selectedProduct = productsList.value;
            const products = JSON.parse(localStorage.getItem("products")) || [];

            // Найдем выбранный продукт в списке
            const selectedProductData = products.find((product) => product.name === selectedProduct);

            if (selectedProductData) {
                // Найдем индекс отзыва в списке отзывов
                const reviewItem = event.target.closest(".review-item");
                if (reviewItem) {
                    const reviewIndex = Array.from(reviewsList.children).indexOf(reviewItem);

                    if (reviewIndex !== -1) {
                        // Удалить отзыв из списка
                        selectedProductData.reviews.splice(reviewIndex, 1);

                        // Обновить данные в LocalStorage
                        localStorage.setItem("products", JSON.stringify(products));

                        // Повторно отобразить отзывы
                        updateReviews(selectedProductData.reviews);
                    }
                }
            }
        }
    });


    // Загрузка списка продуктов при загрузке страницы
    // Загрузка и отображение отзывов по продукту при выборе продукта
});
