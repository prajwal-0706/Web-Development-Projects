let buttons = document.querySelectorAll(".btn");
const Display = document.querySelector(".input");
let curr = "";
let arr = [];
let i = 0;
let result;
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let btn = button.textContent;
    switch (btn) {
      case "AC":
        curr = "";
        i = 0;
        arr = [];
        Display.value = "";
      break;

      case "_":
        curr = curr.substring(0, curr.length - 1);
        Display.value = curr;
      break;

      case "+":
      case "-":
      case "*":
      case "/":
        arr.push(curr);
        i++;
        arr.push(btn);
        Display.value += btn;

        i++;
        curr = "";
      break;

      case "=":
        arr.push(curr);
        i++;
        Result();
        result = 0;
      break;

      default:
        curr += btn;
        Display.value += button.textContent;
      break;

    }
  });
});
const Result = () => {

  let leng = arr.length -1;

  let op1 = parseFloat(arr[0]);

  for (let k=1; k<leng; k++) {
    if (k%2!=0) {
    switch (arr[k]) {
        case '+':
          op1 = op1 + parseFloat(arr[k+1]);
        break;

        case '-':
          op1 = op1 - parseFloat(arr[k+1]);
        break;

        case '*':
          op1 = op1 * parseFloat(arr[k+1]);
        break;

        case "/":
          op1 = op1 / parseFloat(arr[k+1]);
        break;

        case "%":
          op1 = ((op1/parseFloat(arr[k+1]))*100);
        break;
      }
    }
  }
  Display.value = op1;
  arr = [];
  curr = "";
}
