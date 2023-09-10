const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";
const myImage = document.querySelector("img");
let myButton = document.querySelector("button");

myImage.onclick = ()=> {
    const mySrc = myImage.getAttribute("src");
    if(mySrc === "images/firefox.jpg"){
        myImage.setAttribute("src",
        "images/firefox2.jpg");
    }
    else{
        myImage.setAttribute("src", "images/firefox.jpg");
    }
}


function setUserName(){
    const myName = prompt("Please enter your name.");
    if(!myName){
        setUserName();
    } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Cabo is cool,
    ${myName}`;
    }
}

if(!localStorage.getItem("name")){
    setUserName();
} else{
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Cabo is cool,
    ${storedName}`;
}

myButton.onclick = () =>{
    setUserName();
};