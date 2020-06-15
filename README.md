# regexPractice
## Table of contents
* [General info](#general-info)
* [.test() method](#.test-method)
* [Match Literal Strings](#match-literal-strings)
* [Match a Literal String with Different Possibilities](#match-literal-strings-with-diffrent0poaaibilities)
* [Ignore Case While Matching](#ignore-case-while-matching)
* [Extract Matches](#extract-matches)

## General info
Regular expressions are used in programming languages to match parts of strings. You create patterns to help you do that matching.

## .test() method
JavaScript has multiple ways to use regexes. One way to test a regex is using the .test() method. The .test() method takes the regex, applies it to a string, and returns true or false if your pattern finds something or not.

## Match Literal Strings
This means that regex will search for a literal match of the string, any other forms of the string will not match. For example, the regex /Jorge/ will not match "jorge" or "JORGE".

## Match a Literal String with Different Possibilities
search for multiple patterns using the alternation or OR operator: 
```
|
```

## Ignore Case While Matching
the i flag ignores case.

## Extract Matches
Use the .match() method, apply the method on a string and pass in the regex inside the parentheses.
