import { Component, EventEmitter, Output, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})

export class TasksComponent {
  // @Input() name?: string;
  @Input() name: string | undefined;
  @Output() select  = new EventEmitter<string>();

  onSelectUserUpdateTask() {
    this.select.emit(this.name);
  }
}
