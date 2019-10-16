import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from 'src/app/services/todo-service.service'


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  
  // define the todo object
  todos: Todo[];

  todoInput: string;
  
  constructor(private TodoService: TodoService) { }

  ngOnInit() {

    // we subsribe to the todo because its obeservable it will run the call on the background
    this.TodoService.getAllTodos().subscribe(r => {
      // equate the result from r to the todo object defined above
      this.todos = r;
    });
  }

  deleteTodo(todo: Todo){
    this.todos = this.todos.filter(t => t.id !== todo.id);
  }

  // create an add todo method
  addTodo(){

    if(this.todoInput == null){
      
      alert("Input cannot be undefined.")

    } else if(this.todoInput.trim() === ""){
    
      alert("Input cannot be blank.")
    
    } else {
 
      var newTodo = {
        title: this.todoInput,
        completed: false
      };

      this.TodoService.createTodo(newTodo).subscribe(res => {
        console.log("added.");
        console.log(res);

        this.todoInput = "";

        this.todos.unshift(res);

      });
    }   
  }

  onKeydown(event) {
   this.addTodo();
  }



}
