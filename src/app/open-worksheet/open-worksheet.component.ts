import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-open-worksheet',
  templateUrl: './open-worksheet.component.html',
  styleUrls: ['./open-worksheet.component.css']
})
export class OpenWorksheetComponent implements OnInit {

  title:string="";
  content:string="";
  nodata:string=""
  ele:any;
  worksheetData:any=[];

  constructor() { 
    if("array" in localStorage){
      this.ele = localStorage.getItem("array");
      this.worksheetData = JSON.parse(this.ele);
      this.worksheetData.reverse()
      }
      else{
        this.nodata="No Data available"
      }
   
 }
 currentTitle=""
 currentContent=""
 currentindex(i:number)
 {
  this.currentTitle=this.worksheetData[i].title;
  this.currentContent=this.worksheetData[i].content;
  localStorage.setItem("currentTitle",this.currentTitle);
  localStorage.setItem("currentContent",this.currentContent);
 }
  ngOnInit(): void {
  }

  
}
