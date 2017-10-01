import { Component, OnInit, SecurityContext, ViewChild, ElementRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { missionStatement, whyPeaceFlower } from '../data/home';

import { AdmissionsService } from '../services/admissions.service';


@Component({
  selector: 'Admissions',
  templateUrl: './admissions.component.html',
  styleUrls: ['./admissions.component.css']
})
export class AdmissionsComponent implements OnInit{
  @ViewChild('cry') container: ElementRef;
  public missionStatementDisplayed: string;
  public whyPeaceFlowerDisplayed: string;
  public scriptNeeded: any;

  constructor(private admissionsService:AdmissionsService, private sanitizer: DomSanitizer) {
    this.scriptNeeded = sanitizer.bypassSecurityTrustHtml('<script data-cfasync="false" type="text/javascript" src="https://cdn.rawgit.com/dwyl/html-form-send-email-via-google-script-without-server/master/form-submission-handler.js"></script>');
    
    //let scriptNeeded = sanitizer.bypassSecurityTrustScript('<script data-cfasync="false" type="text/javascript" src="https://cdn.rawgit.com/dwyl/html-form-send-email-via-google-script-without-server/master/form-submission-handler.js"></script>');
    console.log('My god',this.scriptNeeded, this.container);
    //console.log('hhhh',this.container);
    //const fragment = document.createRange().createContextualFragment(this.scriptNeeded);
    // console.log('hhhh',this.container);
    // this.container.appendChild(fragment);
  }
 
  ngOnInit(): void {
  	this.missionStatementDisplayed = missionStatement;
  	this.whyPeaceFlowerDisplayed = whyPeaceFlower;
  }

  ngAfterViewInit(): void {
    console.log('hhhh',this.container);
    const fragment = document.createRange().createContextualFragment(this.scriptNeeded["changingThisBreaksApplicationSecurity"]);
    console.log('fragment',fragment);
    this.container.nativeElement.appendChild(fragment);
  }

  onSubmit(data): void {
    this.admissionsService.submitToGoogleSheets(data).subscribe(data => {
    	console.log('data',data);
    },
    err => {
      console.log('error',err);
    });
    
  }
}

