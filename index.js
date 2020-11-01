import {
  bubbleSort,
  insertionSortBetter,
  selectionSort,
  mergeSort,
} from "./sorting.js";

let inputs = document.querySelectorAll("[class^='numbers']");
let numbers = [];

for (let input of inputs) {
  let number = input.textContent.split(",").map((item) => {
    return parseInt(item);
  });
  numbers.push(number);
}
