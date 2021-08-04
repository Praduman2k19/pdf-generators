import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { createComponent } from './create/create.component';
import { HomeComponent } from './home/home.component';
import { OpenWorksheetComponent } from './open-worksheet/open-worksheet.component';
import { ViewWorksheetComponent } from './view-worksheet/view-worksheet.component';

const routes: Routes = [
  {
    path: '' , component:HomeComponent
  },
 
  {
    path: 'open-worksheet' , component:OpenWorksheetComponent
  },
  {
    path:  'view-worksheet', component: ViewWorksheetComponent
  },
  {
    path: 'create' , component:createComponent
  },
 
  {
    path : '**' , redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
