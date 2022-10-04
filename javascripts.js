const container = document.getElementById("container");

function makeGrid(number){
    container.style.setProperty("--grid-row", number);
    container.style.setProperty("--grid-column", number);

    for(i = 0; i < (number * number); i++){
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
    }
}

makeGrid(16);