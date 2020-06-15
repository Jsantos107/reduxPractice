// Using the .test() method
let myString = "Hello, aliens!";
let myRegex = /aliens/;
let result = myRegex.test(myString);

// console.log(result)
// result = true

// Match Literal Strings
let story = "Somewhere JJ is hiding in this text. We don't need to find jj or Jj.";
let findCharacter = /JJ/;
let result2 = findCharacter.test(story);

// console.log(result2)
// result = true