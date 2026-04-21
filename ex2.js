// Перевірка, чи число в діапазоні [10, 50]
function isInRange(num, min, max) {
    return num >= min && num <= max;
}

// Використання оператора NOT (!)
let isActive = true;
isActive = !isActive; // Змінює на false

console.log(isInRange(25, 10, 50)); // true
console.log("Стан isActive:", isActive); // false