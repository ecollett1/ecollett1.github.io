var res = "";
var slideNum = 1;

function readFile(elementId){
    var xmlhttp;
    resetData();
    setData(elementId);
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
function setData(elementId)
{
	document.getElementById("_noun").style.visibility = "visible";
    document.getElementById("_verb").style.visibility = "visible";
    document.getElementById("_adjective").style.visibility = "visible";
    document.getElementById("_pro").style.visibility = "visible";
    document.getElementById("_place").style.visibility = "visible";
    
    document.getElementById("par").style.visibility = "visible";
    document.getElementById("par1").style.visibility = "visible";
    document.getElementById("par2").style.visibility = "visible";
    document.getElementById("par3").style.visibility = "visible";
    document.getElementById("par4").style.visibility = "visible";
    document.getElementById('result').style.background = "transparent";
    if(elementId == "albert")
    {
    document.getElementById("div1").style.backgroundImage = "url('https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTCna4Ko5lgLJzX_sJKHWWLpC2uBr_uvNMXsMpwlNYHoUQqDEUF')";
    document.getElementById("div3").style.backgroundImage = "url('https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSjZkaP5qXVQn6rRQHzCCEfjw9eAJXbr9EyF3cR7d2gi2xY-1NLQg')";
    }
    else if(elementId == "alice")
    {
        document.getElementById("div1").style.backgroundImage = "url('https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT-wYQatEFLdstDhSyN5KcYhRoUhRjzz6gtCbWv4b2icDm8LiwfAw')";
    document.getElementById("div3").style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSinLS5Rsl3ZimRHmXhi-ZyF97sbl1cSHKvIs2qjhRnNSiJaHa9bg')";
    }
}

function replace(myStory)
{
 
	 res = myStory;
}

function ChangeColor(elementId)
{
	document.getElementById(elementId).style.background = "Navy";
	document.getElementById(elementId).style.color = "White";
    document.getElementById(elementId).style.width = "25%";
}

function changeBack(elementId)
{
	document.getElementById(elementId).style.background = "lightgrey";
	document.getElementById(elementId).style.color = "Black";
    document.getElementById(elementId).style.width = "25%";
}

function mDown(obj) {
   	obj.style.backgroundColor = "Green";
   
}

function mUp(obj) {
	obj.style.backgroundColor="DarkBlue";
}

function display()
{
	var noun = document.getElementById("_noun").value.bold().sup().fontcolor("white");
	var verb = document.getElementById("_verb").value.bold().sup().fontcolor("white");
	var adjective = document.getElementById("_adjective").value.bold().sup().fontcolor("white");
	var pronoun = document.getElementById("_pro").value.bold().sup().fontcolor("white");
	var place = document.getElementById("_place").value.bold().sup().fontcolor("white"); 
	
        var myStr = res.replace(/_noun/ig, noun)
                       .replace(/_verb/ig, verb)
                       .replace(/_adjective/ig, adjective)
                       .replace(/_pro/ig, pronoun)
                       .replace(/_place/ig, place);

        nextSlide(0);
	
	document.getElementById('result').innerHTML = myStr;
        document.getElementById('result').style.background = "LightBlue";
	document.getElementById('result').scrollIntoView();
}

function nextSlide(n) {
    changePicture(slideNum += n);
}

function changePicture(n) {
    var number;
    var slideNumber = document.getElementsByClassName("pictures");

    if (n > slideNumber.length)
    {
        slideNum = 1;
    }
    else if (n < 1)
    {
        slideNum = slideNumber.length;
    }
    for (var i = 0; i < slideNumber.length; i++)
    {
        slideNumber[i].style.display = "none";
    }
    slideNumber[slideNum - 1].style.display = "block";
}

function resetData()
{
        document.getElementById("story").style.visibility = "hidden";
	
	
	document.getElementById("_verb").value = "";
	document.getElementById("_adjective").value = "";
	document.getElementById("_pro").value = "";
	document.getElementById("_place").value = "";
        document.getElementById("_noun").value = "";
	document.getElementById('result').innerHTML = "";
	document.getElementById("_noun").style.background = "white";
	document.getElementById("_verb").style.background = "white";
	document.getElementById("_adjective").style.background = "white";
	document.getElementById("_pro").style.background = "white";
	document.getElementById("_place").style.background = "white";
        document.getElementById('result').style.background = "transparent";
}

function displayButton(){
    document.getElementById("story").style.visibility = "visible";
    document.getElementById("story").innerHTML = "Display My Story";
}

function myFunction1(elementId){
	 elementId.style.background = "LightSkyBlue";
}
