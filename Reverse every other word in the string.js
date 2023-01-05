/* Reverse every other word in a given string,
then return the string.
Throw away any leading or trailing whitespace,
while ensuring there is exactly one space between
each word. Punctuation marks should be treated
as if they are a part of the word in this kata.


For example:

"Reverse this string, please!" === "Reverse siht string, !esaelp"
"I really don't like reversing strings!" === "I yllaer don't ekil reversing !sgnirts"*/

function reverse(str){
  let arrStr = str.split(' ');          // ['Reverse', 'this', 'string,', 'please!']
  let rev = arrStr.map((word, i) => {
    if (i % 2 !== 0) {
      return word.split("").reverse().join("");
    }
    else {
      return word
    }
  });
  return rev.join(' ').trim();
}

console.log(reverse("Reverse   string, please!"));

/* Code with Codewars

let reverse = str =>
  str.trim().split(` `).map((x, i) => (i%2 !== 0)?x.split(``).reverse().join(``) : x).join(' ');
*/
