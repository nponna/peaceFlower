import { Component, OnInit} from '@angular/core';
import { onlineClasses, introLine1, introLine2  } from '../../data/online-classes';


@Component({
  selector: 'online-classes',
  templateUrl: './online-classes.component.html',
  styleUrls: ['./online-classes.component.css']
})
export class OnlineClassesComponent implements OnInit {
  public introLine1:string;
  public introLine2:string;
  public onlineClasses:any[];
   
  ngOnInit(): void {
  	this.onlineClasses = onlineClasses;
    this.introLine1 = introLine1;
    this.introLine2 = introLine2;
  }

}