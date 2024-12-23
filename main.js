let container = document.getElementById("container");
let canvasSizeButton = document.getElementById("canvasSizeButton");
let rgbValue1 = 50;
let rgbValue2 = 50;
let rgbValue3 = 150;

let gridPiece1 = document.createElement("div");
let gridPiece2 = document.createElement("div");
let gridPiece3 = document.createElement("div");
let gridPiece4 = document.createElement("div");
let gridPiece5 = document.createElement("div");
let gridPiece6 = document.createElement("div");
let gridPiece7 = document.createElement("div");
let gridPiece8 = document.createElement("div");
let gridPiece9 = document.createElement("div");
let gridPiece10 = document.createElement("div");
let gridPiece11 = document.createElement("div");
let gridPiece12 = document.createElement("div");
let gridPiece13 = document.createElement("div");
let gridPiece14 = document.createElement("div");
let gridPiece15 = document.createElement("div");
let gridPiece16 = document.createElement("div");

gridPiece1.className = "grid-piece hover";
gridPiece2.className = "grid-piece hover";
gridPiece3.className = "grid-piece hover";
gridPiece4.className = "grid-piece hover";
gridPiece5.className = "grid-piece hover";
gridPiece6.className = "grid-piece hover";
gridPiece7.className = "grid-piece hover";
gridPiece8.className = "grid-piece hover";
gridPiece9.className = "grid-piece hover";
gridPiece10.className = "grid-piece hover";
gridPiece11.className = "grid-piece hover";
gridPiece12.className = "grid-piece hover";
gridPiece13.className = "grid-piece hover";
gridPiece14.className = "grid-piece hover";
gridPiece15.className = "grid-piece hover";
gridPiece16.className = "grid-piece hover";

container.appendChild(gridPiece1);
container.appendChild(gridPiece2);
container.appendChild(gridPiece3);
container.appendChild(gridPiece4);
container.appendChild(gridPiece5);
container.appendChild(gridPiece6);
container.appendChild(gridPiece7);
container.appendChild(gridPiece8);
container.appendChild(gridPiece9);
container.appendChild(gridPiece10);
container.appendChild(gridPiece11);
container.appendChild(gridPiece12);
container.appendChild(gridPiece13);
container.appendChild(gridPiece14);
container.appendChild(gridPiece15);
container.appendChild(gridPiece16);

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
            console.log("yes1");
            randomValues();
            addedGridPiece.style.cssText = `width: calc(100% / ${size}); height: calc(100% / ${size}); display: inline-block; background-color: rgb(${rgbValue1}, ${rgbValue2}, ${rgbValue3});`;
            console.log("yes2");
        })
    }
})