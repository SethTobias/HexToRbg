function convertToHex() {
  let input = document.querySelector("input").value;
  let hexInputs = input.split("");
  for (let n = 0; n < hexInputs.length; n++) {
    if (hexInputs[n] == "A") {
      hexInputs[n] = "10";
    } else if (hexInputs[n] == "B") {
      hexInputs[n] = "11";
    } else if (hexInputs[n] == "C") {
      hexInputs[n] = "12";
    } else if (hexInputs[n] == "D") {
      hexInputs[n] = "13";
    } else if (hexInputs[n] == "E") {
      hexInputs[n] = "14";
    } else if (hexInputs[n] == "F") {
      hexInputs[n] = "15";
    } else {
      console.log(hexInputs[n]);
    }
  }
  let r = parseInt(hexInputs[0] * 16) + parseInt(hexInputs[1]);
  let g = parseInt(hexInputs[2] * 16) + parseInt(hexInputs[3]);
  let b = parseInt(hexInputs[4] * 16) + parseInt(hexInputs[5]);
  document.querySelector(
    ".colorOut"
  ).innerText = `The RGB value of the HEX value #${input} is rgb(${r},${g},${b})`;
  rgbBackground = `rgb(${r},${g},${b})`;
  console.log(rgbBackground);
  document.querySelector(".color").style.backgroundColor = rgbBackground;
}
let colorOut = document.querySelector("input");
colorOut.addEventListener("change", () => convertToHex());
