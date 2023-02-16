import { TestBed } from '@angular/core/testing';

import { TodosHandlerService } from './todos-handler.service';

describe('TodosHandlerService', () => {
  let service: TodosHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodosHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
