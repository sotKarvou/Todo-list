import { Component } from '@angular/core';
import { TodosHandlerService } from 'src/app/services/todos-handler.service';

@Component({
  selector: 'app-delete-all',
  templateUrl: './delete-all.component.html',
  styleUrls: ['./delete-all.component.scss']
})
export class DeleteAllComponent {

  constructor(private thd:TodosHandlerService){}

  deleteAll(){
    this.thd.deleteAllTodos()
  }
}
