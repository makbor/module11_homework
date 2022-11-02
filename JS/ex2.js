function getPrimeNumber(number){
  
    let isPrime = true;
    let res;
    
    if (number <= 1000 && number > 1){        // проверка числа на условия задачи
      for(let i = 2; i < number; i++){        
        if(number % i ===0){                  // проверка, является ли число простым (простое число является простым, если оно без остатка делится на 1 и на само себя)
          isPrime = false;
        }
      }
    } else {
         console.log("Данные неверны");       // значения, которые выходят за диапозон 1000 >= number > 1 получают данное сообщение
      return;
    }
    
    console.log(result = isPrime ? `${number} – простое число` : `${number} – составное число`)  // вывод результата при помощи тернарного оператора 
  }
  
  getPrimeNumber(73);
  