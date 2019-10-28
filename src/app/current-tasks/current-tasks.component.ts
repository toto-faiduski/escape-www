import { Component, OnInit } from '@angular/core';
import { CurrentTasksService } from '../current-tasks.service';
import { CurrentTask } from '../current-tasks.service';


@Component({
  selector: 'app-current-tasks',
  templateUrl: './current-tasks.component.html',
  styleUrls: ['./current-tasks.component.css']
})
export class CurrentTasksComponent implements OnInit {

  currentTasks:CurrentTask[];
  error="";
  page=4;

  constructor(
    private currentTasksService: CurrentTasksService
  ) { }

  ngOnInit() {
    this.currentTasksService.getCurrentTasks()
      .subscribe((data: CurrentTask[]) => this.currentTasks = data,error => this.error = error);
  }

}
