function getGradeText(grade) {
    if (grade >= 90) return "Відмінно";
    if (grade >= 75) return "Добре";
    if (grade >= 60) return "Задовільно";
    return "Незадовільно";
}

function getSeasonIf(month) {
    if (month === 12 || month === 1 || month === 2) return "Зима";
    if (month >= 3 && month <= 5) return "Весна";
    if (month >= 6 && month <= 8) return "Літо";
    if (month >= 9 && month <= 11) return "Осінь";
    return "Некоректний місяць";
}

function getSeasonTernary(month) {
    return (month === 12 || month === 1 || month === 2) ? "Зима" :
        (month >= 3 && month <= 5) ? "Весна" :
            (month >= 6 && month <= 8) ? "Літо" :
                (month >= 9 && month <= 11) ? "Осінь" : "Некоректний місяць";
}

console.log(getGradeText(85)); // Добре
console.log(getSeasonIf(4)); // Весна
console.log(getSeasonTernary(11)); // Осінь