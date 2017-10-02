import { Component, OnInit } from '@angular/core';
import { missionStatement, whyPeaceFlower } from '../data/home';

import { AdmissionsService } from '../services/admissions.service';


@Component({
  selector: 'Admissions',
  templateUrl: './admissions.component.html',
  styleUrls: ['./admissions.component.css']
})
export class AdmissionsComponent implements OnInit{
  public missionStatementDisplayed: string;
  public whyPeaceFlowerDisplayed: string;
  public message: string;
  public errorMessage: string;

  constructor(private admissionsService:AdmissionsService) {

  }
 
  ngOnInit(): void {
  	this.missionStatementDisplayed = missionStatement;
  	this.whyPeaceFlowerDisplayed = whyPeaceFlower;
  }

  onSubmit(form): void {
    let data = form.value;
    let validity = form.valid;
    if( validity === true) {
      this.admissionsService.submitToGoogleSheets(data).subscribe(data => {
        this.message = "Thank you for reaching out. We will get back to you soon.";
        this.errorMessage = undefined;
        form.reset();
      },
      err => {
        this.errorMessage = "Sorry! An error occurred. Please try to reach out to us via email or phone.";
        this.message = undefined;
      });
    } else {
      this.errorMessage = "Please fill in the required fields";
      this.message = undefined;
    }
    
    
  }

}

