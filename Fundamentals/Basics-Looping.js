// Control Flow: if, else, switch, for, while, do-while, break, continue

// if & else
let a = 10;
let b = 9;
if (a > b) {
    console.log('a is greater')
}
else console.log('b is greater')

let day = 3

switch (day) {
    case 1:
        console.log('Monday')
        break;
    case 2:
        console.log('Tuesfday')
        break;
    case 3:
        console.log('wed')
        break;
    case 4:
        console.log('thurs')
        break;
    case 5:
        console.log('fri')
        break;
    case 6:
        console.log('sat')
        break;
    default:
        console.log('Invalid day')
        break;
}

//for loop
let num = 10;
for (let i = 0; i <= num; i++){
    if(i == 2) continue
    if( i == 8) break; 
    console.log(i)
}

//while
while(num < 20){
    console.log(num)
    num ++;
}

//Do while
do{
    console.log(num);
    num++
}
while( num < 25);

