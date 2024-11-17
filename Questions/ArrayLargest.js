// Find largest elemnt in array

function arrayLargest(arr){
    let largest = arr[0]
    for (let i = 1; i < arr.length; i++){
        if ( arr[i] > largest ){
            largest = arr[i]
        }
    }
    return largest
}
let result = arrayLargest([1,2,3,4,5,6,7,8])
console.log(result)