/*
const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}
*/


let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Jai-Sri-Ganesh.jpg') {
      myImage.setAttribute('src','images/Jai-Sri-Ganesh2.jpeg');
    } else {
      myImage.setAttribute('src','images/Jai-Sri-Ganesh.jpg');
    }
}




let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');



// function setUserName() {
//   let myName = prompt('Please enter your name: ');
//   localStorage.setItem('name', myName);
//   myHeading.textContent = 'Jai-Sri-Ganesh, ' + myName;
// } 





// if(!localStorage.getItem('name')) {
//   setUserName();
// } else {
//   let storedName = localStorage.getItem('name');
//   myHeading.textContent = 'Jai-Sri-Ganesh, ' + storedName;
// }





function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Jai-Sri-Ganesh, ' + myName;
  }
}




if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Jai-Sri-Ganesh, ' + storedName;
}




myButton.onclick = function() {
  setUserName();
}