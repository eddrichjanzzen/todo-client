import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {
  todo_obj: Todo;
  
  constructor() { 
    this.todo_obj = {
      "id": 1,
      "title": "Finish Hand ons on",
      "completed": true
    }
  }

  ngOnInit() {
  }

}
