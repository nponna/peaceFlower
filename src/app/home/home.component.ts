import { Component, OnInit } from '@angular/core';
import { missionStatement } from '../data/home';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  public missionStatementDisplayed: string;
 
  ngOnInit(): void {
  	this.missionStatementDisplayed = missionStatement;
  }

}
