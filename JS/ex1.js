let arr = [NaN, 3, 7, 7, 4, 0, null, "sda", 0];

  
function getEvenOrOdd(){
  let a = 0;    //счётчик для чётных
  let b = 0;    //счётчик для нечётных
  let c = 0;    //счётчик для 0

  for(let i = 0; i < arr.length; i++){          //проверка, есть ли 0 в массиве
    if (arr[i] === 0 ){
      c++;
    }else {
      if (arr[i] != null && arr[i] % 2 == 0){   //находит чётные значения
        a++
      } else if (arr[i] % 2 == 1){              //находит нечётные значения
        b++
      }
    }
  }
  console.log("В этом массиве – " + a + " четных элементов");
  console.log("В этом массиве – " + b + " нечетных элементов");
  console.log("Нулевых элементов – " + c);
}

getEvenOrOdd();