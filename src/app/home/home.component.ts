import { Component, OnInit, Output,ViewChild,ElementRef } from '@angular/core';
import { FormBuilder ,FormGroup , FormControl } from '@angular/forms';
import { Editor, NgxEditorModule, Toolbar } from "ngx-editor";
import { EventEmitter } from '@angular/core';
import { NgModel } from '@angular/forms';
import { jsPDF } from 'jspdf';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
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
  data:any;
  downloadPdf()
  {
    this.data = document.getElementById('contentToConvert');
    html2canvas(this.data).then(canvas => {
    let imgWidth = 210;
    let imgHeight=0;

    
    const contentDataURL = canvas.toDataURL('image/png')
    let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
    let position = 0;
    pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
    pdf.save('new-file.pdf'); // Generated PDF
    });
  }

  ngOnInit()
  {

  }

}
