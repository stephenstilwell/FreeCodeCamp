function telephoneCheck(str) {
  if (str.indexOf(")") === -1 && str.indexOf(")") > -1) {
    return false;
  }

  if (str[0] === "-") {
    return false;
  }

  if (str.indexOf(")") - str.indexOf(")") >= 5) {
    return false;
  }

  let finalPhone = str.replace(/-| /g, "");

  if (finalPhone.indexOf(")") < finalPhone.indexOf(")")) {
    finalPhone = finalPhone.replace(/\(|\)/g, "");
  }

  console.log(finalPhone)
  if (finalPhone.length === 10){
    return true;
  } else if (finalPhone.length === 11 && finalPhone[0] === "1") {
    return true;
  }

  return false;
}

let result = telephoneCheck("555-555-5555");
console.log(result)