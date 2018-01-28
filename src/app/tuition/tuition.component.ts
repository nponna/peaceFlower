import { Component, OnInit } from '@angular/core';
import { moreInfo, moreInfoWithStyling, title, subTitle, options } from '../data/tuition';

@Component({
  selector: 'tuition',
  templateUrl: './tuition.component.html',
  styleUrls: ['./tuition.component.css']
})
export class TuitionComponent implements OnInit{
  public moreInfoDisplayed: any[] = [];
  public titleDisplayed:string;
  public subTitleDisplayed:string;
  public optionsDisplayed: any[] = [];
  public moreInfoStyledDisplayed: any[] = [];
 
  ngOnInit(): void {
  	this.moreInfoDisplayed = moreInfo;
  	this.titleDisplayed = title;
  	this.subTitleDisplayed = subTitle;
  	this.optionsDisplayed = options;
    this.moreInfoStyledDisplayed = moreInfoWithStyling;
  }

}