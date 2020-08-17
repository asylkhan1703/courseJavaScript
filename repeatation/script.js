'use strict';

let money, time,
    start = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value'),
    daybudgetValue = document.getElementsByClassName('daybudget-value'),
    levelValue = document.getElementsByClassName('level-value'),
    expensesValue = document.getElementsByClassName('expenses-value'),
    optionalexpensesValue = document.getElementsByClassName('optionalexpenses-value'),
    incomeValue = document.getElementsByClassName('income-value'),
    monthsavingsValue = document.getElementsByClassName('monthsavings-value'),
    yearsavingsValue = document.getElementsByClassName('yearsavings-value'),
    expensesItem = document.getElementsByClassName('expenses-item'),
    getExpenses = document.getElementsByTagName('button')[0],
    getOptionalExpenses = document.getElementsByTagName('button')[1],
    count = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    chooseIncome = document.querySelector('.choose-income'),
    checkbox = document.querySelector('#savings'),
    sum = document.querySelector('#sum'),
    percent = document.querySelector('#percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');



function start2() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}
start2();

const appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
                b = prompt('Во сколько обойдется?', '');

            if ((typeof (a)) === 'string' &&
                (typeof (a)) != null &&
                (typeof (b)) != null &&
                a != '' &&
                b != '' &&
                a.length < 50) {
                appData.expenses[a] = b;
            } else {
                i--;
            }
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert('Ежедневный бюджет равен: ' + appData.moneyPerDay);
    },
    detectLevel: function() {
        if (appData.moneyPerDay > 5000) {
            console.log('Богатый');
        } else if (appData.moneyPerDay > 1000 && appData.moneyPerDay <= 5000) {
            console.log('Обеспеченный');
        } else if (appData.moneyPerDay < 1000) {
            console.log('Бедный');
        } else {
            console.log('Произошла ошибка');
        }
    },
    checkSavings: function() {
        let save, percent;
        if (appData.savings == true) {
            save = +prompt('Какая сумма вашего депозита?', '');
            percent = +prompt('Под какой процент?', '');

            appData.monthIncome = (save / 12) * (percent / 100);

            alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        for (let i = 1; i < 4; i++) {
            let OptExpenses = prompt('Статья необязательных расходов?', '');
            appData.optionalExpenses[i] = OptExpenses;
        }
    },
    chooseIncome: function() {
        let items = prompt('Что принесет дополнительный доход? (перечислите через запятую', '');

        if ((typeof(items)) === 'string' && items != '' && items != null) {
            appData.income = items.split(', ');
            appData.income.push(prompt('Может что-то еще?', ''));
            appData.income.sort();
            appData.income.forEach(function(income, i) {
                alert('Способы доп. заработка: ' + (i + 1) + ') ' + income);
            });
        } else {
            items = prompt('Что принесет дополнительный доход? (перечислите через запятую', '');
        }
    }
};

function review() {
    for (let key in appData) {
        console.log('Наша программа включает в себя данные: ' + key);
    }      
}
review();
