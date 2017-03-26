var res = "";

function readFile(elementId){

    var xmlhttp;

    resetData();
    setData();

    if(window.XMLHttpRequest){
        xmlhttp = new XMLHttpRequest();
    }else{
        smlhttp = new ActiveXobject("Microsoft.XMLHTTP");
    }
    
   
    var text = document.getElementById(elementId).getAttribute('value');

    xmlhttp.onreadystatechange = function(){ 
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
            var myStory = xmlhttp.responseText;
            replace(myStory);
           
        }
    }
    
    xmlhttp.open("GET", text,true);
    xmlhttp.send();

}


function setData()
{
	document.getElementById("noun").style.visibility = "visible";
    document.getElementById("verb").style.visibility = "visible";
    document.getElementById("adjective").style.visibility = "visible";
    document.getElementById("pro").style.visibility = "visible";
    document.getElementById("place").style.visibility = "visible";
    
    document.getElementById("par").style.visibility = "visible";
    document.getElementById("par1").style.visibility = "visible";
    document.getElementById("par2").style.visibility = "visible";
    document.getElementById("par3").style.visibility = "visible";
    document.getElementById("par4").style.visibility = "visible";
}
function replace(myStory)
{
 
	 res = myStory;


}

function ChangeColor(elementId)
{

	document.getElementById(elementId).style.background = "Navy";
	document.getElementById(elementId).style.color = "White";

}

function changeBack(elementId)
{

	document.getElementById(elementId).style.background = "lightgrey";
	document.getElementById(elementId).style.color = "Black";

}

function mDown(obj) {
   	obj.style.backgroundColor = "Green";
   
}

function mUp(obj) {
	obj.style.backgroundColor="DarkBlue";

}

function display()
{
	var noun = document.getElementById("noun").value;
	var verb = document.getElementById("verb").value;
	var adjective = document.getElementById("adjective").value;
	var pro = document.getElementById("pro").value;
	var place = document.getElementById("place").value; 

	var myStr = res.replace(/noun/ig, noun)
					.replace(/verb/ig, verb)
					.replace(/adjective/ig, adjective)
	 				.replace(/pro/ig, pro)
	 				.replace(/place/ig, place);

	document.getElementById('result').innerHTML = myStr;
	document.getElementById('result').scrollIntoView();
}

function resetData()
{

	document.getElementById("story").style.visibility = "hidden";
	
	
	document.getElementById("verb").value = "";
	document.getElementById("adjective").value = "";
	document.getElementById("pro").value = "";
	document.getElementById("place").value = "";
	document.getElementById('result').innerHTML = "";

	document.getElementById("noun").style.background = "white";
	document.getElementById("verb").style.background = "white";
	document.getElementById("adjective").style.background = "white";
	document.getElementById("pro").style.background = "white";
	document.getElementById("place").style.background = "white";

}	

function displayButton(){

    document.getElementById("story").style.visibility = "visible";
    document.getElementById("story").innerHTML = "Display";
}

function myFunction1(elementId){
	 elementId.style.background = "Moccasin";
}