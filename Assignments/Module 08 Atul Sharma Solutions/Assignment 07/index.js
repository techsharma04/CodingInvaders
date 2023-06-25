function isPalindrome(str){
    let fixedStr = str.replace(/\s/g, '').toLowerCase();
    let lside = 0;
    let rside = fixedStr.length - 1;
    while(lside < rside){
        if(fixedStr[lside] !== fixedStr[rside]){
            return "Not palindrome";
        }
        lside++;
        rside--;
    }
    return "A palindrome";
}

let output1 = isPalindrome("Coding");
console.log(`${output1}\n`);

let output2 = isPalindrome("Anna");
console.log(`${output2}\n`);

let output3 = isPalindrome("DESSERTS I DESIRE NOT SO LONG NO LOST ONE RISE DISTRESSED");
console.log(`${output3}`);


