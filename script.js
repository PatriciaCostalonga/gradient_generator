var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

// testing console.log:
// console.log(css);
// console.log(color1);
// console.log(color2);

// testing console.log:
// color1.addEventListener("input", function(){
// 	console.log(color1.value);
// });
// color2.addEventListener("input", function(){
// 	console.log(color2.value);
// });

// Since both functions look the SyncManager, let's put everything in one function only and called it:
// color1.addEventListener("input", function(){
// 	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
// });
// color2.addEventListener("input", function(){
// 	body.style.background = "linear-gradient(to left, " + color2.value + ", " + color1.value + ")";
// });

function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background + ";";
}

//We don't need to call the setGradient function again, because the event "input" is triggered automatically and runs a function. And the second paramether automatically gets ran with the event:

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);