import { Component } from '@angular/core';
import { schoolName, schoolCaption } from '../data/home';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
    isIn = false;   // store state
    toggleState() { // click handler
        this.isIn = ! this.isIn; 
    }
 }

