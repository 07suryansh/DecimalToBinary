document.getElementById("btn-convert").addEventListener("click", () => {
    let number = document.getElementById("inputnum").value;
    convertNumberToBinary(number);
    convertNumberToHexadecimal(number);
  });
  document.getElementById("btn-clear").addEventListener("click",()=>{
    document.getElementById("binary").setAttribute("value","");
    document.getElementById("hexadecimal").setAttribute("value","");
    document.getElementById("inputnum").value="";
  })

  function convertNumberToBinary(number) {
    let binaryDigits = [];
    while (number > 0) {
      binaryDigits.push(number % 2);
      number = Math.floor(number / 2);
    }
    let binaryNumber = binaryDigits.reverse().join("");
    document.getElementById("binary").setAttribute("value",binaryNumber);
  }
  function convertNumberToHexadecimal(number) {
    let hexadecimalDigits = [];
    while (number > 0) {
      let remainder = number % 16;
      hexadecimalDigits.push(getHexDigit(remainder));
      number = Math.floor(number / 16);
    }
    let hexadecimalNumber = hexadecimalDigits.reverse().join("");
    document.getElementById("hexadecimal").setAttribute("value",hexadecimalNumber);
  }
  function getHexDigit(remainder) {
        if (remainder < 10) {
        return remainder.toString();
        } else {
        let offset = remainder - 10;
        let letters = ["A", "B", "C", "D", "E", "F"];
        return letters[offset];
    }
  }
  