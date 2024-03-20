let numberOfTries = 5; // Число попыток 


//  Функция генерации рандомного числа
function randomGenerate(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


//  Функция проверки на число
const checkIsNumber = function(number) {
    return (!isNaN(parseFloat(number)) && isFinite(number))
}


//  Функция генерации рандомного числа для НАШЕГО бота
const checkRange = function(number) {
    if (number > 100) {
        return false;
    } else if (number < 1 ) {
        return false;
    } else {
        return true
    }
}

//  Функция проверяет введенное пользователем число на корректность
const getResponse = function() {
    let userResponse;
    while (!checkIsNumber(userResponse) || !checkRange(parseInt(userResponse))) {
        userResponse = prompt('Угадай, какое число от 1 до 100 загадал бот!');
    }
    return parseInt(userResponse);
}



 // Функция проверяет на равенство с загаданным ботом числом
const checkEquality = function(answer, correctAnswer)  {
    if (answer < correctAnswer) {
        alert('Ответ неверный, загаданное число больше');
        return false
    } 
    else if (answer > correctAnswer)
    {
        alert('Ответ неверный, загаданное число меньше');
        return false
    }
    else {
        alert('Ответ верный, поздравляем с победой!');
        return true
    }
}

const randomNumber = randomGenerate(1, 100);


//  ГЛАВНАЯ ФУНКЦИЯ 

const gameBotFunction = function() {
    numberOfTries -= 1; // уменьшает кол-во попыток на -1
    let userInputNumber = getResponse()    // Введенное число пользователем (проверка на корректноть)

    if (numberOfTries === 0) {    
        alert('Какой кошмар, попытки закончились')
        return
    }
    else if (!checkEquality(userInputNumber, randomNumber)) {
        return gameBotFunction()
    }
    else {
        return
    }



}

gameBotFunction()



