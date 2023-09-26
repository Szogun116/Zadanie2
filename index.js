var obrazki = new Array();
obrazki[1] = "IMG_2983.JPG";
obrazki[2] = "unnamed.PNG";
var sekund = 1; 
 
var a = 1;
 
function zmien()
{
	var ile = obrazki.length;
	document.getElementById("obrazek").src = obrazki[a];	
	a++;
	if(ile==a) {
		a=1;
	} 
 
}
 
 
setInterval("zmien()", sekund*1000);