const numbers = (start, end) =>{
    let final = start;
  
    for(let i = 1; i < end; i++){
      final = final * start;
    }
    console.log(final);
  }
  
  numbers(5,12)