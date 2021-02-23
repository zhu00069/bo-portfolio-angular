import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Bo's";
  myObject = {
    gender: 'female',
    age: 30,
    location: 'Ottawa'
  }
  myHobbies = ['cake making', 'vlog lover', 'movie lover', 'meat lover'];
}
