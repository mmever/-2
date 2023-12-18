const firstName = 'Иван';
const lastName = 'Иванов';
const middleName = 'Иванович';
const birthYear = 1990;
const direction = 'Программирование';

// Конкатенация строк с помощью оператора плюс +
const result1 =  'Имя: ' + firstName + '\nФамилия: ' + lastName + '\nОтчечтво: ' + middleName + '\nГод рождения: ' + birthYear + '\nНаправление: ' + direction;

// Конкатенация строк с помощью бэктиков ``
const result2 = `Имя: ${firstName} \nФамилия: ${lastName} \nОтчество: ${middleName} \nГод рождения: ${birthYear}, \nНаправление: ${direction}`;

// Вывод в консоль
console.log("Способ 1:");
console.log(result1);

console.log("\nСпособ 2:");
console.log(result2);
