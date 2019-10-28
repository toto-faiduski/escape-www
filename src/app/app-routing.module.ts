import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RecentTasksComponent } from './recent-tasks/recent-tasks.component';
import { CurrentTasksComponent } from './current-tasks/current-tasks.component';
import { ErrorsExtractTextPdfComponent } from './errors-extract-text-pdf/errors-extract-text-pdf.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'RecentTasks', component: RecentTasksComponent },
  { path: 'CurrentTasks', component: CurrentTasksComponent },
  { path: 'ErrorsExtractTextPdf', component: ErrorsExtractTextPdfComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
