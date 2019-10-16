// import Input here

import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from 'src/app/services/todo-service.service'

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  
  // input means that the component will accept data
  // its like you're declaring a property for the component
  @Input() todo: Todo;
  
  // create an event emmitter to handle update on the todo
  @Output() onDelete: EventEmitter<any> = new EventEmitter();
  
  constructor(private TodoService: TodoService) { }

  ngOnInit() {
    this.todo = this.todo;
  }

  delete(todo: Todo) {
    this.onDelete.emit(todo);

    this.TodoService.deleteTodo(todo).subscribe();

  }

  toggle(todo: Todo) {

    todo.completed = !todo.completed;
    this.TodoService.updateTodo(todo)
    .subscribe(res => {

    }, err =>{
       alert("error!");
    });
 
  }

  setClass(todo: Todo) {
    
    let classes = {
      'is-completed': todo.completed
    };

    return classes;
  }

}
