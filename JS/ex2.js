function getPrimeNumber(number){
  
    let isPrime = true;
    let res;
    
    if (number <= 1000 && number > 1){
      for(let i = 2; i < number; i++){
        if(number % i ===0){
          isPrime = false;
        }
      }
    } else {
         console.log("Данные неверны");
      return;
    }
    
    console.log(result = isPrime ? `${number} – простое число` : `${number} – составное число`)
  }
  
  getPrimeNumber(73);
  