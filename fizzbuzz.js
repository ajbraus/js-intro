
// define a function for the game fizzbuzz

const fizzbuzz = () => {
  // count up
  let counting = true;
  let i = 0;
  while (counting) {
    // if % 5 && 3
    // IF
    if (i % 5 == 0 && i % 3 == 0) {
      // THEN
      console.log("fizzbuzz");

    } else if (i % 5 == 0) {
      console.log("buzz");
    } else if (i % 3 == 0) {
      console.log("fizz");
    } else {
      console.log(i)
    }

    // BOLEAN LOGIC

    // "TED" == "BILL" //=> false
    // "TED" == "TED" //=> true
    // 13 > 34 //=> false
    // 234 >= 234 //=> true
    // 234 >= 200 //=> true
    



    // INCREMENT
    i += 1
    // DECREMENT
    // i -= 1

    if (i == 100) {
      counting = false
    }
  }
}

fizzbuzz();
