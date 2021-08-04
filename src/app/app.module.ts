import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxEditorModule } from 'ngx-editor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { createComponent } from './create/create.component';
import { ViewWorksheetComponent } from './view-worksheet/view-worksheet.component';
import { OpenWorksheetComponent } from './open-worksheet/open-worksheet.component';


@NgModule({
  declarations: [
    AppComponent,
    createComponent,
    HomeComponent,
    ViewWorksheetComponent,
    OpenWorksheetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxEditorModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
