import { Component, OnInit } from '@angular/core';

import ErrorsEditionC from '../../assets/ErrorsEditionC.json';

@Component({
  selector: 'app-errors-edition-c',
  templateUrl: './errors-edition-c.component.html',
  styleUrls: ['./errors-edition-c.component.css']
})
export class ErrorsEditionCComponent implements OnInit {

  errors = ErrorsEditionC;

  constructor() { }

  ngOnInit() {
  }

}
