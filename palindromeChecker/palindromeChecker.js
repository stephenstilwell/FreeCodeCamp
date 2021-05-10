function palindrome(str) {
  let finalString = str.replace(/\W+|_/g, "").toLowerCase();
  let reversedString = finalString.split("").reverse().join("");
  console.log(finalString, reversedString)
  if (finalString != reversedString) {
    return false;
  }
  return true;
}

let result = palindrome("eye")
console.log(result);