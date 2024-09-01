import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  experience:any = 0;

  constructor() { }

  ngOnInit(): void {
    var d1 = new Date("12/09/2021");   
    var d2 = new Date("04/30/2024");   
        
    var diff = d2.getTime() - d1.getTime();   
        
    this.experience = diff / (1000 * 60 * 60 * 24 * 365);  
    this.experience = this.experience.toFixed(2)

  }

}
