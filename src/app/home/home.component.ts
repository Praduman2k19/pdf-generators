import { Component, OnInit, Output,ViewChild,ElementRef } from '@angular/core';
import { FormBuilder ,FormGroup , FormControl } from '@angular/forms';
import { Editor, NgxEditorModule, Toolbar } from "ngx-editor";
import { EventEmitter } from '@angular/core';
import { NgModel } from '@angular/forms';
import { jsPDF } from 'jspdf';
// import *as jsPDF from 'jspdf';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  content:string="";
  editor:Editor=new Editor;
  editorConfig:any;

 
  

  toolbar: Toolbar = [
    ["bold", "italic"],
    ["underline", "strike"],
    ["code", "blockquote"],
    ["ordered_list", "bullet_list"],
    [{ heading: ["h1", "h2", "h3", "h4", "h5", "h6"] }],
    ["link", "image"],
    ["text_color", "background_color"],
    ["align_left", "align_center", "align_right", "align_justify"]
  ];

  constructor() {
    this.editorConfig={
      "editable":true
    } 
  }

  @ViewChild('content2')content2!: ElementRef;
  downloadPdf()
  {
  //   let doc=new jsPDF();

    
  //   let content=this.content2.nativeElement;
  //   let specialElementHandlears={
  //     '#content':function(element: any,renderer: any){
  //       return true;
  //     }
  //   };
  //   doc.fromHTML(content.innerHTML,15,15,{
  //     'width' :190,
  //     'elementHandlears':specialElementHandlears
  //   });
  //     doc.save('test.pdf');
  }
  ngOnInit()
  {

  }
}
