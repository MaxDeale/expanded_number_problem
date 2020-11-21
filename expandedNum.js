function expanded_form(num) {
  //turn given number into an array
  let numArr = num.toString().split("");
  //create output variable for final string to be returned
  let finalStr = "";
  //loop through array, with an index value
  numArr.forEach((current, index) => {
    //create variable to determine the current number of zeros that need to be added
    let zeroAmount = numArr.length - index - 1;
    //create a string with the correct amount of zeros
    for (let x = 0; x < zeroAmount; x++) {
      current += "0";
    }
    //concatenate the final string variable with the current value and plus symbol
    //FIND OUT HOW TO TAKE AWAY LAST PLUS LOL
    finalStr += current + " + ";
  });
  //USE A STRING METHOD TO TAKE AWAY LAST 2 CHARS
  finalStr = finalStr.substring(0, finalStr.length - 2);
  console.log(finalStr);
}

expanded_form(1450);
expanded_form(12);
expanded_form(8345345);
