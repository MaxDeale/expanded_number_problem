//Good day to the Hyperion code reviewers, please find my (Max Deale) soltion to the "expanded number" problem below:

function expanded_form(num) {
  //turn given number into a string and then into an array
  let numArr = num.toString().split("");
  //create output variable for final string to be returned
  let finalStr = "";
  //loop through array with a forEach with an index value
  numArr.forEach((current, index) => {
    //create variable to determine the current number of zeros that need to be added to the current number (addition to the string)
    let zeroAmount = numArr.length - index - 1;
    //create a string with the correct amount of zeros using an inner loop
    for (let x = 0; x < zeroAmount; x++) {
      current += "0";
    }
    //concatenate the final string variable with the current value and plus symbol
    finalStr += current + " + ";
  });
  //using a string method to remove the final addition symbol
  finalStr = finalStr.substring(0, finalStr.length - 3);
  console.log(finalStr);
  return finalStr;
}

//examples
expanded_form(1450);
expanded_form(12);
expanded_form(52345235);

module.exports = expanded_form;
