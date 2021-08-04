import { Component, OnInit, Output,ViewChild,ElementRef } from '@angular/core';
import { Editor, NgxEditorModule, Toolbar } from "ngx-editor";
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class createComponent implements OnInit {

  title:string="";
  content:string="";
  editor:Editor=new Editor;
  editorConfig:any;
  
  worksheetData:any=[];
  obj:any;
  fun(){
    this.obj={
      title:this.title,
      content:this.content
  };
  }
  
  ele:any;
  save()
  {
    this.fun();
      if("array" in localStorage){
      this.ele = localStorage.getItem("array");
      this.worksheetData = JSON.parse(this.ele);
      }
      this.worksheetData.push(this.obj)
      console.log(this.worksheetData)
      localStorage.setItem("array",JSON.stringify(this.worksheetData));

      this.createNew();
  }
  createNew()
  {
    this.title="";
    this.content="";
  }



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
    if("currentTitle" in localStorage){

      this.title= (localStorage.getItem('currentTitle') || '');
      this.content= (localStorage.getItem('currentContent') || '');
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
