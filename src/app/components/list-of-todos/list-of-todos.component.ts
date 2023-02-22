import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { Observable, Subject, Subscription, filter, map, tap } from 'rxjs';
import {
  Todo,
  TodosHandlerService,
} from 'src/app/services/todos-handler.service';

@Component({
  selector: 'app-list-of-todos',
  templateUrl: './list-of-todos.component.html',
  styleUrls: ['./list-of-todos.component.scss'],
})
export class ListOfTodosComponent {
  todo$: Observable<Todo[]> = this.tdh
    .getTodos()
    .pipe(map((data) => data.filter((element) => element.done === false)));
  done$: Observable<Todo[]> = this.tdh
    .getTodos()
    .pipe(map((data) => data.filter((element) => element.done === true)));

  constructor(private tdh: TodosHandlerService) {}

  // drop(event: CdkDragDrop<Todo[]>) {

  //   if (event.previousContainer === event.container) {
  //     moveItemInArray(
  //       event.container.data,
  //       event.previousIndex,
  //       event.currentIndex
  //     );
  //   } else {
  //     transferArrayItem(
  //       event.previousContainer.data,
  //       event.container.data,
  //       event.previousIndex,
  //       event.currentIndex
  //     );
  //   }
  // }

  markAsDone(value: any) {
    this.tdh.markAsDone(value);
  }

  onDelete(value: any) {
    this.tdh.deleteTodo(value);
  }
}
