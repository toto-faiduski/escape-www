import { Component, OnInit } from '@angular/core';

import ErrorsExtractTextPdf from '../../assets/ErrorsExtractTextPdf.json';

@Component({
  selector: 'app-errors-extract-text-pdf',
  templateUrl: './errors-extract-text-pdf.component.html',
  styleUrls: ['./errors-extract-text-pdf.component.css']
})
export class ErrorsExtractTextPdfComponent implements OnInit {

  errors = ErrorsExtractTextPdf;

  constructor() { }

  ngOnInit() {
  }

}
