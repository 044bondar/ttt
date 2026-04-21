function isInRange(num, min, max) {
    return num >= min && num <= max;
}

let isActive = true;
isActive = !isActive;

console.log(isInRange(25, 10, 50));
console.log("Стан isActive:", isActive);