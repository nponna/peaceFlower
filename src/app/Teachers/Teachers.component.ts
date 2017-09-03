import { Component, OnInit } from '@angular/core';
import { teachers } from '../data/teachers';

@Component({
  selector: 'Teachers',
  templateUrl: './Teachers.component.html',
  styleUrls: ['./Teachers.component.css']
})
export class TeachersComponent implements OnInit{
  public TeachersDisplayed: string;
 
  ngOnInit(): void {
  	this.TeachersDisplayed = teachers;
  }

}