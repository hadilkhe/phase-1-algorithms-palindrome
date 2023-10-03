function isPalindrome(word) {

  const cleanWord = word.replace(/[^a-zA-Z]/g, '').toLowerCase();

 
  const reversedWord = cleanWord.split('').reverse().join('');

 
  return cleanWord === reversedWord;
}

// Test cases
console.log("Expecting: true");
console.log("=>", isPalindrome("racecar"));

console.log("");

console.log("Expecting: false");
console.log("=>", isPalindrome("robot"));

module.exports = isPalindrome;
