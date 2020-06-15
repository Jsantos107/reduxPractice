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

//Find More Than the First Match
let story2 = "Somewhere JJ is hiding in this text. We also need to find jj and Jj.";
let findRegex = /jj/ig;
let result6 = story2.match(findRegex);
// console.log(result6)

// Match Anything with Wildcard Period
let huntStr = "Lets hunt for some pizza";
let hugStr = "I'll hug you";
let huRegex = /hu./;
let result7 = huRegex.test(huntStr);
let result8 =huRegex.test(hugStr);
// console.log(result7, result8)

// Match Single Character with Multiple Possibilities
let quoteSample = "Oooooooooookay, we are going to find all vowels in this sentence EXCEPT for 'o'.";
let vowelRegex = /[aeiu]/gi; // Change this line
let result9 = quoteSample.match(vowelRegex); // Change this line
// console.log(result9)
