// To check if string is Palindrome or not
function palindromeStr(str){
    let reverse = ''
    for (let i = str.length-1; i >= 0; i-- ){
        reverse += str[i];
    }
    if ( reverse === str){
        console.log('it is Palindrome')
    }
    else console.log('it is not')
}
palindromeStr('dad')

//Number is Palindrone
function PalindromeNum(num){
    let numStr = num.toString();
    let reverse = '';
    for(let i = numStr.length - 1; i >= 0; i--){
        reverse += parseInt(numStr[i]);
    }
    if ( reverse === numStr){
        console.log('it is Palindrome')
    }
    else console.log('it is not')

}
PalindromeNum(0)