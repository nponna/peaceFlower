import { Component, OnInit } from '@angular/core';
import { schoolName, schoolCaption } from '../data/home';

@Component({
  selector: 'class-room-strategies',
  templateUrl: './class-room-strategies.component.html',
  styleUrls: ['./class-room-strategies.component.css']
})
export class ClassRoomStrategiesComponent implements OnInit {
  public titleDisplayed:string;
  public subTitleDisplayed:string;	
  
  ngOnInit(): void {
  	this.titleDisplayed = schoolName;
  	this.subTitleDisplayed = schoolCaption;
  }
}