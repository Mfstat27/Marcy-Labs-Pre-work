//Exercise 1 - isRealPalindrome
function isRealPalindrome(wordOrSentence) {
    let wordOrSentenceL = wordOrSentence.toLowerCase();
    let backwards = "";
    let regex = /[/a-z/ /0-9/]/;
    let regSymbols = /[^A-Za-z0-9_]/;
    let newWord = '';
    for(let char = 0; char < wordOrSentenceL.length; char++) {
        if(regSymbols.test(wordOrSentenceL.charAt(char))) {
            continue;
        }
        else newWord+=wordOrSentenceL.charAt(char);
    }
    for(let char = newWord.length; char >= 0; char--) { 
        if(regex.test(newWord.charAt(char))){ 
            backwards += newWord.charAt(char);
         }
    }
    if (backwards === newWord) return true;
    else return false;
    //return;
}
console.log(isRealPalindrome('Madam'));     // true (only alphanumerics matter)));

//Exercise 2 - runningTotal
function runningTotal(numbersArray) {
    returnArray = [];
    sum = 0;
    for(let x = 0; x < numbersArray.length; x++) {
        sum += numbersArray[x];
        returnArray.push(sum);
    }
    return returnArray;
}

console.log(runningTotal([14, 11, 7, 15, 20]));                    
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
//Exercise 4 - wordSizes
function wordSizes(phrase) {
    const wordMap = {};
    const wordArray = phrase.toLowerCase().split(" ");
    for(let word of wordArray) {
        if(word.length in wordMap) {
            wordMap[word.length] +=1;
        }
        else wordMap[word.length] = 1;
    }

    return wordMap;
}  
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));

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

//Exercise 6 - firstrecurring

function firstRecurring(word) {
    //charMap = {}; could also be done with an object map
    charArray = [];
    for(let x = 0; x < word.length; x++) {
        let char = word.charAt(x);
        
        if(charArray.includes(char)) {
            return char;
        }
        else charArray.push(char);
    }

    return "";
}

console.log(firstRecurring('reuben'));

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
//Exercise 11 - processReleaseData
const newReleases = [
    {
      'id': 70111470,
      'title': 'Die Hard',
      'boxart': 'http://cdn-0.nflximg.com/images/2891/DieHard.jpg',
      'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
      'rating': [4.0],
      'bookmark': [],
    },
    {
      'id': 654356453,
      'boxart': 'http://cdn-0.nflximg.com/images/2891/BadBoys.jpg',
      'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
      'rating': [5.0],
      'bookmark': [{ id:432534, time:65876586 }],
    },
    {
      'title': 'The Chamber',
      'boxart': 'http://cdn-0.nflximg.com/images/2891/TheChamber.jpg',
      'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
      'rating': [4.0],
      'bookmark': [],
    },
    {
      'id': 675465,
      'title': 'Fracture',
      'boxart': 'http://cdn-0.nflximg.com/images/2891/Fracture.jpg',
      'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
      'rating': [5.0],
      'bookmark': [{ id:432534, time:65876586 }],
    },
  ];
function processReleaseData(object) {
    const returnObj = [];
    const titles = object
    .filter(r => r.hasOwnProperty('id') && r.hasOwnProperty('title'))
    .map(r => ({id: r.id, title: r.title}))
    return titles;
}

console.log(processReleaseData(newReleases));
//Exercise 12- octalToDecimal

let octalToDecimal = function(number) {
    let octalNumber = parseInt(number, 8);
    return octalNumber;
}
console.log(octalToDecimal('11'));

//Exercise 13 - anagram
let anagram = function(word, wordlist = []) {
    // const equals = (a, b) =>
    // a.length === b.length &&
    // a.every((v, i) => v === b[i]);
    const equalsIgnoreOrder = (a, b) => {
        if (a.length !== b.length) return false;
        const uniqueValues = new Set([...a, ...b]);
        for (const v of uniqueValues) {
          const aCount = a.filter(e => e === v).length;
          const bCount = b.filter(e => e === v).length;
          if (aCount !== bCount) return false;
        }
        return true;
      }
    let returnlist = [];
    let lowerword = word.toLowerCase();
    let charlist0 = lowerword.split('');
    //charlist0.sort();
    for(let oneword of wordlist){
        let charlist1 = oneword.split('');
        //charlist1.sort();
        if(equalsIgnoreOrder(charlist0, charlist1)) {
            returnlist.push(oneword);
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
    let count = 0;
    let startDate = new Date(year, 0, 1);
    let endDate = new Date(year, 11, 31);
     while(startDate < endDate){
         if(startDate.getDate() === 13 && startDate.getDay() === 5) {
            count+=1;  
        }
        startDate.setDate(startDate.getDate()+1);
     }   
    return count;
}

console.log(fridayThe13ths(1983));