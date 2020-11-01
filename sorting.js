let array = [4, 7, 34, 3445, 99, 64532, 23, 47];

let array2 = [8, 345, 97, 345, 3453453, 67564];

let array3 = [99, 99999, 999999999, 423.5, 423.6, 0.9];

// --- BUBBLE SORT -----

export function bubbleSort(array) {
  let test = false;
  while (test === false) {
    test = true;
    array.map((el, index, array) => {
      if (index < array.length - 1 && el > array[index + 1]) {
        test = false;
        return array.splice(index, 2, array[index + 1], el);
      }
    });
  }

  return array;
}

console.log(bubbleSort(array));

console.log(bubbleSort(array2));

console.log(bubbleSort(array3));

// ----- INSERTION SORT -----

// a) Solution with sorting to new array

function insertionSort(array) {
  let result = [array[0]];

  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < i; j++) {
      if (result[j] >= array[i]) {
        result.splice(j, 0, array[i]);
        break;
      } else if (array[i] > result[j] && j === result.length - 1) {
        result.splice(j + 1, 0, array[i]);
        break;
      }
    }
  }

  // I am going through the input array and every element I compare with elements from result. if i find, that element from array is smaller than element in result, I insert it in the result before that element. otherwise if I came to end of the result and do not find any element bigger than element from input array, i insert it at the end.

  return result;
}

console.log(insertionSort(array));
console.log(insertionSort(array2));
console.log(insertionSort(array3));
console.log(insertionSort([10, 5, 3, 8, 2, 6, 4, 7, 9, 1]));

// b) Solution with sorting inside of original array

export function insertionSortBetter(array) {
  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < i; j++) {
      if (array[j] >= array[i]) {
        array.splice(j, 0, array[i]);
        array.splice(i + 1, 1);
        break;
      }
    }
  }

  // we are just moving elements inside of one array - i have front - ordered - part of array and back - unordered. With index i I am taking the element from unordered part and put it in the ordered - using index j, i compare it with all of the elements of the front - ordered part. When i found, that my element is bigger than element in the ordered part, i insert my element after this 8and remove it from its original place - be aware, that the index of its position increased by one!). When I do not find lower element in ordered part till I get to the beginning (with j=0), i insert my element to the very beginning of the array.

  return array;
}

console.log(insertionSortBetter(array));
console.log(insertionSortBetter(array2));
console.log(insertionSortBetter(array3));
console.log(insertionSortBetter([10, 5, 3, 8, 2, 6, 4, 7, 9, 1]));

// ----- SELECTION SORT -----

export function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let minimum = array[i];

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < minimum) {
        minimum = array[j];
      }
    }

    let index = array.indexOf(minimum);
    array.splice(i, 0, minimum);
    array.splice(index + 1, 1);
  }

  // I am looping through array element after element, use the element at the position as initial minimum and then in inner loop compare it with other elements. When i get at the end global minimum, I insert it at the beginning of array 8at the place of the original minimum) and delete it from its original place

  return array;
}

console.log(selectionSort([10, 5, 3, 8, 2, 6, 4, 7, 9, 1]));
console.log(selectionSort(array));
console.log(selectionSort(array2));
console.log(selectionSort(array3));

// ----- MERGE SORT -----

export function mergeSort(array) {
  if (array.length < 2) {
    return array;
  } else {
    let leftPart = array.slice(0, Math.floor(array.length / 2));
    let rightPart = array.slice(Math.floor(array.length / 2), array.length);
    //console.log(leftPart, rightPart);
    return stitch(mergeSort(leftPart), mergeSort(rightPart));
  }
}

// mergeSort function is doing dividing basically - we divide the array in the half as long as we get just one-item array of the length of 1
// but when we do recursion, we also call the function stitch, that are stitching the arrays back togetehr - so when we get to the state of just single-item arrays (base-state), it will stitch back

function stitch(array1, array2) {
  let result = [];

  while (array1.length > 0 && array2.length > 0) {
    if (array1[0] <= array2[0]) {
      result.push(array1.shift());
    } else {
      result.push(array2.shift());
    }
  }
  while (array1.length > 0) {
    result.push(array1.shift());
  }
  while (array2.length > 0) {
    result.push(array2.shift());
  }

  return result;
}

// stitch part is really just comparing the elements of the two arrays and sort them to the result. we are sorting from the first item (because array1 and array2 are already sorted) and remove the item we put into result from it respective array. Like this, we can set the condition, that this cycle will go as long as both of the array have non-zero length
//when this cycle end, it means, that one of the arrays is empty but the second do not have to be. And because both arrays are presorted, we can just add the rest of the not-empty array at the end of the result
//and because we do not know which will be empty, we need the loop for both cases (everytime just one from the loops at lines 157 and 160 will be executed)
// or we can just return result.concat(array1,array2)

console.log(mergeSort([10, 5, 3, 8, 2, 6, 4, 7, 9, 1]));
console.log(mergeSort(array));
console.log(mergeSort(array2));
console.log(mergeSort(array3));
