import {
  bubbleSort,
  insertionSortBetter,
  selectionSort,
  mergeSort,
} from "./sorting.js";

let inputs = document.querySelectorAll("[class^='numbers']");
let outputs = document.querySelectorAll("[id^='number']");
let numbers = [];

for (let input of inputs) {
  let number = input.textContent.split(",").map((item) => {
    return parseInt(item);
  });
  numbers.push(number);
}

document.getElementById("bubble").addEventListener("click", () => {
  for (let i = 0; i < numbers.length; i++) {
    let result = bubbleSort(numbers[i]);
    outputs[i].textContent = result.join(", ");
  }
});
