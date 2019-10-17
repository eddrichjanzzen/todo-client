import { Injectable } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}


@Injectable({
  providedIn: 'root'
})

export class TodoService {

  constructor(private http:HttpClient) { }

  getAllTodos() : Observable<Todo[]>{
    return this.http.get<Todo[]>(environment.apiUrl);
  }


  updateTodo(todo: Todo): Observable<Todo>{
    const url = `${environment.apiUrl}/${todo.id}`

    return this.http.put<Todo>(url, todo, httpOptions);

  }

  createTodo(todo : Todo): Observable<Todo>{
    const url = `${environment.apiUrl}`

    return this.http.post<Todo>(url, todo, httpOptions);

  }


  deleteTodo(todo: Todo): Observable<Todo>{
    const url = `${environment.apiUrl}/${todo.id}`

    return this.http.delete<Todo>(url, httpOptions);
  }


  filterTodo(completed: string): Observable<Todo[]>{
    
    return this.http.get<Todo[]>(environment.apiUrl + '/filter?completed=' + completed);

  }



  // @todo
 
  // updateTodo()

  // createTodo()

  // deleteTodo()

}
