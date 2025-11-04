// Given an input string, remove all the vowels in the string and return output

// input string:

const removeVowels = (str) => {
    if(str === ""){
        throw("String is empty, cannot remove any vowels");
    }
    let vowels = {
        "a": true,
        "e": true,
        "i": true,
        "o": true,
        "u": true
    }
    let newStr = ""
    for(let i = 0; i < str.length; i++){
        if(!vowels.hasOwnProperty(str[i].toLowerCase())){
            newStr += str[i]
        }
    }
    return newStr;
}

// Time Complexity: O(n)


console.log(removeVowels("wowowowow"))