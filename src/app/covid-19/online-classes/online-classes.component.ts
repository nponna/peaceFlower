import { Component, OnInit} from '@angular/core';
import { onlineClasses, introLine } from '../../data/online-classes';


@Component({
  selector: 'online-classes',
  templateUrl: './online-classes.component.html',
  styleUrls: ['./online-classes.component.css']
})
export class OnlineClassesComponent implements OnInit {
  public introLine:string;
  public onlineClasses:any[];
   
  ngOnInit(): void {
  	this.onlineClasses = onlineClasses;
    this.introLine = introLine;
  }

}