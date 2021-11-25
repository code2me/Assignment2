root.style.display = 'flex';
root.style.flexDirection = 'column';

let h1 = document.createElement('h1');
h1.innerHTML = "Assignment 1";

let h2 = document.createElement('h2');
h2.innerHTML = "Provided Examples";

root.append(h1);
root.append(h2);

let list = [{
        red: 50,
        blue: 50
    },
    {
        green: 95,
        blue: 5
    },
    {
        red: 5,
        green: 90,
        blue: 5
    },
    {
        red: 95,
        blue: 5
    },
];

//----------------------Row 1, Row 2, Row 3, Row 4----------------------
for (let i = 0; i < 4; i++) {
    if(i == 2) {
        let h22 = document.createElement('h2');
        h22.innerHTML = "Student TODOs";
        root.append(h22);
    }
    let h3 = document.createElement('h3');
    h3.innerHTML = `Row ${i+1}`;
    root.append(h3);
    let block = document.createElement('div');
    block.style.border = "1px solid black";
    block.style.height = "40px";
    block.style.width = "100%";
    block.style.display = "flex";
    for(let j of Object.keys(list[i])) {
        let colorDiv = document.createElement('div');
        colorDiv.style.backgroundColor = `${j}`;
        colorDiv.style.height = "40px";
        colorDiv.style.width = `${list[i][j]}%`;
        block.append(colorDiv);
    }
    root.append(block);
}

//----------------------Row 5------------------------------------------
let row5 = document.createElement('h3');
row5.innerHTML = "Row 5";
root.append(row5);

let row5Block = document.createElement('div');
row5Block.style.border = "1px solid black";
row5Block.style.height = "40px";
row5Block.style.width = "100%";
row5Block.style.display = "flex";

let color5 = document.createElement('div');
color5.style.backgroundColor = "green";
color5.style.height = "40px";
color5.style.width = "100%";

let innerRed = document.createElement('div');
innerRed.style.backgroundColor = "red";
innerRed.style.height = "30px";
innerRed.style.width = "4%";

color5.style.display = "flex";
color5.style.justifyContent = "center";
color5.style.alignItems = "center";

color5.append(innerRed);
row5Block.append(color5);
root.append(row5Block);

//----------------------Row 6------------------------------------------
let row6 = document.createElement('h3');
row6.innerHTML = "Row 6";
root.append(row6);

let row6Block = document.createElement('div');
row6Block.style.border = "1px solid black";
row6Block.style.height = "40px";
row6Block.style.width = "100%";
row6Block.style.display = "flex";

let color6 = document.createElement('div');
color6.style.backgroundColor = "red";
color6.style.height = "40px";
color6.style.width = "100%";

let innerBlue = document.createElement('div');
innerBlue.style.backgroundColor = "blue";
innerBlue.style.height = "40px";
innerBlue.style.width = "10%";

color6.style.display = "flex";
color6.style.justifyContent = "center";
color6.style.alignItems = "center";

color6.append(innerBlue);
row6Block.append(color6);
root.append(row6Block);

//----------------------Row 7------------------------------------------
let row7 = document.createElement('h3');
row7.innerHTML = "Row 7";
root.append(row7);

let row7Block = document.createElement('div');
row7Block.style.border = "1px solid black";
row7Block.style.height = "40px";
row7Block.style.width = "100%";
row7Block.style.display = "flex";

let color7 = document.createElement('div');
color7.style.backgroundColor = "blue";
color7.style.height = "40px";
color7.style.width = "100%";
color7.style.display = "flex";
color7.style.justifyContent = "center";
color7.style.alignItems = "center";

let leftRed = document.createElement('div');
leftRed.style.backgroundColor = "red";
leftRed.style.height = "40px";
leftRed.style.width = "10%";
color7.append(leftRed);

let greenStrip = document.createElement('div');
greenStrip.style.backgroundColor = "green";
greenStrip.style.height = "10px";
greenStrip.style.width = "90%";
color7.append(greenStrip);

row7Block.append(color7);
root.append(row7Block);

//----------------------Row 8------------------------------------------
let row8 = document.createElement('h3');
row8.innerHTML = "Row 8";
root.append(row8);

let row8Block = document.createElement('div');
row8Block.style.border = "1px solid black";
row8Block.style.height = "40px";
row8Block.style.width = "100%";
row8Block.style.display = "flex";

let color8 = document.createElement('div');
color8.style.backgroundColor = "green";
color8.style.height = "40px";
color8.style.width = "100%";

for (let i = 0; i < 5; i++) {
    let innerGreen = document.createElement('div');
    innerGreen.style.backgroundColor = "orange";
    innerGreen.style.height = "40px";
    innerGreen.style.width = "5%";
    color8.append(innerGreen);
}

color8.style.display = "flex";
color8.style.justifyContent = "space-between";

row8Block.append(color8);
root.append(row8Block);

//----------------------Row 9------------------------------------------
let row9 = document.createElement('h3');
row9.innerHTML = "Row 9";
root.append(row9);

let row9Block = document.createElement('div');
row9Block.style.border = "1px solid black";
row9Block.style.height = "40px";
row9Block.style.width = "100%";
row9Block.style.display = "flex";

let color9 = document.createElement('div');
color9.style.backgroundColor = "orange";
color9.style.height = "40px";
color9.style.width = "100%";

for(let i = 0; i < 4; i++) {
    let innerGreen = document.createElement('div');
    innerGreen.style.backgroundColor = "green";
    innerGreen.style.height = "40px";
    innerGreen.style.width = "2%";
    color9.append(innerGreen);
}

color9.style.display = "flex";
color9.style.justifyContent = "space-evenly";

row9Block.append(color9);
root.append(row9Block);