// You are given a string date representing a Gregorian calendar date in the yyyy-mm-dd format.

// date can be written in its binary representation obtained by converting year, month, and day to their binary representations without any leading zeroes and writing them down in year-month-day format.

// Return the binary representation of date.

 

// Example 1:

// Input: date = "2080-02-29"

// Output: "100000100000-10-11101"

// Explanation:

// 100000100000, 10, and 11101 are the binary representations of 2080, 02, and 29 respectively.

// Example 2:

// Input: date = "1900-01-01"

// Output: "11101101100-1-1"

// Explanation:

// 11101101100, 1, and 1 are the binary representations of 1900, 1, and 1 respectively.

 

// Constraints:

// date.length == 10
// date[4] == date[7] == '-', and all other date[i]'s are digits.
// The input is generated such that date represents a valid Gregorian calendar date between Jan 1st, 1900 and Dec 31st, 2100 (both inclusive).

function convertDateToBinary(date){
    let binaryYear = ''
    let binaryMonth = ''
    let binaryDay = ''
    let yearString = ''
    let monthString = ''
    let dayString = ''
    let i = 0
    // Convert year to binary
    while(date[i] !== '-'){ 
        yearString += date[i]
        i++
    }
    // Convert month to binary
    i++ // skip '-'
    while(date[i] !== '-'){ 
        monthString += date[i]
        i++
    }
    // Convert day to binary
    i++ // skip '-'
    while(i < date.length){ 
        dayString += date[i]
        i++
    }
    binaryYear = parseInt(yearString).toString(2)
    binaryMonth = parseInt(monthString).toString(2)
    binaryDay = parseInt(dayString).toString(2)
    return `${binaryYear}-${binaryMonth}-${binaryDay}`
}

// Time Complexity: O(n)
// Space Complexity: O(1)

// Example Usage:
console.log(convertDateToBinary("2080-02-29")) // "100000100000-10-11101"
console.log(convertDateToBinary("1900-01-01")) // "11101101100-1-1"