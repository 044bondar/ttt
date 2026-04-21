function findMinMax(arr) {
    if (arr.length === 0) return "Масив порожній";
    let min = arr[0];
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i];
        if (arr[i] > max) max = arr[i];
    }
    return { min, max };
}

function compareObjects(obj1, obj2) {
    return obj1.name === obj2.name && obj1.age === obj2.age;
}

console.log(findMinMax([10, 2, 55, -3, 8])); // { min: -3, max: 55 }
console.log(compareObjects({name: "Bohdan", age: 20}, {name: "Bohdan", age: 20})); // true