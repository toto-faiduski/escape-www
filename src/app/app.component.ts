import { Component } from '@angular/core';
import { faTasks } from '@fortawesome/free-solid-svg-icons';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faRss } from '@fortawesome/free-solid-svg-icons';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'escape-www';
  faTasks = faTasks;
  faList = faList;
  faHome = faHome;
  faRss = faRss;
  faExclamationTriangle = faExclamationTriangle;
}
