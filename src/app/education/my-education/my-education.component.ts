import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-education',
  templateUrl: './my-education.component.html',
  styleUrls: ['./my-education.component.scss']
})
export class MyEducationComponent implements OnInit {

  displayedColumns: string[] = ['Degree', 'Year', 'Institute', 'University','Percentage'];
  dataSource:PeriodicElement[] = [
    {Degree: 'B.Tech', Year: '2017 - 2021', Institute: 'Vishwakarma Institute of Technology Pune', University: 'SPPU',Percentage:"8.17"},
    {Degree: 'HSC', Year: '2016 - 2017', Institute: 'Mohota College of Science, Nagpur.', University: 'State Board',Percentage:"72 %"},
    {Degree: 'SSC', Year: '2014 - 2015', Institute: '	St. Xavier’s high school Hiwari Nagar Nagpur.', University: 'CBSE',Percentage:"82.4 %"},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

export interface PeriodicElement {
  Degree: string;
  Year: string;
  Institute: string;
  University: string;
  Percentage:string
}