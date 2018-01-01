import { Component, OnInit,  ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { schoolName, schoolCaption } from '../data/home';
import { aboutus } from '../data/about-us';

import '@terrymun/paver';

declare var jQuery: any;

@Component({
  selector: 'about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutusComponent implements OnInit, AfterViewInit {
  @ViewChild('panorama') panorama: ElementRef;
  public titleDisplayed:string;
  public subTitleDisplayed:string;
  public aboutusDisplayed: string;	
  
  ngOnInit(): void {
  	this.titleDisplayed = schoolName;
  	this.subTitleDisplayed = schoolCaption;
  	this.aboutusDisplayed = aboutus;
  }

  ngAfterViewInit() {
    jQuery(this.panorama.nativeElement).paver();
  }
}