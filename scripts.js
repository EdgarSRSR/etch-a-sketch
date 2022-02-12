const container = document.querySelector('#container');
let gridValue = document.querySelector('input');
let gridSize = document.querySelector('.grid-size');
const grid = document.querySelector('.grid');
const create = document.querySelector('.create');
const erase = document.querySelector('.erase'); 
// let selectedColour = document.querySelector(''); 
let selectedSize = 16;

createGrid(selectedSize);


function createDiv(size){
    const content = document.createElement('div');
    content.classList.add('box');
    content.style.width = `${size}px`;
    content.style.height = `${size}px`;
    return content;
}


function createGrid(selectedSize){
    for(let i = 0;i< selectedSize;i++){
        for(let j = 0;j< selectedSize;j++){
            grid.appendChild(createDiv(grid.clientWidth/ selectedSize));
        }
    }
}

function eraseGrid(){
    grid.innerHTML = '';
    createGrid(selectedSize);
}

gridValue.addEventListener('input', function(e){
    selectedSize = e.target.value;
    console.log(selectedSize);
    gridSize.textContent = `${selectedSize} X ${selectedSize}`;
});

create.addEventListener('click', function(){
    eraseGrid();
});


