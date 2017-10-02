import { Component, OnInit } from '@angular/core';
import { reviews } from '../data/reviews';

@Component({
  selector: 'reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  public reviewsDisplayed: any[] = [];

  ngOnInit(): void {
  	this.reviewsDisplayed = reviews;
  }

}