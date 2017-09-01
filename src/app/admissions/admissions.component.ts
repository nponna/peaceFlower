import { Component, OnInit } from '@angular/core';
import { missionStatement, whyPeaceFlower } from '../data/home';

@Component({
  selector: 'admissions',
  templateUrl: './admissions.component.html',
  styleUrls: ['./admissions.component.css']
})
export class AdmissionsComponent implements OnInit{
  public missionStatementDisplayed: string;
  public whyPeaceFlowerDisplayed: string;
 
  ngOnInit(): void {
  	this.missionStatementDisplayed = missionStatement;
  	this.whyPeaceFlowerDisplayed = whyPeaceFlower;
  }

}
