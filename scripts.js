// Variables
const container = document.querySelector('#container');
let gridValue = document.querySelector('input');
let gridSize = document.querySelector('.grid-size');
const grid = document.querySelector('.grid');
const create = document.querySelector('.create');
const erase = document.querySelector('.erase');
const black = document.querySelector('.black');
const multicolour = document.querySelector('.multicolour');
const gridmarks = document.querySelector('.gridmarks');
const chooseColor = document.querySelector('#colorpalette'); 
let selectedSize = 16;
let selectedColour = 'black';

// Removes all childs of a node, currently unused
function removeAllChildNodes(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}

// Sets a new value for the selectedSize variable and displays it on the control panel
gridValue.addEventListener('input', function(e){
         selectedSize = e.target.value;
         console.log(selectedSize);
         gridSize.textContent = `${selectedSize} X ${selectedSize}`;
    });

// Creates the grid and the first stroke of the painting
function createGrid (selectedSize) {
    grid.setAttribute('style', `grid-template-columns: repeat( ${selectedSize}, 2fr); grid-template-rows: repeat( ${selectedSize}, 2fr);`);
    for(let i = 0; i < selectedSize * selectedSize;i++){
        const content = document.createElement('div');
        content.classList.add('box');
         content.addEventListener('mousedown', function(e){
              if(selectedColour == 'random'){
                e.target.style.backgroundColor = getRandomColour();
              } else {
                e.target.style.backgroundColor = selectedColour;
              }
         } )
        grid.appendChild(content);
    }
};

// Erases the html inside of the gris, it is the alternative to removeAllChildNodes in use
function eraseGrid(){
        grid.innerHTML = '';
        createGrid(selectedSize);
}

// Create button
create.addEventListener('click', function(){
    eraseGrid();
});

// Erase button
erase.addEventListener('click', function(){
    eraseGrid();
});

// Black button
black.addEventListener('click', function(){
    selectedColour = 'black';
    console.log(selectedColour);
});

// Helps painting the grid
function paintGrid(e, color){
    if(e.buttons == 1){
        if(e.target.matches('.box')){
            e.target.style.backgroundColor = color;
        }
    } else{
        return;
    }
}

// Creates a random coour for multicolor button
function getRandomColour(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    console.log('rgb(' + r + ', ' + g + ', ' + b + ')');
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';

}

// Multicolour button
multicolour.addEventListener('click', function(){
    selectedColour = 'random';
    console.log(selectedColour);
});

// Choose colour input
chooseColor.addEventListener("change", watchColorPicker, false);
function watchColorPicker(event) {
  selectedColour = event.target.value;
  console.log(selectedColour);
 
}

// grid.addEventListener('mousedown', event => {
//     paintGridEvent = paintGrid(event, selectedColour);
//     if(event.buttons == 1){
//         window.addEventListener('mouseover', (e)=>{
//             if(selectedColour == 'random'){
//                 paintGrid(e, getRandomColour());
//             } else{
//                 paintGrid(e, selectedColour);
//             }
//         });
//     }
// });


// When you click on the grid it activates the paintGrid function
grid.addEventListener('mousedown', event => {
    if(event.buttons == 1){
        let cell = grid.children;
        for(let i = 0; i < selectedSize * selectedSize; i++){
         cell[i].addEventListener('mouseover', function(e){
             if(selectedColour == 'random'){
                paintGrid(e, getRandomColour());
             } else {
                paintGrid(e, selectedColour);
             }
         })
     }
    }
});

// When grid button is pressed it creates a square grid to know where the boxes are, it can be turned on and off
 gridmarks.addEventListener('click', function(){
     let cell = grid.children;
     for(let i = 0; i < selectedSize * selectedSize; i++){
        cell[i].className = (cell[i].className == "box") ?  "boxgrid" : "box";
        }
 });

// Initializes the grid
createGrid(selectedSize);