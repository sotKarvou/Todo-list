import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
  TodosHandlerService,
  Todo,
} from 'src/app/services/todos-handler.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent {
  myTodo!: Todo;
  formGroup!: FormGroup;
  title: string = '';
  desc: string = '';

  constructor(private tdh: TodosHandlerService) {}
  onAdd() {
    this.tdh.postTodo({
      title: this.title,
      description: this.desc,
      done: false,
    });
  }

  onClose() {}
}
