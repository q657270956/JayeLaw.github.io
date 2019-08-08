let myImage = document.querySelector('img');
myImage.onclick = function(){
	let mySrc = myImage.getAttribute('src');
	if(mySrc === 'img/1.png'){
		myImage.setAttribute('src', 'img/2.jpg');
	}
	else{
		myImage.setAttribute('src', 'img/1.png');
	}
}

function setHeading(name){
	let myHeading = document.querySelector('h1');
	myHeading.textContent = '哎喲不錯哦，' + name + '!';
}
function setUserName(){
	let myName = prompt('請輸入你的名字:');
	localStorage.setItem('name', myName)
	setHeading(myName)
}
let storedName = localStorage.getItem('name');
if(!storedName){
	setUserName();
}
else{
	setHeading(storedName);
}
let myButton = document.querySelector('button');
myButton.onclick = setUserName;