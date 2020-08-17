'use strict';

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}
start();

const appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function chooseExpenses() {
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
}
chooseExpenses();
function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert('Ежедневный бюджет равен: ' + appData.moneyPerDay);
}
detectDayBudget();

function detectLevel() {
    if (appData.moneyPerDay > 5000) {
        console.log('Богатый');
    } else if (appData.moneyPerDay > 1000 && appData.moneyPerDay <= 5000) {
        console.log('Обеспеченный');
    } else if (appData.moneyPerDay < 1000) {
        console.log('Бедный');
    } else {
        console.log('Произошла ошибка');
    }
}

function checkSavings() {
    let save, percent;
    if (appData.savings == true) {
        save = +prompt('Какая сумма вашего депозита?', '');
        percent = +prompt('Под какой процент?', '');
        
        appData.monthIncome = (save / 12) * (percent / 100);

        alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
    }
}
checkSavings();

function chooseOptExpenses() {
    for (let i = 1; i < 4; i++) {
        let OptExpenses = prompt('Статья необязательных расходов?', '');
        appData.optionalExpenses[i] = OptExpenses;
    }
}


