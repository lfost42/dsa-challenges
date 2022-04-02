/*
"Leet" or 1337 is a popular alternative alphabet used by internet "hackers".
Define a function called leetTranslator that take a string of normal characters.
leetTranslator should return a new string that is the translation of the original string into leet.
The leet codex is below, along with an array of english letters and an array of the corresponding leet characters. Use the two arrays to create a leetCodex object to use in making the translations.
/*
Leet Codex:
        A -> @
        B -> 8
        C -> (
        D -> |)
        E -> 3
        F -> ph
        G -> g
        H -> #
        I -> l
        J -> _|
        K -> |<
        L -> 1
        M -> |'|'|
        N -> /\/
        O -> 0
        P -> |D
        Q -> (,)
        R -> |2
        S -> 5
        T -> +
        U -> |_|
        V -> |/
        W -> |/|/'
        X -> ><
        Y -> j
        Z -> 2
*/
let letters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
let leetChars = ['@', '8', '(', '|)', '3', 'ph', 'g', '#','l', '_|', '|<', '1', "|'|'|", '/\/', '0', '|D', '(,)', '|2', '5', '+', '|_|', '|/', "|/|/'",'><', 'j', '2'];
translate('Fullstack')    // => 'ph|_|115+@(|<'
*/

let keys = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
let values = ['@', '8', '(', '|)', '3', 'ph', 'g', '#','l', '_|', '|<', '1', "|'|'|", '/\/', '0', '|D', '(,)', '|2', '5', '+', '|_|', '|/', "|/|/'",'><', 'j', '2'];

// YOUR CODE BELOW
let leetChars = {};
keys.forEach((key, i) => leetChars[key] = values[i]);

const leetTranslator = (str) => {
  let result = '';
  for(let i = 0; i < str.length; i++) {
    let char = leetChars[str.toLowerCase()[i]];
    result += char;
  }
  return result;
}

/* 
First, we rename the letters and leetChars arrays to keys and values for clarity. 
We map each key-value pair using a forEach loop into a dictionary: leetChars. 
The variable: result was instantiated to the value of an empty string. The for loop
iterated through each character of the input string: str, set to lower case. Each
character was passed into the leetChars dictionary as the variable; char. Then each char
was concatenated to the result string. 
*/