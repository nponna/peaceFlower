import { Component, OnInit } from '@angular/core';
import { schoolName, schoolCaption } from '../data/home';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public titleDisplayed:string;
  public subTitleDisplayed:string;	
  
  ngOnInit(): void {
  	this.titleDisplayed = schoolName;
  	this.subTitleDisplayed = schoolCaption;
  }
}