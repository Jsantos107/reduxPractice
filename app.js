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

// Insensitive flag
let string = "I will Change for CHANGE, and not just change.";
let findAllCase = /change/i;
let result4 = findAllCase.test(string);
// console.log(result4)

// Extract Matches
let extractStr = "Hello, aliens";
let codingRegex = /aliens/;
let result5 = extractStr.match(codingRegex);
// console.log(result5)

//Global flag
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
let vowelRegex = /[aeiu]/gi;
let result9 = quoteSample.match(vowelRegex);
// console.log(result9)

// Match letters and numbers using Hyphen
let findSample = "The quick brown fox jumped over the lazy dog 37.5 times.";
let alphabetRegex = /[a-z0-9]/ig;
let resultX = findSample.match(alphabetRegex);
// console.log(resultX)

// Negated character set
let miceSample = "3 blind mice ran into the wall.";
let NRegex = /[^aeiou0-9]/ig 
let result11 = miceSample.match(NRegex);
// console.log(result11)

// Using the plus character
let spellingM = "Mississsssippi is stunning.";
let ssRegex = /s+/gi; 
let result12 = spellingM.match(ssRegex);
// console.log(result12)

// Using the asterisk character
let soccerWord = "gooooooooal!";
let gPhrase = "I have a gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
let result13 = soccerWord.match(goRegex); 
let result14 = gPhrase.match(goRegex);
let result15 = oPhrase.match(goRegex);
// console.log(result13, result14, result15)

// Lazy Matching
let text = "<h1>Hello, aliens!</h1>";
let myRegex = /<.*?>/; 
let result16 = text.match(myRegex);
// console.log(result16)

// Match Beginning String Patterns
let firstString = "Rick and Morty!";
let firstRegex = /^Rick/;
result17 = firstRegex.test(firstString);
let notFirst = "Morty and Rick!";
result18 = firstRegex.test(notFirst);
// console.log(result17, result18)

// Match Ending String Patterns
let thisString = "Rick and Morty";
let frRegex = /Rick$/;
result19 = frRegex.test(thisString);
let nott = "Morty and Rick";
result20 = frRegex.test(nott);
// console.log(result19, result20)

// Match All Letters and Numbers
let sample4 = "Hello, aliens!30";
let alphabetRegexV2 = /\w/g;
let result21 = sample4.match(alphabetRegexV2);
// console.log(result21)

// Match Everything But Letters and Numbers
let sample42 = "Hello, aliens!30";
let alphabetRegexV42 = /\W/g;
let result22 = sample42.match(alphabetRegexV42);
// console.log(result22)

// Match All Numbers
let name = "107Santos";
let numRegex = /\d/g;
let result23 = name.match(numRegex);
// console.log(result23)

// Match All Non-Numbers
let nonName = "107Santos";
let noNumRegex = /\D/g;
let result24 = nonName.match(noNumRegex);
// console.log(result24)

// Match Whitespace
let sample25 = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g;
let result25 = sample25.match(countWhiteSpace).length;
// console.log(result25)

// Match Non-Whitespace Characters
let sample26 = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; 
let result26 = sample26.match(countNonWhiteSpace);
// console.log(result26)

// Specify Upper and Lower Number of Matches
let ohStr = "Jooorge";
let ohRegex = /jo{3,6}rge/i; 
let result27 = ohRegex.test(ohStr);
// console.log(result27)

// Specify Only the Lower Number of Matches
let haStr = "Jooooorge";
let haRegex = /jo{4,}rge/i; 
let result28 = haRegex.test(haStr);
// console.log(result28)

// Specify Exact Number of Matches
let tosStr = "SANNNNNTOS";
let sanStr = "SANntos";
let timRegex = /san{5}tos/i;
let result29 = timRegex.test(sanStr);
let result30 = timRegex.test(tosStr);
// console.log(result29, result30)

// Check for All or None
let favWord = "delicious";
let favoWord = "delicioso";
let favRegex = /deliciou?so?/;
let result31 = favRegex.test(favWord);
let result32 = favRegex.test(favoWord);
// console.log(result31, result32)

// Positive and Negative Lookahead
let sampleWord = "astronaut";
let sample22Word = "astronaut22";
let pwRegex = /(?=\w{5,})|(?=\w*\d{2})/; 
let result33 = pwRegex.test(sampleWord);
let result34 = pwRegex.test(sampleWord);
// console.log(result33, result34)




