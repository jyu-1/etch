const container = document.getElementById("container");

function makeGrid(number){
    container.style.setProperty("grid-rows", number);
    container.style.setProperty("grid-column", number);

    for(i = 0; i < (number**2); i++){
        let cell = document.createElement("div");
        cell.innerText = i;
        container.appendChild(cell).className = "grid-item";
    }
}
