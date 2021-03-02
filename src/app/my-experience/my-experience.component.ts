import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-experience',
  templateUrl: './my-experience.component.html',
  styleUrls: ['./my-experience.component.css']
})
export class MyExperienceComponent implements OnInit {

  constructor() {}

  projects = [
    "Delivery Mangement app",
    "Pick Availibity app",
    "Task Console app"
  ]

  jobDescriptions = [
    "Collaborate with agile development team to develop, test and maintain applications in production",
    "Fix bugs and enhance features in production apps using Mendix low-code software platform",
    "Perform data load and maintain data in production apps",
    "Participate deployment activities regularly",
    "Provide support to test teams during the various testing phases",
    "Offer support, guidance and help to end user & counterparts"
  ]

  job_BrainAdv_Descriptions = [

    "Improved UI & UX for each component using CSS, Semantic UI to allow for a user-friendly experience",
    "Created new features using API endpoints based on Anuglar4",
    "Designed and implemented features such as CRUD on data tables, csv report export, input validation, etc.",
    "Developed backend APIs and tested with Postman, such as delete files on AWS using S3 Bucket API service",
    "Effectively Debugged and fixed bugs in several projects",
    "https://onyxerponline.com/"
  ]

  ngOnInit(): void {
  }

}
