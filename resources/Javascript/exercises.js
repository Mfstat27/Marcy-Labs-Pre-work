//Exercise 1 - isRealPalindrome
function isRealPalindrome(wordOrSentence) {
    wordOrSentenceL = wordOrSentence.toLowerCase();
    backwards = "";
    for(let word of wordOrSentenceL) {
        
    }
    
    // if (final === wordOrSentenceL) return true;
    // else return false;
}

//console.log(isRealPalindrome('madam'));
//Exercise 2
//Exercise 3 - swap
function swap(wordOrSentence) {
    let lowerCase = wordOrSentence.toLowerCase();
    let wordArray = lowerCase.split(" ");
    let word2 = "";
    let wordFinal = "";
    for(let word of wordArray) {
        let firstchar = word.charAt(0);
        let lastchar = word.charAt(word.length-1);
        let word2 = word.replace(lastchar, firstchar);
        let wordFinal = word2.replace(firstchar, lastchar);
        wordArray[wordArray.indexOf(word)] = wordFinal;
    }
 
    return wordArray.join(' ');
}

console.log(swap('a'));
//Exercise 4

//Exercise 5 - union
function union(numbers, numbersTwo = []) {
    combinedNoRepeatsArray = [];
    for(let x = 0; x < numbers.length; x++) {
        if(combinedNoRepeatsArray.includes(numbers[x])) continue;
        else combinedNoRepeatsArray.push(numbers[x]);
    }
    for(let j = 0; j < numbersTwo.length; j++) {
        if(combinedNoRepeatsArray.includes(numbersTwo[j])) continue;
        else combinedNoRepeatsArray.push(numbersTwo[j]);
    }
    return combinedNoRepeatsArray;
}
console.log(union([1, 3, 5], [3, 6, 9]));

//Exercise 6

//Exercise 7 - showMultiplicativeAverage
function showMultiplicativeAverage(numbers = []) {
    // sum = 0;
     average = 0;
    multiplicationStarter = numbers[0]*numbers[1];
    for(let x = 2; x < numbers.length; x++){
        multiplicationStarter *= numbers[x];
    } 
        average = multiplicationStarter/numbers.length;
    return average.toFixed(2);
}

let numbers = [1,2,3,4];
console.log(numbers.length);
console.log(showMultiplicativeAverage(numbers));

//Exercise 8 - multiplyList

function multipyList(numbers = [], numbersTwo = []) {
    productArray = [];
    for(let x = 0; x < numbers.length; x++) {
        let product = numbers[x] * numbersTwo[x];
        productArray.push(product);
    }
    
    return productArray;
        
}
console.log(multipyList([3, 5, 7], [9, 10, 11]));

// Exercise 9 - Sequence
function sequence(number) {
    let numbers = []; 
    for(let x=1; x <= number; x++) {
        numbers.push(x);
    }
    return numbers;
}

console.log(sequence(5));

//Exercise 10 - wordCap
let wordCap = function(sentence) {
    lowersentence = sentence.toLowerCase();
    sentenceArray = lowersentence.split(" ");
    for(let word of sentenceArray) {
        newword = word.replace(word.charAt(0), word.charAt(0).toUpperCase());
        sentenceArray[sentenceArray.indexOf(word)] = newword;
    }
    return sentenceArray.join(' ');
}

console.log(wordCap('the javaScript language'));
//Exercise 11
//Exercise 12
//Exercise 13 - anagram
let anagram = function(word, wordlist = []) {
    let returnlist = [];
    let lowerword = word.toLowerCase();
    let charlist0 = lowerword.split('');
    charlist0.sort();
    for(let oneword of wordlist){
        let charlist1 = oneword.split('');
        charlist1.sort();
        for()
        if(charlist1 == charlist0) {
            returnlist.append(oneword);
        }   
    }
    return returnlist;
}
console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana']));

//Exercise 14 - Triangle
let triangle = function(angle1, angle2, angle3) {
    if((angle1+angle2+angle3 < 180) || (angle1+angle2+angle3 > 180) || 
    (angle1 === 0 || angle2 === 0 || angle3 === 0)) return "invalid";
    if(angle1 > 90 || angle2 > 90 || angle3 > 90) return "obtuse"; 
    if(angle1 < 90 && angle2 < 90 && angle3 < 90) return "acute";
    if(angle1 === 90 || angle2 === 90 || angle3 === 90) return "right";
};

console.log(triangle(0,90,90));

// Exercise 15
function fridayThe13ths(year) {
    count = 0;
    
}
