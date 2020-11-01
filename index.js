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
  sortArray(bubbleSort);
});

document.getElementById("insert").addEventListener("click", () => {
  sortArray(insertionSortBetter);
});

document.getElementById("select").addEventListener("click", () => {
  sortArray(selectionSort);
});

document.getElementById("merge").addEventListener("click", () => {
  sortArray(mergeSort);
});

function sortArray(callback) {
  for (let i = 0; i < numbers.length; i++) {
    let result = callback(numbers[i]);
    outputs[i].textContent = result.join(", ");
  }
}
