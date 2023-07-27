// have a pop-up message show up
let name = "Khye";

alert("Hello " + name + " Welcome!");

// get reference
let heading = document.querySelector("h1");
console.log(heading);
console.dir(heading);

let color = "yellow";

// change background-color of heading
heading.style["background-color"] = color;
heading.style["font-size"] = "60px";
heading.style["padding"] = "20px";

// get reference to the second h1
let heading2 = document.querySelector("#two");

// change background-color of heading2
heading2.style["background-color"] = "orange";

// get reference to the third h1
let heading3 = document.getElementById("three");

// change background-color of heading3
heading3.style["background-color"] = "blue";



// get all h1 references (all at once)
let allHeadings = document.querySelectorAll("h1");
console.log(allHeadings);

// change background-color of allHeadings
for (let i = 0; i < allHeadings.length; i++) {
    allHeadings[i].style["background-color"] = "green";
}

// get all h1 references (using their class)
let allHeadings2 = document.getElementsByClassName("title");
console.log(allHeadings2);

// use a for loop to iterate through allHeadings2 (array)
for (let i = 0; i < allHeadings2.length; i++) {
    allHeadings2[i].style["background-color"] = "rebeccapurple";
}

let a = document.querySelector(".title");
a.style["font-family"] = "helvetica";

let b = document.querySelector("h2");
console.log(b);

let h2 = document.querySelectorAll("h2");
console.log(h2);

h2[0].style["background-color"] = "yellow";

// get all h1 references (using their class)
let allHeadingsArray = document.getElementsByClassName("title");

// use a for loop to iterate through allHeadings2 (array)
for (let i = 0; i < allHeadingsArray.length; i++) {
    allHeadingsArray[i].style["background-color"] = "rgb(0, 0, 0)";
    allHeadingsArray[i].style["color"] = "white";
    allHeadingsArray[i].style["padding"] = "20px";
}

// get a reference to blah
let blah = document.getElementById("blah");

// change the innerHTML of blah
blah.innerHTML += "Hahahahahahaha";

// get a reference to the third h1
let thirdh1 = document.getElementById("three");

// change the innerHTML of thirdh1
thirdh1.innerHTML = "This is a new caption <br><br><br>";

// declare an array with different colors
let colorsArray = ["pink", "purple", "gold", "indigo", "teal", "aqua"];

// get reference
let secondElement = document.getElementById("two");

// generate a random number between 0 and 5.99999999
let randNum = Math.random() * colorsArray.length;
console.log("randNum:", randNum);

// round down randNum
let randInt = parseInt(randNum);
console.log("randInt:", randInt);

// select a random color
let randColor = colorsArray[randInt];
console.log("randColor:", randColor);

// change background-color of secondElement
secondElement.style["background-color"] = randColor;


// declare an array with different colors
let colorsArray = ["pink", "purple", "gold", "indigo", "teal", "aqua"];

// get a reference to all the h1
let allh1Array = document.getElementsByClassName("title");
// let allh1Array = document.querySelectorAll("h1");

// use a for loop to iterate through allh1Array
for (let i = 0; i < allh1Array.length; i++) {
    // generate a random integer
    let randInt = parseInt(Math.random() * colorsArray.length);

    // change background-color of each element in the array
    allh1Array[i].style["background-color"] = colorsArray[randInt];

    // change the innerHTML of each element
    allh1Array[i].innerHTML = i;
}