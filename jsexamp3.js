var myImage = document.querySelector('img');
myImage.onClick = function(){
	var mySrc = myImage.getAttribute('src');
	if (mySrc === 'images/C:/Rijo/Scripts/man.png') {
		myImage.setAttribute ('src','images/C:/Rijo/Scripts/man3.png');
		} 
	else {
		myImage.setAttribute ('src','images/C:/Rijo/Scripts/man.png');
	}

}