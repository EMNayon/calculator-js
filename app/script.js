function display(val) 
{
  document.getElementById("textval").value += val;
}

function evaluateT()
{
 let x = document.getElementById("textval").value
 let y = eval(x)
 document.getElementById("textval").value = y
}

function clr() 
{
  document.getElementById("textval").value = "";
}
function back() {
  var value = document.getElementById("textval").value;
  document.getElementById("textval").value = value.substr(0, value.length - 1);
}
