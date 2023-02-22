import { Component } from '@angular/core';
import { TodosHandlerService } from 'src/app/services/todos-handler.service';

@Component({
  selector: 'app-all-done',
  templateUrl: './all-done.component.html',
  styleUrls: ['./all-done.component.scss'],
})
export class AllDoneComponent {
  constructor(private thd: TodosHandlerService) {}
  markAllasDone() {
    this.thd.markAllasDone()
  }
}
