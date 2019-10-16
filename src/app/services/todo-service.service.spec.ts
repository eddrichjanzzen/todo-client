import { TestBed } from '@angular/core/testing';

import { TodoService } from './todo-service.service';
import { Todo } from 'src/app/models/Todo';
import { HttpClient } from '@angular/common/http';

describe('TodoServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TodoService = TestBed.get(TodoService);
    expect(service).toBeTruthy();
  });
});
