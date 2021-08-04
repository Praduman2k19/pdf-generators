import { Component } from '@angular/core';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-view-worksheet',
  templateUrl: './view-worksheet.component.html',
  styleUrls: ['./view-worksheet.component.css']
})
export class ViewWorksheetComponent  {

  title:any;
  content:any;
  constructor() {
    if("array" in localStorage){
      this.title=localStorage.getItem("currentTitle");
      this.content=localStorage.getItem('currentContent');
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
  ngOnInit(): void {
   
  }

}
