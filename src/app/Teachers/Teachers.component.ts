import { Component, OnInit } from '@angular/core';
import { teachers, bios } from '../data/teachers';

@Component({
  selector: 'teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit{
  public TeachersDisplayed: string;
  public biosDisplayed: any[] = [];
 
  ngOnInit(): void {
  	this.TeachersDisplayed = teachers;
  	this.biosDisplayed = bios;
  }

}