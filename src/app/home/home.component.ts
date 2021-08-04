import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  clearCurrentStorage(){
    localStorage.setItem("currentTitle","");
    localStorage.setItem("currentContent","");
   }
  ngOnInit(): void {
    localStorage.setItem("currentTitle","");
    localStorage.setItem("currentContent","");

    // localStorage.clear()
  }

}
