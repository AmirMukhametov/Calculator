let buttonSum = document.getElementById('btnSum'),
    buttonSubt = document.getElementById('btnSubt'),
    buttonMult = document.getElementById('btnMult'),
    buttonDivi = document.getElementById('btnDivi'),
    buttonRound = document.getElementById('btnRound'),
    buttonCeil = document.getElementById('btnCeil'),
    buttonFloor = document.getElementById('btnFloor'),
    buttonAbsolute = document.getElementById('btnAbsolute'),
    buttonMaximum = document.getElementById('btnMax'),
    buttonMinimum = document.getElementById('btnMin'),
    buttonSin = document.getElementById('btnSin'),
    buttonCos = document.getElementById('btnCos'),
    buttonTan = document.getElementById('btnTan'),
    buttonSec = document.getElementById('btnSec'),    
    buttonCosec = document.getElementById('btnCosec'),
    buttonCot = document.getElementById('btnCot'),
    buttonSqrt = document.getElementById('btnSqrt'),
    buttonPower = document.getElementById('btnPow'),
    buttonRandom = document.getElementById('btnRand'),
    buttonLog = document.getElementById('btnLog'),
    resultOne = document.getElementById('result1'),
    resultTwo = document.getElementById('result2');


//Дрочево 
function getNumbersArray (count) {
    let numbers = [];
    for (let i = 0; i < count; i++) {
        let quest = prompt('Введите число', '');
        let number;
        if (quest === 'string') {
            number = Number(quest);
            return number;
        } else if (quest === null) {
            return alert('Вы отменили');
        } else if (quest == "") {
            return alert('Вы не написали');
        } else {
            return console.log("Ошибка");
        }
        return numbers.push(number);
    }
    console.log(numbers);
    return numbers;

}    

btn.addEventListener('click', function() {
    alert('Эта функция суммирует числа');
    getNumbersArray(2);
    let a = numbers[0],
        b = numbers[1];
    let res = a + b;
    resultArea.innerText = 'Сумма ' + a + ' и ' + b + ' равно ' + res;
});





//Вопрос

// let ques = (a, b) => {
//     let a = +prompt('Введите первое число', ''),
//         b = +prompt('Введите второе число', '');
// }

// buttonSum.addEventListener('click', () => {
//     alert('Это функция, которая возвращает сложение двух чисел');
//     let a = +prompt('Введите первое число', ''),
//          b = +prompt('Введите второе число', '');


//     function sum(a, b) {
//         let res = a + b;
//         resultOne.innerHTML = 'Сложение двух чисел ' + a + ' и ' + b + ' равно ' + res;
//     }
// });

// //Суммирование
// buttonSum.addEventListener('click', function() {
//     alert('Это функция, которая возвращает сложение двух чисел');
//     ques(a, b);
//     if(isFinite(a) || isFinite(b)) {
//         sum(a, b);
//         function sum(a, b) {
//             let res = a + b;
//             resultOne.innerHTML = 'Сложение двух чисел ' + a + ' и ' + b + ' равно ' + res;
//         }
//     } else {
//         resultOne.innerHTML = 'Невозможно посчитать';
//     }
    
    
// });

//Вычитание
buttonSubt.addEventListener('click', function() {
    alert('Это функция, которая возвращает результат вычитания двух чисел');
    let a = +prompt('Введите первое число', ''),
        b = +prompt('Введите второе число', '');
    subt(a, b);
    function subt(a, b) {
        let res = a - b;
        resultOne.innerHTML = 'Вычитание двух чисел ' + a + ' и ' + b + ' равно ' + res;
    }
});

//Умножение
buttonMult.addEventListener('click', function() {
    alert('Это функция, которая возвращает результат умножения двух чисел');
    let a = +prompt('Введите первое число', ''),
        b = +prompt('Введите второе число', '');
    mult(a, b);
    function mult(a, b) {
        let res = a * b;
        resultOne.innerHTML = 'Умножение двух чисел ' + a + ' и ' + b + ' равно ' + res;
    }
});

//Деление
buttonDivi.addEventListener('click', function() {
    alert('Это функция, которая возвращает частное при делении двух чисел');
    let a = +prompt('Введите первое число', ''),
        b = +prompt('Введите второе число', '');
    divi(a, b);
    function divi(a, b) {
        let res = a / b;
        resultOne.innerHTML = 'Деление двух чисел ' + a + ' и ' + b + ' равно ' + res;
    }
});

//Округление RoundOf
buttonRound.addEventListener('click', function() {
    alert('Это функция, которая возвращает значение округления для заданного числа');
    let a = +prompt('Введите число', '');
    round(a);
    function round(a) {
        let res = Math.round(a);
        resultOne.innerHTML = 'Окгругление ' + 'значения ' + a + ' равно ' + res;
    }
});

//Окргулениев большую сторону
buttonCeil.addEventListener('click', function() {
    alert('Это функция, которая возвращает следующее по велечине значение заданного числа');
    let a = +prompt('Введите число', '');
    ceil(a);
    function ceil(a) {
        let res = Math.ceil(a);
        resultOne.innerHTML = 'Следующее значение ' + a + ' равно ' + res;
    }
});

//Округление в меньшую сторону
buttonFloor.addEventListener('click', function() {
    alert('Это функция, которая возвращает предыдущее наибольшее целое значение заданного числа');
    let a = +prompt('Введите число', '');
    floor(a);
    function floor(a) {
        let res = Math.floor(a);
        resultOne.innerHTML = 'Предыдущее наибольшее целое ' + a + ' равно ' + res;
    }
});

//Абсолютное значение
buttonAbsolute.addEventListener('click', function() {
    alert('Это функция-модуль из числа, которая преобразует отрицательное значение в положительное значение');
    let a = +prompt('Введите число', '');
    absolute(a);
    function absolute(a) {
        let res = Math.abs(a);
        return resultOne.innerHTML = 'Абсолютное значение ' + a + ' равно ' + res;
    }
});

//Максимальное значение
buttonMaximum.addEventListener('click', function() {
    alert('Это функция сравнит введенные чила и вернет наибольшее из них');
    let a = +prompt('Введите число', '');
    max(a);
    function max(a) {
        let res = Math.max([a]);
        return resultOne.innerHTML = 'Абсолютное значение ' + a + ' равно ' + res;
    }
});

buttonMinimum.addEventListener('click', function() {
    alert('Это функция сравнит введенные чила и вернет наибольшее из них');
    let a = +prompt('Введите число', '');
    min(a);
    function min(a) {
        let res = Math.min(a);
        return resultOne.innerHTML = 'Абсолютное значение ' + a + ' равно ' + res;
    }
});

//Научный калькулятор



//Синус
buttonSin.addEventListener('click', function() {
    alert('Эта функция, которая находит значение sin числа в радианах');
    let a = +prompt('Введите число', '');
    sin(a);
    function sin(a) {
        let res = Math.sin(a);
        resultTwo.innerHTML = 'Значение sin для ' + a + ' равно ' + res;
    }
});

//Косинус
buttonCos.addEventListener('click', function() {
    alert('Эта функция, которая находит значение cos числа в радианах');
    let a = +prompt('Введите число', '');
    cos(a);
    function cos(a) {
        let res = Math.cos(a);
        resultTwo.innerHTML = 'Значение cos для ' + a + ' равно ' + res;
    }
});

//Тангенс
buttonTan.addEventListener('click', function() {
    alert('Эта функция, которая находит касательное значение числа в радианах');
    let a = +prompt('Введите число', '');
    tan(a);
    function tan(a) {
        let res = Math.tan(a);
        resultTwo.innerHTML = 'Касательное значение ' + a + ' равно ' + res;
    }
});

//Sec
buttonSec.addEventListener('click', function() {
    alert('Эта функция, которая находит секущее значение числа в радианах');
    let a = +prompt('Введите число', '');
    sec(a);
    function sec(a) {
        let res = Math.sec(a);
        resultTwo.innerHTML = 'Секущее значение ' + a + ' равно ' + res;
    }
});

//Cosec
buttonCosec.addEventListener('click', function() {
    alert('Эта функция, которая находит значение cosec числа в радианах');
    let a = +prompt('Введите число', '');
    cosec(a);
    function cosec(a) {
        let res = Math.cosec(a);
        resultTwo.innerHTML = 'Значение cosec ' + a + ' равно ' + res;
    }
});

//Cot
buttonCot.addEventListener('click', function() {
    alert('Эта функция, которая находит значение cot числа в радианах');
    let a = +prompt('Введите число', '');
    cot(a);
    function cot(a) {
        let res = Math.cot(a);
        resultTwo.innerHTML = 'Значение cot ' + a + ' равно ' + res;
    }
});

//Квадратный корень
buttonSqrt.addEventListener('click', function() {
    alert('Эта функция, которая находит квадратный корень из числа');
    let a = +prompt('Введите число', '');
    sqrt(a);
    function sqrt(a) {
        let res = Math.sqrt(a);
        resultTwo.innerHTML = 'Квадратный корень из числа ' + a + ' равно ' + res;
    }
});

//Возведение в степень
buttonPower.addEventListener('click', function() {
    alert('Эта функция, которая возводит число в степень');
    let a = +prompt('Введите число', ''),
        b = +prompt('Введите степень', '');
    pow (a, b);
    function pow(a, b) {
        let res = Math.pow(a, b);
        resultTwo.innerHTML = 'Число ' + a + ' в степени ' + b + ' равно ' + res;
    }
});

// //Рандом
// buttonRandom.addEventListener('click', function() {
//     alert('Эта функция вернет слуйчаное значение, сгенерированное между входным диапазоном');
//     let a = +prompt('Введите минимальное значение', ''),
//         b = +prompt('Введите максимальное значение', '');
//     random (min, max);
//     function random(min, max) {
//         let res = (min, max) => {
//             Math.floor(Math.random() * (max - min + 1)) + min;
//           }
//         resultTwo.innerHTML = 'Случайное значение, генерируемое между ' + a + ' и ' + b  + ' равно '  + res;
//     }
// });


//Логарифм
buttonLog.addEventListener('click', function() {
    alert('Эта функция вернет логарифмическое значение числа');
    let a = +prompt('Введите число', '');
    log (a);
    function log(a) {
        let res = Math.log(a);
        resultTwo.innerHTML = 'Логарифмическое значение ' + a + ' равно '  + res;
    }
});

