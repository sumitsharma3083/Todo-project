var _userInput = document.getElementById('todo_input')
var _addBtn    = document.getElementById('addBtn')


var _wrapper = document.querySelector('.wrapper')
var _alltodo  = document.querySelector('.alltodos')

var _removeBtn = document.querySelector('.remove_list')
 
if(localStorage.getItem('todo') === null)
{
      _wrapper.style.display = 'none'
}
else{
     JSON.parse(localStorage.getItem('todo')).forEach(todo => {
             let li = document.createElement('li')
              li.innerHTML = todo;
            _alltodo.appendChild(li)
     });
}  

class Todo{
    constructor(input)
    {
        this.input = input
    }

    static AddTodo(data)
    {
     if(localStorage.getItem('todo') === null)
     {
         var _listOfData = [] 
         _listOfData.push(data)
         localStorage.setItem('todo', JSON.stringify(_listOfData))

          var li = document.createElement('li')
          li.innerHTML = data
          _alltodo.appendChild(li)
          _wrapper.style.display = 'block'
     }
     else
     {
         var _getdata = JSON.parse(localStorage.getItem('todo'))
         _getdata.push(data)
         localStorage.setItem('todo', JSON.stringify(_getdata))
       
         var li = document.createElement('li')
         li.innerHTML = data
         _alltodo.appendChild(li)

         _wrapper.style.display = 'block'
     }
    }
}
 
_addBtn.addEventListener('click', function(){
    if(_userInput.value == '')
    {
        _userInput.className = 'emptyAlert'
    }
    else{
        Todo.AddTodo(_userInput.value); 
        _userInput.value = ''
        _userInput.removeAttribute('class')
    }
     
})

_removeBtn.addEventListener('click', ()=>{
    localStorage.clear();
    _alltodo.innerHTML = null;
    _wrapper.style.display = 'none'
})


 