import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HttpHeaders} from "@angular/common/http";
import { environment } from '../environments/environment';

export interface CurrentTask {
  id: string;
  addTime: Date;
  clientName: string;
  type: string;
  parameters: string;
  progress: string;
}

@Injectable({
  providedIn: 'root'
})
export class CurrentTasksService {

  constructor(
        private http: HttpClient
    ) { }

    getCurrentTasks() {

      // Un peu de doc sur le Cross-Origin Resource Sharing :
      // https://developer.mozilla.org/fr/docs/Web/HTTP/CORS
      // => deux possiblité :
  
      // 1) Requete simple
      //return this.http.get<CurrentTask[]>('http://172.20.28.85:8081/api/v2/Tasks.json');
      return this.http.get<CurrentTask[]>('http://'+environment.escape_addr+':'+environment.escape_port+'/api/v2/Tasks.json');
  
      // 2) On force le preflight CORS
      // const headers = new HttpHeaders({
      //     'Content-Type': 'application/json',
      //     'X-Ping-Other': 'pingpong'
      //   });
      // return this.http.get<CurrentTask[]>('http://172.20.28.85:8081/api/v2/Tasks.json',{headers});
  
     /*return [  {
        addDate: new Date(2019, 11, 14),
        user: 'david',
        type: 'MultiLeaf_Enhancement',
        parameters: '-cfg:test2',
        progress: 12,
      },
      {
        addDate: new Date(2019, 11, 15),
        user: 'laura',
        type: 'MultiLeaf_Enhancement',
        parameters: '-cfg:production2',
        progress: 100,
      },
    ];*/
    
    }
}
