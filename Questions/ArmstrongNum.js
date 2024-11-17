// Program to print armstrong number

function armstrongNum(num){
    const numStr = num.toString();
    console.log(numStr)
    const numCount = numStr.length;
    console.log(numCount)

    let sum = 0;
    for (let i= 0;  i < numCount; i++){
        let digit = parseInt(numStr[i]);
        sum += Math.pow(digit, numCount)
    }
    if(sum === num){
        console.log('Armtrong number')
    }
    else console.log('Not armstrong')
}
armstrongNum(153)


let arr = [40,'getesh']
console.log(arr)
