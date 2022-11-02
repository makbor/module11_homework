function getSumFun(a){              
    return function(b){
      return a + b;
    }
  }
  
  const sumFun = getSumFun(10);
  const sum = sumFun(11);
  
  console.log(sum)