import { Component, OnInit } from '@angular/core';
import { moreInfo, title, subTitle, options } from '../data/rates';

@Component({
  selector: 'rates',
  templateUrl: './rates.component.html',
  styleUrls: ['./rates.component.css']
})
export class RatesComponent implements OnInit{
  public moreInfoDisplayed: any[] = [];
  public titleDisplayed:string;
  public subTitleDisplayed:string;
  public optionsDisplayed: any[] = [];
 
  ngOnInit(): void {
  	this.moreInfoDisplayed = moreInfo;
  	this.titleDisplayed = title;
  	this.subTitleDisplayed = subTitle;
  	this.optionsDisplayed = options;
  }

}