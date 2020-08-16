'use strict';

let money = prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
    b = prompt('Во сколько обойдется?', '');

const appData = {
    budjet: money,
    timeData: time,
    expenses: {
        a: b
    },
    optionalExpenses: '',
    income: '',
    savings: false
};

alert(appData.budjet/30);

