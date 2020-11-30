// Reverse the string "Josephine"

function reverseString(string) {
    return string.split("").reverse().join("");
}

reverseString("Josephine");

// Reverse the sentence " Josephine likes apples" -> " apples likes Josephine ")

function reverseSentence(string) {
    return string.split(" ").reverse().join(" ");
}

reverseSentence("Josephine likes apples");

// Return the distinct values from the list [1 3 5 3 7 3 1 1 5] -> [1 3 5 7]

function uniqueArray(array) {
  return [...new Set(array)];
}

uniqueArray([1, 3, 5, 3, 7, 3, 1, 1, 5])

// For every letter in the alphabet, log the number of it, except if it's a vowel, then log the same number as previous (a->1, b->2, c->3, d->4, e->4, f->5, ...)

function countNonVowels() {
  let vowels = ["a", "e", "i", "o", "u"];
  let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  let count = 1;
  let countArray = [];
  for (let i = 0; i < alphabet.length; i++) {
    let letter = alphabet[i];
    if (vowels.includes(letter)) {
      countArray.push(count);
    } else {
      count++;
      countArray.push(count);
    }
  }
  return countArray;
}

countNonVowels();

// Do the same as previous, but now for every 5th letter, (E, J, ....) log the letter that comes before it. Ex: at the letter E, log D instead of 4  (a->1, b->2, c->3, d->4, e->D, f->5, ...)

function countNonFifth() {
  let fifth = ["e", "j", "o", "t", "y"];
  let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  let count = 0;
  let countArray = [];
  for (let i = 0; i < alphabet.length; i++) {
    let prevLetter = alphabet[i - 1];
    if (fifth.includes(alphabet[i])) {
      countArray.push(prevLetter);
    } else {
      count++;
      countArray.push(count);
    }
  }
  return countArray;
}

countNonFifth();