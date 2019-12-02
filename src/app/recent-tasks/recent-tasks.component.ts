import { Component, OnInit } from '@angular/core';
import { RecentTasksService } from '../recent-tasks.service';
import {Task} from '../recent-tasks.service';

@Component({
  selector: 'app-recent-tasks',
  templateUrl: './recent-tasks.component.html',
  styleUrls: ['./recent-tasks.component.css']
})
export class RecentTasksComponent implements OnInit {
  recentTasks:Task[];
  error="";
  page=1;
  id:any;

  constructor(
    private recentTasksService: RecentTasksService
  ) { }

  ngOnInit() {
    /*this.recentTasksService.getRecentTasks()
      .subscribe((data: Task[]) => this.recentTasks = data,error => this.error = error);*/

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
    this.recentTasksService.getRecentTasks()
      .subscribe((data: Task[]) => this.recentTasks = data,error => this.error = error);
  }

}
