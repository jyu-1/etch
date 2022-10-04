const container = document.getElementById("container");
const slider = document.getElementById("myslider");
const output = document.getElementById("output");

let currentColor = "#000000";
let currentMode = "default";
let randomRed = Math.floor(Math.random() * 256);
let randomGreen = Math.floor(Math.random() * 256);
let randomBlue = Math.floor(Math.random() * 256);

slider.style.setProperty("--slidercolor", currentColor);

const colorButton = document.getElementById("colorbutton").addEventListener("click", ()=>{
    currentMode = "default";
    resetGrid();
    makeGrid(slider.value);
})

const rainbowButton = document.getElementById("rainbowbutton").addEventListener("click", ()=>{
    currentMode = "rainbow";
    resetGrid();
    makeGrid(slider.value);
})

const colorPicker = document.getElementById("colorpicker").addEventListener("change", (event) => {
    currentColor = event.target.value;
    slider.style.setProperty("--slidercolor", currentColor);
})

output.innerText = slider.value + " x " + slider.value;

slider.onchange = function () {
    output.innerText = slider.value + " x " + slider.value;
    resetGrid();
    makeGrid(slider.value);
}

function makeGrid(number) {
    container.style.setProperty("--grid-row", number);
    container.style.setProperty("--grid-column", number);
    if (currentMode == "default") {
        for (i = 0; i < (number * number); i++) {
            const cell = document.createElement("div");
            cell.addEventListener("mouseover", (event) => {
                event.target.style.backgroundColor = currentColor;
            })
            container.appendChild(cell).classList.add("grid-item");
        }
    }
    else if (currentMode == "rainbow") {
        for (i = 0; i < (number * number); i++) {

            const cell = document.createElement("div");
            cell.addEventListener("mouseover", (event) => {
                randomRed = Math.floor(Math.random() * 256);
                randomGreen = Math.floor(Math.random() * 256);
                randomBlue = Math.floor(Math.random() * 256);
                event.target.style.backgroundColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
                slider.style.setProperty("--slidercolor", `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`);
            })
            container.appendChild(cell).classList.add("grid-item");
        }
    }
}

makeGrid(slider.value);

function resetGrid() {
    container.style.setProperty("--grid-row", "none");
    container.style.setProperty("--grid-column", "none");

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}