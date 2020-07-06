import { Component, OnInit} from '@angular/core';
import { introLine, headingAndBulletPoints, endPara, endParaLink, endNote, endSign } from '../data/covid-19';

@Component({
  selector: 'covid-19',
  templateUrl: './covid-19.component.html',
  styleUrls: ['./covid-19.component.css']
})
export class Covid19Component implements OnInit {
  public introLine:string;
  public headingAndBulletPoints:any[];
  public endPara: string;	
  public endParaLink:string;
  public endNote:string;
  public endSign: string;  
  
  ngOnInit(): void {
  	this.introLine = introLine;
  	this.headingAndBulletPoints = headingAndBulletPoints;
  	this.endPara = endPara;
    this.endParaLink = endParaLink;
    this.endNote = endNote;
    this.endSign = endSign;
  }

}