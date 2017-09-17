import { Component, OnInit } from '@angular/core';
import { teachers, bios } from '../data/teachers';

@Component({
  selector: 'Teachers',
  templateUrl: './Teachers.component.html',
  styleUrls: ['./Teachers.component.css']
})
export class TeachersComponent implements OnInit{
  public TeachersDisplayed: string;
  public biosDisplayed: any[] = [];
 
  ngOnInit(): void {
  	this.TeachersDisplayed = teachers;
  	this.biosDisplayed = bios;
  }

}