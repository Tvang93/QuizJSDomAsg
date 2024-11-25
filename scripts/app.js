//call on box with a number
    //need to get number user input and save it
//change color of box
    //css? 
    //add class?
    //need to get color user input and save it

let box1 = document.getElementById('box1');
let box2 = document.getElementById('box2');
let box3 = document.getElementById('box3');
let box4 = document.getElementById('box4');
let box5 = document.getElementById('box5');
let box6 = document.getElementById('box6');
let box7 = document.getElementById('box7');
let box8 = document.getElementById('box8');
let boxNumber = document.getElementById('boxNumber');
let changeColor = document.getElementById('changeColor');
let changeColorBtn = document.getElementById('changeColorBtn');
let resetBtn = document.getElementById('resetBtn');

let boxArr = [
    box1,
    box2,
    box3,
    box4,
    box5,
    box6,
    box7,
    box8,
];


changeColorBtn.addEventListener('click', function(){
    if((changeColor.value.toLowerCase() == 'blue' || changeColor.value.toLowerCase() == 'red' || changeColor.value.toLowerCase() == 'brown' || changeColor.value.toLowerCase() == 'purple' || changeColor.value.toLowerCase() == 'yellow') && boxNumber.value < 9 && boxNumber.value > 0){
       boxArr[boxNumber.value-1].className = `col-3 text-center boxSize ${changeColor.value.toLowerCase()}`;
    }
})

resetBtn.addEventListener('click', function(){
    for(let i = 0; i < boxArr.length; i++){
        boxArr[i].className = 'col-3 text-center boxSize'
    }
})