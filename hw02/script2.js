/* Вы разрабатываете систему отзывов для вашего веб - сайта.Пользователи могут оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные сообщения, вы решаете установить некоторые ограничения.

Создайте HTML - структуру с текстовым полем для ввода отзыва, кнопкой для отправки и контейнером, где будут отображаться отзывы.

Напишите функцию, которая будет добавлять отзыв в контейнер с отзывами. Однако если длина введенного отзыва менее 50 или более 500 символов, функция должна генерировать исключение.

При добавлении отзыва, он должен отображаться на странице под предыдущими отзывами, а не заменять их.
*/

const initialData = [
    {
        product: "Apple iPhone 13",
        reviews: [
            {
                id: "1",
                text: "Отличный телефон! Батарея держится долго.",
            },
            {
                id: "2",
                text: "Камера супер, фото выглядят просто потрясающе.",
            },
        ],
    },
    {
        product: "Samsung Galaxy Z Fold 3",
        reviews: [
            {
                id: "3",
                text: "Интересный дизайн, но дорогой.",
            },
        ],
    },
    {
        product: "Sony PlayStation 5",
        reviews: [
            {
                id: "4",
                text: "Люблю играть на PS5, графика на высоте.",
            },
        ],
    },
]

// Вы можете использовать этот массив initialData для начальной загрузки данных при запуске вашего приложения.

const reviewsContainer = document.querySelector(".reviews-container")
const reviewInput = document.querySelector(".review-input")
const submitReview = document.querySelector(".submit-review")

submitReview.addEventListener("click", () => {
    const reviewText = reviewInput.value.trim()

    if (reviewText.length < 50 || reviewText.length > 500) {
        alert("Отзыв должен содержать от 50 до 500 символов.")
    } else {
        // Создаем новый отзыв элемент
        const reviewElement = document.createElement("div")
        reviewElement.className = "review"
        reviewElement.textContent = reviewText

        // Добавляем отзыв в контейнер
        reviewsContainer.appendChild(reviewElement)

        // Очищаем поле ввода
        reviewInput.value = ""
    }
})

// Загрузка начальных данных (initialData)
initialData.forEach(product => {
    product.reviews.forEach(review => {
        const reviewElement = document.createElement("div")
        reviewElement.className = "review"
        reviewElement.textContent = review.text
        reviewsContainer.appendChild(reviewElement)
    })
})
