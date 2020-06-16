# regexPractice
## Table of contents
* [General info](#general-info)
* [.test method](#.test-method)
* [Match Literal Strings](#match-literal-strings)
* [Match a Literal String with Different Possibilities](#match-literal-strings-with-diffrent0poaaibilities)
* [Insensitive flag](#insensitive-flag)
* [Extract Matches](#extract-matches)
* [Global flag](#global-flag)
* [Match Anything with Wildcard Period](#match-anything-with-wildcard-period)
* [Match Single Character with Multiple Possibilities](#match-single-character-with-multiple-possibilities)
* [Match letters and numbers using Hyphen](#match-letters-and-numbers-using-hyphen)
* [Negated character set](#negated-character-set)
* [Using the plus character](#using-the-plus-character)
* [Using the asterisk character](#using-the-asterisk-character)
* [Lazy Matching](#lazy-matching)
* [Match Beginning String Patterns](#match-beginning-string-patterns)


## General info
Regular expressions are used in programming languages to match parts of strings. You create patterns to help you do that matching.

## .test method
JavaScript has multiple ways to use regexes. One way to test a regex is using the .test() method. The .test() method takes the regex, applies it to a string, and returns true or false if your pattern finds something or not.

## Match Literal Strings
This means that regex will search for a literal match of the string, any other forms of the string will not match. For example, the regex /Jorge/ will not match "jorge" or "JORGE".

## Match a Literal String with Different Possibilities
search for multiple patterns using the alternation or OR operator: 
```
|
```

## Insensitive flag
the i flag ignores case.

## Extract Matches
Use the .match() method, apply the method on a string and pass in the regex inside the parentheses.

## Global flag
To search or extract a pattern more than once use the g flag.

## Match Anything with Wildcard Period
The wildcard character . will match any one character.

## Match Single Character with Multiple Possibilities
Search for a literal pattern with some flexibility with character classes. Character classes allow you to define a group of characters you wish to match by placing them inside square ([ and ]) brackets.

## Match letters and numbers using Hyphen
Define a range of characters to match using a hyphen character:
```
-
```
Using the hyphen (-) to match a range of characters is not limited to letters. It also works to match a range of numbers.

## Negated character set
To create a negated character set, place a caret character (^) after the opening bracket and before the characters you do not want to match.

## Using the plus character
You can use the + character to check if that is the case. The character or pattern has to be present consecutively. That is, the character has to repeat one after the other.

## Using the asterisk character
matches characters that occur zero or more times.

## Lazy Matching
a lazy match, finds the smallest possible part of the string that satisfies the regex pattern.

## Match Beginning String Patterns
Outside of a character set, the caret is used to search for patterns at the beginning of strings.