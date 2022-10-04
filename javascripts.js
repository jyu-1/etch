const container = document.getElementById("container");

function makeGrid(number) {
    container.style.setProperty("--grid-row", number);
    container.style.setProperty("--grid-column", number);

    for (i = 0; i < (number * number); i++) {
        const cell = document.createElement("div");
        cell.addEventListener("mouseover", (e) => {
            e.target.style.backgroundColor = "black";
        })
        container.appendChild(cell).classList.add("grid-item");
    }
}

makeGrid(16);
