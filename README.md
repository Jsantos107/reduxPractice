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
* [Match Ending String Patterns](#Match-ending-string-patterns)
* [Match All Letters and Numbers](#match-all-letters-and-numbers)
* [Match Everything But Letters and Numbers](#match-everything-but-letters-and-numbers)
* [Match All Numbers](#match-all-numbers)
* [Match All Non-Numbers](#match-all-non-numbers)
* [Match Whitespace](#match-whitespace)
* [Match Non-Whitespace Characters](#match-non-whitespace-characters)
* [Specify Upper and Lower Number of Matches](#specify-upper-and-lower-number-of-matches)
* [Specify Only the Lower Number of Matches](#specify-only-the-lower-number-of-matches)
* [Specify Exact Number of Matches](#specify-exact-number-of-matches)
* [Check for All or None](#check-for-all-or-none)
* [Positive and Negative Lookahead](#positive-and-negative-lookahead)


## General info
Regular expressions are used in programming languages to match parts of strings. You create patterns to help you do that matching.

## .test method
JavaScript has multiple ways to use regexes. One way to test a regex is using the .test() method. The .test() method takes the regex, applies it to a string, and returns true or false if your pattern finds something or not.
Match Non-Whitespace Characters
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

## Match Single CharactNer with Multiple Possibilities
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

## Match Ending String Patterns
search the end of strings using the dollar sign character $ at the end of the regex.

## Match All Letters and Numbers
\w. This shortcut is equal to [A-Za-z0-9_]. This character class matches upper and lowercase letters plus numbers. Note, this character class also includes the underscore characteMatch Whitespacer (_).
Specify Only the Lower Number of Matches
## Match Everything But Letters and Numbers
 Search for the opposite of the \w with \W. Note, the opposite pattern uses a capital letter. This shortcut is the same as [^A-Za-z0-9_].

## Match All Numbers
The shortcut to look for digit characters is \d, with a lowercase d. This is equal to the character class [0-9], which looks for a single character of any number between zero and nine.

## Match All Non-Numbers
The shortcut to look for non-digit characters is \D. This is equal to the character class [^0-9], which looks for a single character that is not a number between zero and nine.
Match Non-Whitespace Characters
## Match Whitespace
You can search for whitespace using \s, which is a lowercase s. This pattern not only matches whitespace, but also carriage return, tab, form feed, and new line characters. Think of it as similar to the character class [\r\t\f\n\v].

## Match Non-Whitespace Characters
Search for non-whitespace using \S. This pattern will not match whitespace, carriage return, tab, form feed, and new line characters. You can think of it being similar to the character class [^\r\t\f\n\v].

## Specify Upper and Lower Number of Matches
Specify the lower and upper number of patterns with quantity specifiers. Quantity specifiers are used with curly brackets ({ and }). You put two numbers between the curly brackets - for the lower and upper number of patterns.

## Specify Only the Lower Number of Matches
To only specify the lower number of patterns, keep the first number followed by a comma.

## Specify Exact Number of Matches
To specify a certain number of patterns, just have that one number between the curly brackets.

## Check for All or None
You can specify the possible existence of an element with a question mark, ?. This checks for zero or one of the preceding element. You can think of this symbol as saying the previous element is optional.

## Positive and Negative Lookahead
Lookaheads are patterns that tell JavaScript to look-ahead in your string to check for patterns further along. This can be useful when you want to search for multiple patterns over the same string.

There are two kinds of lookaheads: positive lookahead and negative lookahead.

A positive lookahead will look to make sure the element in the search pattern is there, but won't actually match it. A positive lookahead is used as (?=...) where the ... is the required part that is not matched.

On the other hand, a negative lookahead will look to make sure the element in the search pattern is not there. A negative lookahead is used as (?!...) where the ... is the pattern that you do not want to be there. The rest of the pattern is returned if the negative lookahead part is not present.