"use strict"

import "./style.scss";

let form = document.forms.summForm;
let firstValue = form.elements.firstValue;
let secondValue = form.elements.secondValue;
let summ = form.elements.summ;

// Проверка, является ли значение числом
function isInt(val) {
    if ( ( typeof(val) === "number" ) && ( isFinite(val) ) ) {
        return true;
    } else {
        return false;
    }
}

// Проверка данных на корректность (непустые поля, содержащие числа)
function isCorrect(val1, val2) {
    if ( ( val1.length && val2.length ) && ( isInt(+val1) && isInt(+val2) ) ) {
        return true;
    } else {
        return false;
    }
}


// При клике на кнопку (либо при нажатии Enter) выводится сумма двух чисел, либо предупреждение о том, что поля пусты или заполнены неподходящими данными
summ.onclick = function() {
    if ( isCorrect(firstValue.value, secondValue.value) ) {
        alert( (+firstValue.value*10 + +secondValue.value*10) / 10 );   // Выводим результат с округлением для устранения потери точности
    } else {
        alert( 'Введите корректные данные' );
    }
}