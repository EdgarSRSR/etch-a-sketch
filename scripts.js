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

// grid.addEventListener('mousedown', function(e){
//     if(e.target.matches('.box')){
//         e.target.classList.add('activated')
//     }
// });

function removeAllChildNodes(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}


gridValue.addEventListener('input', function(e){
         selectedSize = e.target.value;
         console.log(selectedSize);
         gridSize.textContent = `${selectedSize} X ${selectedSize}`;
    });

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

function eraseGrid(){
        grid.innerHTML = '';
        createGrid(selectedSize);
}

create.addEventListener('click', function(){
    eraseGrid();
});

erase.addEventListener('click', function(){
    eraseGrid();
});

black.addEventListener('click', function(){
    selectedColour = 'black';
    console.log(selectedColour);
});

function paintGrid(e, color){
    if(e.buttons == 1){
        if(e.target.matches('.box')){
            e.target.style.backgroundColor = color;
        }
    } else{
        return;
    }
}

function getRandomColour(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    console.log('rgb(' + r + ', ' + g + ', ' + b + ')');
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';

}

multicolour.addEventListener('click', function(){
    selectedColour = 'random';
    console.log(selectedColour);
});

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

 gridmarks.addEventListener('click', function(){
     let cell = grid.children;
     for(let i = 0; i < selectedSize * selectedSize; i++){
        cell[i].className = (cell[i].className == "box") ?  "boxgrid" : "box";
        }
 });



createGrid(selectedSize);