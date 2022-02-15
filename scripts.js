const container = document.querySelector('#container');
let gridValue = document.querySelector('input');
let gridSize = document.querySelector('.grid-size');
const grid = document.querySelector('.grid');
const create = document.querySelector('.create');
const erase = document.querySelector('.erase');
const black = document.querySelector('.black');
const multicolour = document.querySelector('.multicolour');  
// let selectedColour = document.querySelector(''); 
let selectedSize = 16;




// function createDiv(size){
//     const content = document.createElement('div');
//     content.classList.add('box');
//     content.style.width = `${size}px`;
//     content.style.height = `${size}px`;
//     return content;
// }

// createGrid = () => {
//     for(let i = 0; i < 256 ; i++){
//         const content = document.createElement('div');
//         content.classList.add('box');
//         content.addEventListener('mousedown', function(e){
//             e.target.style.backgroundColor = 'black';
//         } )
//         grid.appendChild(content);

//     }
// };




// function createGrid(selectedSize){
//     for(let i = 0;i< selectedSize;i++){
//         for(let j = 0;j< selectedSize;j++){
//             grid.appendChild(createDiv(grid.clientWidth/ selectedSize));
//         }
//     }
//}

// function eraseGrid(){
//     grid.innerHTML = '';
//     createGrid(selectedSize);
// }

grid.addEventListener('mousedown', function(e){
    if(e.target.matches('.box')){
        e.target.classList.add('activated')
    }
});

// gridValue.addEventListener('input', function(e){
//     selectedSize = e.target.value;
//     console.log(selectedSize);
//     gridSize.textContent = `${selectedSize} X ${selectedSize}`;
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
            e.target.style.backgroundColor = 'black';
        } )
        grid.appendChild(content);
    }
};

function eraseGrid(){
        //removeAllChildNodes(grid);
        grid.innerHTML = '';
        createGrid(selectedSize);
}

create.addEventListener('click', function(){
    eraseGrid();
});

// create.addEventListener('click', function(){
//     eraseGrid();
// });

erase.addEventListener('click', function(){
    eraseGrid();
});

black.addEventListener('click', function(){
    let cell = grid.children;
    for(let i = 0; i < selectedSize * selectedSize; i++){
        cell[i].addEventListener('mouseover', function(e){
            e.target.style.backgroundColor = 'black';
        })
    }
});


createGrid(selectedSize);