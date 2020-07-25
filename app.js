var list=document.getElementById("list");
var txt1="TASK: ";
var txt2="DESCRIPTION: ";
function TODO()
{
    
    var task=document.getElementById("task");
    var desc=document.getElementById("desc");
    txt1+=task.value;
    txt2+=desc.value;
    var li=document.createElement("li");
    var div=document.createElement("div");
    var textli=document.createTextNode(txt1);
    var descli=document.createTextNode(txt2);
    txt1="TASK: ";
    txt2="DESCRIPTION: ";
    
   
    div.appendChild(descli);
    div.setAttribute("class","description")
    li.appendChild(textli);
    var delbtn=document.createElement("button");
    var deltext=document.createTextNode("DELETE");
    delbtn.appendChild(deltext);
    delbtn.setAttribute("onclick","deletefunc(this)")
    delbtn.className+=" btn btn-dark mybtn mybtndel"
    li.appendChild(delbtn);
    var editbtn=document.createElement("button");
    var edittxt=document.createTextNode("EDIT");
    editbtn.className+=" btn btn-dark mybtnedit "
    editbtn.appendChild(edittxt);
    editbtn.setAttribute("onclick","editfunc(this)")
    li.appendChild(editbtn);

    li.appendChild(div);
    li.setAttribute("class","colours")
    

    list.appendChild(li);
    task.value='';
    desc.value='';
}

function deletefunc(e)
{
    e.parentNode.remove();
}
function deleteall()
{
    list.innerHTML=''
}
function editfunc(e)
{
    var edittask=prompt("Enter task to edit",e.parentNode.firstChild.nodeValue);
    e.parentNode.firstChild.nodeValue="Task: "
    e.parentNode.firstChild.nodeValue+=edittask;
}
