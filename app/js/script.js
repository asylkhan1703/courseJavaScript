'use strict';

let
    btnStart = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    daybudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthsavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearsavingsValue = document.getElementsByClassName('yearsavings-value')[0],


    expensesItem = document.getElementsByClassName('expenses-item'),
    expensesBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    inputExpenses = document.querySelectorAll('optionalexpenses-item'),
    Income = document.querySelector('#income'),
    savings = document.querySelector('#savings'),
    sum = document.querySelector('#sum'),
    percent = document.querySelector('#percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

let money, time;

btnStart.addEventListener('click', function () {
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
    money = +prompt('Ваш бюджет на месяц?', '');

    while (isNaN(money) || money == "" || money == null) {
        money = prompt('Ваш бюджет на месяц?', '');
    }
    appData.timeDate = time;
    appData.budget = money;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
});

expensesBtn.addEventListener('click', () => {

    let sum = 0;

    for (let i = 0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value,
            b = expensesItem[++i].value;

        if ((typeof (a)) === 'string' &&
            (typeof (a)) != null &&
            (typeof (b)) != null &&
            a != '' &&
            b != '' &&
            a.length < 50 &&
            b.length < 10) {
            console.log("done");
            appData.expenses[a] = b;
            sum += +b;
        } else {
            console.log("bad result");
            i = i - 1;
        }
    }
    expensesValue.textContent = sum;
});

optionalExpensesBtn.addEventListener('click', () => {
    for (let i = 1; i <= inputExpenses.length; i++) {
        let opt = inputExpenses[i].value;
        appData.optionalExpenses[i] = opt;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
    } 
});

let appData = {
    budget: money,
    timeDate: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function () {

    },
    chooseOptExpenses: function () {
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert('Ежедневный бюджет:' + appData.moneyPerDay + 'руб.');
    },
    delectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log('Минимальный уровень достатка');
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log('Средний уровень достатка');
        } else if (appData.moneyPerDay < 2000) {
            console.log('Высокий уровень достатка');
        } else {
            console.log('Произошла ошибка');
        }
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?", ''),
                percent = +prompt("Под какой процент?", '');
            appData.monthIncome = ((save / 100 * percent) / 12);
            alert("Доход в месяц с вашего депозита" + appData.monthIncome);
        }
    },
    chooseIncome: function () {

        let items = prompt("Что принесет дополнительный доход? (перечислите через запятую)", "");

        if (typeof (items) != 'string' || items == "" || typeof (items) == null) {
            console.log("Вы ввели некорректные данные или не ввели их вовсе");
        } else {
            appData.income.push(prompt("Может что-то еще?"));
            appData.income = items.split(", ");
            appData.income.sort();
        }
        appData.income.forEach(function (item, i) {
            alert("Способы дополнительного заработка: " + (i + 1) + "-способ " + item);
        });
    }
};


for (let key in appData) {
    console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
}



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

console.log(typeof(infinity))