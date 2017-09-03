import { Component, OnInit } from '@angular/core';
import { schoolName, schoolCaption } from '../data/home';
import { aboutus } from '../data/about-us';

@Component({
  selector: 'about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutusComponent implements OnInit {
  public titleDisplayed:string;
  public subTitleDisplayed:string;
  public aboutusDisplayed: string;	
  
  ngOnInit(): void {
  	this.titleDisplayed = schoolName;
  	this.subTitleDisplayed = schoolCaption;
  	this.aboutusDisplayed = aboutus;
  }
}