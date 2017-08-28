import { Component, OnInit } from '@angular/core';
import { aboutUs } from '../data/about';

@Component({
  selector: 'about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit{
  public aboutUsDisplayed: string;
 
  ngOnInit(): void {
  	this.aboutUsDisplayed = aboutUs;
  }

}