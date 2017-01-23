// solutions.js
function chkAge()
{
   var firstAge = document.getElementById("first");
   var secondAge = document.getElementById("second");
   if (firstAge.value > 118 || firstAge.value < 0)
      age = "Invalid age";
   else
      age = "good age";
}