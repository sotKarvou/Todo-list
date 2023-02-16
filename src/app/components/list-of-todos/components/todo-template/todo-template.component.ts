import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/services/todos-handler.service';

@Component({
  selector: 'app-todo-template',
  templateUrl: './todo-template.component.html',
  styleUrls: ['./todo-template.component.scss'],
})
export class TodoTemplateComponent {
  @Input() aTodo!: Todo;
  @Output() mark = new EventEmitter<any>();
  @Output() del = new EventEmitter<any>();

  onMarkAsDone() {
    this.mark.emit(this.aTodo.title)
  }

  onDelete() {
    this.del.emit(this.aTodo.title)
  }
}
