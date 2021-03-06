import { Component, OnInit } from '@angular/core';
import { schoolName, schoolCaption } from '../data/home';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public titleDisplayed:string;
  public subTitleDisplayed:string;	
  
  ngOnInit(): void {
  	this.titleDisplayed = schoolName;
  	this.subTitleDisplayed = schoolCaption;
  }
}
