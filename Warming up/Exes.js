//EXES and Ohs
function XO(str) {
  let xCount = 0;
  let oCount = 0;

  // Iterate through each character in the string
  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase(); // Convert to lowercase

    if (char === "x") {
      xCount++;
    } else if (char === "o") {
      oCount++;
    }
  }

  let count = xCount === oCount ? true : false;
  console.log(count);

  //   if (xCount === oCount) {
  //     return true;
  //   } else {
  //     return false;
  //   }
}

// Example usage
XO("xxoo");
XO("xxxoo");
XO("ooooox");
