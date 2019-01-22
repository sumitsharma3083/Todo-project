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
              li.innerHTML = `${todo.data} <button value= ${todo.value} class="delBtn" onclick=removeOne(this)><i class="fas fa-trash-alt"></i></button>`;
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
         var val = Math.random()
         _listOfData.push({data: data, value: val})
         localStorage.setItem('todo', JSON.stringify(_listOfData))

          var li = document.createElement('li')
          li.innerHTML = `${data} <button value= ${val} class="delBtn" onclick=removeOne(this)><i class="fas fa-trash-alt"></i></button>`
          _alltodo.appendChild(li)
          _wrapper.style.display = 'block'
     }
     else
     {

         var _getdata = JSON.parse(localStorage.getItem('todo'))
         let val = Math.random()
         _getdata.push({data: data, value: val})
         localStorage.setItem('todo', JSON.stringify(_getdata))
       
         var li = document.createElement('li')
         li.innerHTML = `${data} <button value= ${val} class="delBtn" onclick=removeOne(this)><i class="fas fa-trash-alt"></i></button>`
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


function removeOne(e){
       
    var data = JSON.parse(localStorage.getItem('todo'))

      var index = data.findIndex((obj)=>{
                     return e.getAttribute('value') == obj.value
      })
      data.splice(index,1)
      localStorage.setItem('todo', JSON.stringify(data))

        _alltodo.innerHTML = null
      JSON.parse(localStorage.getItem('todo')).forEach(todo => {
        let li = document.createElement('li')
         li.innerHTML = `${todo.data} <button value= ${todo.value} class="delBtn" onclick=removeOne(this)><i class="fas fa-trash-alt"></i></button>`;
       _alltodo.appendChild(li)
     });
       if(JSON.parse(localStorage.getItem('todo')).length == 0)
       {
           localStorage.clear();
           _wrapper.style.display = 'none'
       }

    }
    
 