document.addEventListener("DOMContentLoaded", () => {
    // Загружаем список продуктов из LocalStorage
    const products = JSON.parse(localStorage.getItem("products")) || [];

    const productNameInput = document.getElementById("productName");
    const reviewTextInput = document.getElementById("reviewText");
    const addReviewButton = document.getElementById("addReview");
    const reviewsList = document.getElementById("reviewsList");

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
    });

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
});
