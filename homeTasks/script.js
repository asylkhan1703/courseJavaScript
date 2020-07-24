'use strict';

let money, time;

function start() {
    money = +prompt('Ваш бюджет на месяц?', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    while (money == isNaN() || money == "" || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }
}
start();

let appData = {
    budget: money,
    timeDate: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
            b = prompt("Во сколько обойдется?", '');

        if ((typeof (a)) === 'string' &&
            (typeof (a)) != null &&
            (typeof (b)) != null &&
            a != '' &&
            b != '' &&
            a.length < 50 &&
            b.length < 10) {
            console.log("done");
            appData.expenses[a] = b;
        } else {
            console.log("bad result");
            i--;
        }
    }
}
chooseExpenses();

function chooseOptExpenses() {

    for (let i = 1; i <= 3; i++) {
        let a = prompt("Статья необязательных расходов?", '');
        appData.optionalExpenses[i] = a;
        console.log(appData.optionalExpenses[i]);
    }

    
}
chooseOptExpenses();

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert('Ежедневный бюджет:' + appData.moneyPerDay + 'руб.');
}
detectDayBudget();

function delectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log('Минимальный уровень достатка');
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log('Средний уровень достатка');
    } else if (appData.moneyPerDay < 2000) {
        console.log('Высокий уровень достатка');
    } else {
        console.log('Произошла ошибка');
    }
}
delectLevel();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?", ''),
            percent = +prompt("Под какой процент?", '');
        appData.monthIncome = ((save / 100 * percent) / 12);
        alert("Доход в месяц с вашего депозита" + appData.monthIncome);
    }
}
checkSavings();

// let i = 0;

// while (i > 2) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//         b = prompt("Во сколько обойдется?", '');
//     if (
//         (typeof (a)) === 'string' && 
//         (typeof (a)) != null && 
//         (typeof (a)) != null && 
//         a != '' && 
//         b != '' && 
//         a.length < 50 && 
//         b.length < 10
//         ) {

//         console.log("done");
//         appData.expenses[a] = b;

//     } else {
//         console.log("bad result");
//         i--;
//     }
//     i++;
// }

