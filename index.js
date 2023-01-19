(function() {
  let todos, createTodo, readTodo, updateTodo, deleteTodo;
  
  todos = ['second', 'third'];

  createTodo = function(){
    let newTodo = prompt("type a todo to add")
    todos.push(newTodo)
    readTodo()
  }
  readTodo = function(){
    alert(todos);
    if(prompt("add another Todo") == "y"){
      createTodo()
    }else {
      updateTodo()
    }
  }
  updateTodo = function() {
      let todoNumber = prompt('Which todo you want to         change?');
        let updatedText = prompt('Enter updated text');
        todos[todoNumber] = updatedText;
        alert(todos);
        wantToSeeAllTodos();
  }
   deleteTodo = function() {
            let todoNumber = prompt(`
                Which todo you want to delete? 
                If it\'s the first one, type 0; 
                if it\'s the second one, type 1, etc. 
                Remember: arrays are zero-indexed!`);
            // the next line deletes the specified todo
            todos = todos.filter( todo => todo != todos[+todoNumber] );
            alert(todos);
            wantToSeeAllTodos();
    }
   var wantToSeeAllTodos = function() {
        if(prompt("Show todos?")=="y"){
            readTodo();
        } else if(prompt("Delete a todo?")=="y") {
            deleteTodo();
        } else {
            alert("exiting the app");
        }
    }
  wantToSeeAllTodos()
})()