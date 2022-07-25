
var pepoleList=["monika","salina","suraj","radita","pabita","cat","tiger","lion"]


function showListSearchShow() {
    var userValue=document.getElementById('showListSearch').value;
    var showListValue=document.getElementById('showListValue')
    var searchList=[];
    for(var i=0;i<pepoleList.length;i++)
    {
      
      if(pepoleList[i].toLowerCase().includes(userValue.toLowerCase()))
      {
        showListValue.style.display='block';
        searchList.push(pepoleList[i]);
      }
      
    }
 let singleString="";
 for(let i=0;i<searchList.length;i++)
 {
   singleString =singleString + `<li>${searchList[i]}</li>`;
 }
 showListValue.innerHTML=singleString;
  }