function fizzbuzz(num) {

  for (var i = 1; i <= num; i++) {
    let result = "";
    
    if (i % 3 !== 0 && i % 5 !== 0) {
      result = i;
    }
    
    if (i % 3 == 0) {
      result = "Fizz";
    } 
    
    if (i % 5 == 0) {
      result += "Buzz";
    }
    
    console.log(result);
  }
}

console.log(fizzbuzz(100));