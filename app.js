// Using the .test() method
let myString = "Hello, aliens!";
let testing = /aliens/;
let result = testing.test(myString);
// console.log(result)

// Match Literal Strings
let story = "Somewhere JJ is hiding in this text. We don't need to find jj or Jj.";
let findCharacter = /JJ/;
let result2 = findCharacter.test(story);
// console.log(result2)

// Match a Literal String with Different Possibilities
let jj = "JJ is a dog.";
let pet = /dog|cat|bird|fish/;
let result3 = pet.test(jj);
// console.log(result3)

// Ignore Case While Matching
let string = "I will Change for CHANGE, and not just change.";
let findAllCase = /change/i;
let result4 = findAllCase.test(string);
// console.log(result4)

// Extract Matches
let extractStr = "Hello, aliens";
let codingRegex = /aliens/; 
let result5 = extractStr.match(codingRegex); 
// console.log(result5)
