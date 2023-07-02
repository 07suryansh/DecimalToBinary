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

  let copyIcon1 = document.getElementById("copyIcon1");
  copyIcon1.addEventListener("click", function() {
    navigator.clipboard.writeText(document.getElementById("binary").value);
    let originalValue=document.getElementById("binary").value;
    document.getElementById("binary").setAttribute("value","copied");
        setTimeout(function() {
          document.getElementById("binary").value = originalValue;
        }, 500);
  });
  let copyIcon2 = document.getElementById("copyIcon2");
  copyIcon2.addEventListener("click", function() {
    navigator.clipboard.writeText(document.getElementById("hexadecimal").value);
    let originalValue=document.getElementById("hexadecimal").value;
    document.getElementById("hexadecimal").setAttribute("value","copied");
        setTimeout(function() {
          document.getElementById("hexadecimal").value = originalValue;
        }, 500);
  });

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
  