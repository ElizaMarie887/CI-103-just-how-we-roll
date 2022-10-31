/**********
 * DATA *
 **********/

let sixes = [];
let doubleSixes = [];
let twelves = [];
let twenties = [];

/********************
 * HELPER FUNCTIONS *
********************/

const getRandomNumber = function(max) {
    const rand = Math.random();
    const range = rand * max;
    const result = Math.ceil(range);
    return result;
}

/*******************
 * YOUR CODE BELOW *
 *******************/
//reset button
let resetButton = document.querySelector("#reset-button")
//single d6
let imageD6 = document.querySelector('#d6-roll')
//double D6
let imageD61 = document.querySelector('#double-d6-roll-1')
let imageD62 = document.querySelector('#double-d6-roll-2')
//D12
let imageD12 = document.querySelector('#d12-roll')
//20
let imageD20 = document.querySelector('#d20-roll')

//Dice Means
//single d6
let meanD6 = document.querySelector('#d6-rolls-mean')
//double d6
let meanDoubleD6 = document.querySelector('#double-d6-rolls-mean')
//d12
let meanD12 = document.querySelector('#d12-rolls-mean')
//d20
let meanD20 = document.querySelector('#d20-rolls-mean')
//sets page up upon opening

//Dice Medians
//single d6
let medianD6 = document.querySelector('#d6-rolls-median')
//double d6
let medianDoubleD6 = document.querySelector('#double-d6-rolls-median')
let median12 = document.querySelector('#d12-rolls-median')
let median20 = document.querySelector('#d20-rolls-median')
reset()

/*******************
 * EVENT LISTENERS *
 *******************/
//reset button
resetButton.addEventListener('click', function(){
    console.log('Reset clicked');
    reset();
})
//single d6
imageD6.addEventListener('click', function(){
    console.log('D6 clicked')
    d6RollFunction();
} )
//double D6
imageD61.addEventListener('click',function(){
    console.log('Double D6 clicked!')
    doubleD6RollFunction()
    
})

imageD62.addEventListener('click',function(){
    console.log('Double D6 clicked!')
    doubleD6RollFunctionR()
})
//D12
imageD12.addEventListener('click', function(){
    console.log('D12 clicked')
    d12RollFunction();
})
//D20
imageD20.addEventListener('click', function(){
    console.log('D20 clicked')
    d20RollFunction();
})



/******************
 * RESET FUNCTION *
 ******************/
function reset(){
    //empty global arrays
    sixes = [];
    doubleSixes = [];
    twelves = [];
    twenties = [];
    //reset images
    imageD6.src = "./images/start/d6.png";
    imageD61.src = "./images/start/d6.png";
    imageD62.src = "./images/start/d6.png"
    ;
    imageD12.src = "./images/start/d12.jpeg";
    imageD20.src = "./images/start/d20.jpg"
    //reset mean to NA
    meanD6.innerText = "N/A"
    meanDoubleD6.innerText = "N/A"
    meanD12.innerText = "N/A"
    meanD20.innerText = "N/A"
    medianD6.innerText = "N/A"
    medianDoubleD6.innerText = "N/A"
    median12.innerText = "N/A"
    median20.innerText = "N/A"
}


/****************************
 * CLICK HANDLING FUNCTIONS *
****************************/
//D6 Roll
function d6RollFunction(){
   let result1 = getRandomNumber(6);
   console.log(result1);

   imageD6.src =`./images/d6/${result1}.png`;
   sixes.push(result1);
   console.log(sixes);
   getMean(sixes);
   meanD6.innerText = getMean(sixes);
   getMedian(sixes);
   medianD6.innerText = getMedian(sixes);
}
//double D6 Roll left dice click
function doubleD6RollFunction(){
    let d6Result1 = getRandomNumber(6);
    imageD61. src = `./images/d6/${d6Result1}.png`
    doubleSixes.push(d6Result1)
    let d6Result2 = getRandomNumber(6);
    imageD62. src = `./images/d6/${d6Result2}.png`
    doubleSixes.push(d6Result2)
    getMean(doubleSixes);
    meanDoubleD6.innerText = getMean (doubleSixes)
    getMedian(doublesixes);
    medianDoubleD6.innerText = getMedian(doublesixes);
}

//double D6 Roll right dice click

function doubleD6RollFunctionR(){
    let d6Result2 = getRandomNumber(6);
    imageD62. src = `./images/d6/${d6Result2}.png`
    doubleSixes.push(d6Result2)
    let d6Result1 = getRandomNumber(6);
    imageD61. src = `./images/d6/${d6Result1}.png`
    doubleSixes.push(d6Result1)
    getMean(doubleSixes);
    meanDoubleD6.innerText = getMean (doubleSixes)
    getMedian(doublesixes);
    medianDoubleD6.innerText = getMedian(doublesixes);
}

//D12 Roll
function d12RollFunction(){
   let result3 = getRandomNumber(12);
   console.log(result3);

   imageD12.src = `./images/numbers/${result3}.png`
   twelves.push(result3);
   getMean(twelves);
   meanD12.innerText = getMean(twelves);
   getMedian(twelves);
   medianD12.innerText = getMedian(twelves);
}

//D20 Roll
function d20RollFunction(){
    let result4 = getRandomNumber(20);
    console.log(result4);

    imageD20.src = `./images/numbers/${result4}.png`
    twenties.push(result4);
    getMean(twenties);
    meanD20.innerText = getMean(twenties);
    getMedian(twenties);
    median20.innerText = getMedian(twenties);

}

/****************
 * MATH SECTION *
 ****************/

function getMean(array){
    let total = 0;

    for(i = 0; i < array.length; i++){
        total = total + array[i];
    }
    return total/array.length;
}

function getMedian(array){

}