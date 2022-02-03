const newTodo   = document.querySelector(".todo_name");
const addTodo   = document.querySelector(".add_todo");
const dragArea  = document.querySelector(".wrapper");
const myWrapper = document.querySelector(".wrapper");
const myWrapper2= document.querySelector(".wrapper2");
let todo        = [];
let doneWork    = [];
let test = "";

// on ajoute un élément par un click
addTodo.addEventListener('click', ()=>{
    if("" != newTodo.value){
        todo.push(newTodo.value);

        let newTodoList = document.createElement('div');
            newTodoList.className = "item";

        for (let i = 0; i < todo.length; i++) {

            newTodoList.innerHTML = newTodo.value;
            myWrapper.appendChild(newTodoList);

        }

        if(todo.length > 0){

            let myItem = document.querySelectorAll(".item");
            
            for (let j = 0; j < myItem.length; j++) {
               
                let deleteTodo = document.createElement('div');
                deleteTodo.className = 'delete';
                deleteTodo.innerHTML = "X";

                myItem[j].appendChild(deleteTodo);
                
                // Suppression d'un todo
                deleteTodo.addEventListener('click', ()=>{
                    let newDoneList = document.createElement('div');
                        newDoneList.className = "doneItem";
                        doneWork.push(todo[j]);

                        for (let i = 0; i < doneWork.length; i++) {

                            newDoneList.innerHTML = todo[j];
                            myWrapper2.appendChild(newDoneList);
                
                        }
                    // myWrapper2.appendChild(myItem[j]);
                    myWrapper.removeChild(myItem[j]);
                    
                })
            }
        }
        newTodo.value = '';
    }
})

// on peut echanger les éléments entre eux (drag and drop)
new Sortable(dragArea, {
    animation: 350
});

// container,
//     todo_wrapp,
//         input = todo_name
//         btn = add_todo

//     wrapper
