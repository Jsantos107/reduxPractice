# regexPractice
## Table of contents
* [General info](#general-info)
* [.test() method](#.test-method)
* [Match Literal Strings](#match-literal-strings)
* [Match a Literal String with Different Possibilities](#match-literal-strings-with-diffrent0poaaibilities)
* [Ignore Case While Matching](#ignore-case-while-matching)
* [Extract Matches](#extract-matches)
* [Find More Than the First Match](#find-more-than-the-first-match)
* [Match Anything with Wildcard Period](#match-anything-with-wildcard-period)
* [Match Single Character with Multiple Possibilities](#match-single-haracter-with-multiple-possibilities)

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

## Find More Than the First Match
To search or extract a pattern more than once use the g flag.

## Match Anything with Wildcard Period
The wildcard character . will match any one character.

## Match Single Character with Multiple Possibilities
Search for a literal pattern with some flexibility with character classes. Character classes allow you to define a group of characters you wish to match by placing them inside square ([ and ]) brackets.