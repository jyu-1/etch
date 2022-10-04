const container = document.getElementById("container");
const slider = document.getElementById("myslider");
const output = document.getElementById("output");
output.innerHTML = slider.value + " x " + slider.value;

slider.oninput = function (){
    output.innerHTML = slider.value + " x " + slider.value;
}

function makeGrid(number) {
    container.style.setProperty("--grid-row", number);
    container.style.setProperty("--grid-column", number);

    for (i = 0; i < (number * number); i++) {
        const cell = document.createElement("div");
        cell.addEventListener("mouseover", (event) => {
            event.target.style.backgroundColor = "black";
        })
        container.appendChild(cell).classList.add("grid-item");
    }
}

makeGrid(slider.value);
