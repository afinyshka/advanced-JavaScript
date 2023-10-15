class MyClass {
    #newValue = 0; // приватное свойство которое защищено извне, при обращение выкинет ошибку,
    // если _newValue то ошибки не будет, негласное правило только

    // Геттер для получения значения приватного поля
    get value() {
        return this.#newValue;
    }

    // Сеттер для установки значения приватного поля
    set value(newValue) {
        if (newValue < 0) throw new Error("Отрицательное значение");
        this.#newValue = newValue;
    }

    increment() {
        this.#newValue++;
    }

    constructor(val) {
        this.#newValue = val;
    }
}

const myObject = new MyClass(30);


console.log(myObject.value); // 0

myObject.value = 42;
console.log(myObject.value); // 42

myObject.value = -5; // Значение должно быть неотрицательным.
console.log(myObject.value); // 42 (не изменилось)


// console.log(myObject.#newValue); // Uncaught SyntaxError: Private field '#newValue'
// must be declared in an enclosing class (at script1.js:35:21)



// Аналогичная запись:
// ?. (оператор условного доступа) и оператора ?? (оператор объединения с null). 
// const defaultValue = user?.otherValue ?? 'Default'
// const defaultValue = user !== null && user !== undefined && user.otherValue !== null && user.otherValue !== undefined ? user.otherValue : 'Default';

