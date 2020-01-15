import { Component, OnInit } from '@angular/core';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import { CurrentTasksService } from '../current-tasks.service';
import { CurrentTask } from '../current-tasks.service';


@Component({
  selector: 'app-current-tasks',
  templateUrl: './current-tasks.component.html',
  styleUrls: ['./current-tasks.component.css']
})
export class CurrentTasksComponent implements OnInit {

  currentTasks=[];
  error="";
  page=1;
  id:any;

  faTrashAlt = faTrashAlt;

  constructor(
    private currentTasksService: CurrentTasksService
  ) { }


  ngOnInit() {
    /*this.currentTasksService.getCurrentTasks()
      .subscribe((data: CurrentTask[]) => this.currentTasks = data,error => this.error = error);*/

    this.myInit();
    this.id = setInterval(() => {
      this.myInit(); 
    }, 5000);
  }

  ngOnDestroy() {
    if (this.id) {
      clearInterval(this.id);
    }
  }
  myInit() {
    this.currentTasksService.getCurrentTasks()
      .subscribe((data: CurrentTask[]) => this.currentTasks = data,error => this.error = error);
  }

  deleteTask(task){
    alert(task);
  }
}
