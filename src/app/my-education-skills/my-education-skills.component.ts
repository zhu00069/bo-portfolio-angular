import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-education-skills',
  templateUrl: './my-education-skills.component.html',
  styleUrls: ['./my-education-skills.component.css']
})
export class MyEducationSkillsComponent implements OnInit {

  constructor() { }

  techSkills = [
    "Languages: Typescript, JavaScript, Java, PHP, Node JS",
    "Web & Frameworks: HTML, CSS, jQuery, Bootstrap, Express JS, Angular4",
    "API & Cloud: API development, Async server call",
    "Scripting: Bash script, SQL",
    "Java: Junit, OOP, JDBC, MVC, Maven, Hibernate, JPA, RESTful web service",
    "Databases: PostgreSQL, MySQL, Oracle, SQL Server, Toad",
    "Test Tools: Postman, Google Developer Tool, JUnit4",
    "IDEs: Mendix modeler, VS Code,",
    "Version Control System & Repository: Git, GitHub, Bitbucket, Slack, Trello, Jira",
    "Web Servers: Tomcat, Payara",
    "Operating System: Windows10, OX S, Linux - Ubuntu"
  ]

  softSkills = [
    "Multitasking skill",
    "Detailed-oriented & reliable",
    "Excellent communication skill"
  ]

  ngOnInit(): void {
  }
 

}
