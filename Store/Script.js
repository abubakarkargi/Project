function toggleSwitch (){
    var x =
    document.getElementById("Hide_This");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none"
    }
}
let d = 0;
let cold = ['white', 'rgb(55, 55, 55)']
function backgroundSwitch(){
    let y = document.getElementById('light');
    if (y.style.backgroundColor === cold[1]) {
        y.style.backgroundColor = "white"
        y.style.color="rgb(70,225, 200)"
        document.getElementById('head').style.color="white"
    } else {
        y.style.backgroundColor = "rgb(55, 55, 55)"
        y.style.color = "white"
    }
}
let i = 0;
    let colors = ['linear-gradient(30deg,rgb(255, 36, 171), rgb(255, 246, 254))', 'linear-gradient(30deg, rgb(0, 0, 0), rgb(255, 189, 36))', 'linear-gradient(30deg, rgb(0, 217, 255), rgb(255, 0, 0))', 'linear-gradient(30deg, rgb(255, 0, 0), rgb(255, 179, 0))'];
function dynamicHeader (){
    document.getElementById('head').style.background = colors[i]
    i++;
    if(i>=colors.length){
        i=0
    }
}
function changeColor(){
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById('head').style.background = '#'+randomColor;
}
function dynamicHead(){
    setInterval(changeColor, 300);
}
function screenOptimization(){
    document.body.style.fontSize = "30px"
}
function donate(){
    alert('Fill in the following fields to make a donation')
    prompt('Type your Account Number Here')
    prompt('Type your Card pin here')
    prompt('Type your Card Number Here')
    prompt('Type your Card Expiry Date here')
    prompt('Type your Card CVV here')
    alert('Thanks for the donation')
}
function closeSidebar(){
    document.getElementById('Hide_This').style.display = "none"
}