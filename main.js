let container = document.getElementById("container");
let canvasSizeButton = document.getElementById("canvasSizeButton");
let counter = 0.1;

for (let i = 0; i < 16; i++) {
    let gridPiece = document.createElement("div");
    container.appendChild(gridPiece);
    gridPiece.className = "grid-piece";
    gridPiece.addEventListener("mouseover", function() {
        randomValues();
        gridPiece.style.cssText = `background-color: rgb(${rgbValue1}, ${rgbValue2}, ${rgbValue3});`
    })
}

function randomValues() {
    rgbValue1 = Math.floor(Math.random() * 255);
    rgbValue2 = Math.floor(Math.random() * 255);
    rgbValue3 = Math.floor(Math.random() * 255);
}

canvasSizeButton.addEventListener("click", function() {
    let size = prompt("Choose a size between 1-100");
    let canvasSize = size * size;
    
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }

    for (let i = 0; i < canvasSize; i++) {
        let addedGridPiece = document.createElement("div");
        container.appendChild(addedGridPiece);
        addedGridPiece.className = "hover";
        addedGridPiece.style.cssText = `width: calc(100% / ${size}); height: calc(100% / ${size}); display: inline-block;`;
        addedGridPiece.addEventListener("mouseover", function() {
            randomValues();
            addedGridPiece.style.cssText = `width: calc(100% / ${size}); height: calc(100% / ${size}); display: inline-block; background-color: rgb(${rgbValue1}, ${rgbValue2}, ${rgbValue3});`;
        })
    }
})