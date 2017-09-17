import { Component, OnInit } from '@angular/core';
import { programs, curriculum, curriculum_types } from '../data/programs';

@Component({
  selector: 'programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.css']
})

export class ProgramsComponent implements OnInit {
  public programsDisplayed: any[] = [];
  public curriculumTypesDisplayed: any[] = [];
  public curriculumDisplayed: string;

  ngOnInit(): void {
  	this.programsDisplayed = programs;
  	this.curriculumDisplayed = curriculum;
  	this.curriculumTypesDisplayed = curriculum_types;
  }

}