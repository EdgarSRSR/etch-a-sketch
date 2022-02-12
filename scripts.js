const container = document.querySelector('#container');
let gridValue = document.querySelector('input');
let gridSize = document.querySelector('.grid-size');
const grid = document.querySelector('.grid');
const create = document.querySelector('.create');
const erase = document.querySelector('.erase'); 
//let selectedColour = document.querySelector(''); 
let selectedSize = 16;

/*
createGrid(selectedSize);

function createDiv(size){
    const content = document.createElement('div');
    content.classList.add('box');
    content.style.cssText = 'border: 4px solid black; padding: 4px';
    content.style.width = `${size}px`;
}



function createGrid(gridValue){
    for(let i = 0;i< gridValue;i++){
        for(let j = 0;j< gridValue;j++){
            grid.appendChild(createDiv(grid.clientWidth));
        }
    }

}*/

gridValue.addEventListener('input', function(e){
    selectedSize = e.target.value;
    console.log(selectedSize);
    gridSize.textContent = `${selectedSize} X ${selectedSize}`;
});