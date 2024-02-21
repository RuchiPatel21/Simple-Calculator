const input=document.getElementById("input");
const output=document.getElementById("output");


function btnValue(btnValue){
    if(document.getElementById("input").value==="0" &&document.getElementById("input")!=="*"&&document.getElementById("input")!=="/"&&document.getElementById("input")!=="+"&&document.getElementById("input")!=="-")
    {
        document.getElementById("input").value=btnValue;
    }
    else{
        document.getElementById("input").value+=btnValue;
    }
}
function clearInput(){
    document.getElementById("input").value=0;
    document.getElementById("output").value="";
}

function Result(){
    document.getElementById("output").value=document.getElementById("input").value+"=";
    document.getElementById("input").value= eval(document.getElementById("input").value);

    showHistory();
}


function myFunction() {
  var element = document.body;
  element.classList.toggle("cherryblossom-mode");
}

function delNum()
{
    if(document.getElementById("input").value.length > 1)
    document.getElementById("input").value = document.getElementById("input").value.slice(0, -1);
    else
    document.getElementById("input").value = 0;
    document.getElementById("output").value = "";
}


function showHistory()
 {
     var equation = document.getElementById("output").value;
     var ans = document.getElementById("input").value;
     console.log(equation, ans);
     historyDiv.innerHTML += `<div class="his">
                                 <p>${equation}</p>
                                 <p>${ans}</p>
                             </div>`;
 }

function clearHistory()
{
    if(confirm("Are you sure you want to clear history"))
    document.getElementById("historyDiv").innerHTML="";
}
