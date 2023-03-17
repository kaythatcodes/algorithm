const fullsentence = "on this day, veil is removed.";

// numbers of characters 
let numOfCharacter = fullsentence.length;
console.log("number of characters is ", numOfCharacter);


// numbers of words
let words = fullsentence.split(" ").length;
console.log("number of words is ", words);


// numbers of vowels
const vowels = ['a', 'e', 'i', 'o', 'u'];

function countVowles(fullsentence) {
    let count = 0;

    for(x of fullsentence) {
        if(vowels.includes(x)) {
            count++;
        }
    }
    return count;
}

const numOfVowels = countVowles(fullsentence);

console.log("vowels is ", numOfVowels);