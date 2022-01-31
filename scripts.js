

//create css div grid
let gridSize = 16;
let gridContainer = document.querySelector(".grid-container");

function createEtchGrid(gridSize) {
    let id = 0;
    gridSize = gridSize * gridSize;
    for(i=0; i < gridSize; i++) {
        
        id++;
        let gridDiv = document.createElement("div");
        gridDiv.classList.add("grid-item");
        gridDiv.setAttribute('id', id);
        gridDiv.addEventListener('mouseover', changeColor)
        gridContainer.appendChild(gridDiv);
    }


}

function changeColor(e) {
    console.log(e);
}

createEtchGrid(gridSize);