var inputbox = document.getElementById('todo_input');
var resultbox = document.getElementById('result_list');



 // check whether their is todo list or not
if(localStorage.getItem('todo')===null)
   {
   
    $('#removebtn').hide();
   } 
function dosomething1()
{
    if(inputbox.value != '')
        {
           if(localStorage.getItem('todo')===null)
            {
            var mylist1 = [];
            mylist1.push(inputbox.value);
            localStorage.setItem('todo',JSON.stringify(mylist1));
            }
           else
            {
        var mylist2= JSON.parse(localStorage.getItem('todo'));
            mylist2.push(inputbox.value);
            localStorage.setItem('todo',JSON.stringify(mylist2));
             }
    
            inputbox.value = '';
            
        }
    else
        {
            alert('Hey!!! Enter something in the field')
        }

}



// the following function is for show the todo
function showlist()
{
   
     var mylist3= JSON.parse(localStorage.getItem('todo'));
   
    for(var i=0 ; i < mylist3.length ; i++ )
        {
            
           
   resultbox.innerHTML += "<tr class=myrows><td><span class=myspan> "+mylist3[i]+"</span></td></tr>";
            
           
        }
       $('#showmsg').css('display','none');
        
 }

//The following function is for removing the todo

function Remove()
{
       
       localStorage.clear('todo');  
        $('#result_list').hide(); 
    $('#remove').fadeOut(1000);
         
}

//this function is for delete items from todo
function dosomething2()
{   // getting the array from localstorage
  var mylist=JSON.parse(localStorage.getItem('todo'));
    
    
    
    //updating the array in the localstorage after deleting the items
  localStorage.setItem('todo',JSON.stringify(mylist));
    
  
      
}

function mycheck()
{
    var checklist = document.getElementsByClassName('mycheck');
}

