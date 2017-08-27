import { Component, OnInit } from '@angular/core';
import { missionStatement, whyPeaceFlower } from '../data/home';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  public missionStatementDisplayed: string;
  public whyPeaceFlowerDisplayed: string;
 
  ngOnInit(): void {
  	this.missionStatementDisplayed = missionStatement;
  	this.whyPeaceFlowerDisplayed = whyPeaceFlower;
  }

}
