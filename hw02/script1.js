/* Представьте, что у вас есть класс для управления библиотекой. В этом классе будет приватное свойство для хранения списка книг, а также методы для добавления книги, удаления книги и получения информации о наличии книги.

Класс должен содержать приватное свойство #books, которое инициализируется пустым массивом и представляет собой список книг в библиотеке.

Реализуйте геттер allBooks, который возвращает текущий список книг.

Реализуйте метод addBook(title), который позволяет добавлять книгу в список. Если книга с таким названием уже существует в списке, выбросьте ошибку с соответствующим сообщением.

Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию. Если книги с таким названием нет в списке, выбросьте ошибку с соответствующим сообщением.

Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке и возвращать true или false в зависимости от того, есть ли такая книга в списке или нет.

Реализуйте конструктор, который принимает начальный список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив не содержит дубликатов; в противном случае выбрасывайте ошибку.
*/

class Library {
    _books = []

    get allBooks() {
        return this._books
    }

    addBook(titleName, authorName) {
        if (this._books.some(book => book.title === titleName)) {
            throw new Error('Такая книга уже имеется в библиотеке')
        }
        this._books.push({ title: titleName, author: authorName })
    }

    removeBook(titleName) {
        const indexToRemove = this._books.findIndex(book => book.title === titleName)
        if (indexToRemove !== -1) {
            this._books.splice(indexToRemove, 1)
        } else {
            throw new Error('Такой книги нет в списке')
        }
    }

    hasBook(titleName) {
        return this._books.some(book => book.title === titleName)
    }

    constructor(bookList) {
        if (Array.isArray(bookList)) {
            const uniqueTitles = new Set()
            bookList.forEach(book => {
                if (!uniqueTitles.has(book.title)) {
                    this._books.push(book)
                    uniqueTitles.add(book.title)
                } else {
                    throw new Error('Найдены дубликаты книг в начальном списке')
                }
            })
        }
    }
}

const initialLib = [
    { title: 'Book 1', author: 'Author 1' },
    { title: 'Book 2', author: 'Author 2' },
    { title: 'Book 3', author: 'Author 3' }
];

const schoolLibrary = new Library(initialLib)

schoolLibrary.addBook('Book 4', 'Author 4') // Добавление новой книги
console.log(schoolLibrary.allBooks)

console.log((schoolLibrary.hasBook('Book 3')) ? "Такая книга есть в бибилиотеке" : 'Такой книги в библионете нет') // Проверка наличия книги

schoolLibrary.removeBook('Book 2') // Удаление книги
console.log(schoolLibrary.allBooks)
