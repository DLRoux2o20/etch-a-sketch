let container = document.getElementById("container");
let canvasSizeButton = document.getElementById("canvasSizeButton");
let buttonText = document.getElementById("buttonText");
let canvasSize = 0;
let size = 0;

for (let i = 0; i < 256; i++) {
    let gridPiece = document.createElement("div");
    container.appendChild(gridPiece);
    gridPiece.className = "grid-piece";
    gridPiece.style.opacity = "0";
    gridPiece.addEventListener("mouseover", function(e) {
        randomValues();
        gridPiece.style.cssText = `background-color: rgb(${rgbValue1}, ${rgbValue2}, ${rgbValue3}); opacity: ${e.target.style.opacity};`;
        e.target.style.opacity = `calc(${e.target.style.opacity} + 0.1)`;
    })
}

canvasSizeButton.addEventListener("mouseover", function() {
    canvasSizeButton.style.cssText = "transform: scale(1.1); transition-timing-function: linear; transition-duration: 0.5s; transition-delay: 0ms;";
    buttonText.style.cssText = "transform: scale(1.1); transition-timing-function: linear; transition-duration: 0.5s; transition-delay: 0ms;";
})
    
canvasSizeButton.addEventListener("mouseout", function() {
    canvasSizeButton.style.cssText = "transform: scale(1); transition-timing-function: linear; transition-duration: 0.5s; transition-delay: 0ms;";
    buttonText.style.cssText = "transform: scale(1); transition-timing-function: linear; transition-duration: 0.5s; transition-delay: 0ms;";
})

buttonText.addEventListener("mouseover", function() {
    canvasSizeButton.style.cssText = "transform: scale(1.1); transition-timing-function: linear; transition-duration: 0.5s; transition-delay: 0ms;";
    buttonText.style.cssText = "transform: scale(1.1); transition-timing-function: linear; transition-duration: 0.5s; transition-delay: 0ms;";
})
    
buttonText.addEventListener("mouseout", function() {
    canvasSizeButton.style.cssText = "transform: scale(1); transition-timing-function: linear; transition-duration: 0.5s; transition-delay: 0ms;";
    buttonText.style.cssText = "transform: scale(1); transition-timing-function: linear; transition-duration: 0.5s; transition-delay: 0ms;";
})

canvasSizeButton.addEventListener("click", function() {
    size = prompt("Choose a size between 1-100");
    canvasSize = size * size;
    changeCanvasSize();
})

buttonText.addEventListener("click", function() {
    size = prompt("Choose a size between 1-100");
    canvasSize = size * size;
    changeCanvasSize();
})

function randomValues() {
    rgbValue1 = Math.floor(Math.random() * 255);
    rgbValue2 = Math.floor(Math.random() * 255);
    rgbValue3 = Math.floor(Math.random() * 255);
}

function changeCanvasSize() {

    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }

    for (let i = 0; i < canvasSize; i++) {
        let addedGridPiece = document.createElement("div");
        container.appendChild(addedGridPiece);
        addedGridPiece.style.cssText = `width: calc(100% / ${size}); height: calc(100% / ${size}); display: inline-block; opacity: 0;`;
        addedGridPiece.addEventListener("mouseover", function(e) {
            randomValues();
            addedGridPiece.style.cssText = `width: calc(100% / ${size}); height: calc(100% / ${size}); display: inline-block; background-color: rgb(${rgbValue1}, ${rgbValue2}, ${rgbValue3}); opacity: ${e.target.style.opacity};`;
            e.target.style.opacity =  `calc(${e.target.style.opacity} + 0.1)`;
        })
    }
}
    
