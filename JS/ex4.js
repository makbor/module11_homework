function numbers(start, end){
    let i = start;
    let timer = setInterval(function(){
      console.log(i);
      if(i == end){
        clearInterval(timer);
      } else{
      i++};
    },1000);
  }
  
  numbers(10,15)