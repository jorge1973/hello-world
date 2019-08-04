var toDoList=["siempre aqui"];
var op=prompt("Que quieres hacer?");
while (op!=="quit"){
    if(op==="list"){
       listar(); 
    }
    else if(op==="new"){
      adicionar();
    }
    else if(op==="delete"){
      borrar();
    }
    op=prompt("Que quieres hacer?");
}
console.log("Ok, you Quit the App");

function listar(){
    toDoList.forEach(function(todo,index){
        console.log(index + ": "+ todo);
    });
}
function adicionar()
{
    var newtodo=prompt("Enter new task to do");
    toDoList.push(newtodo);
    console.log("Nueva tarea creada");
}

function borrar(){
    toDoList.splice(prompt("cual quieres borrar"),1);
    console.log("Tarea borrada");
}