import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // courses = [1, 2];

  viewMode = 'map';

  // courses = [
  //   { id: 1, name: 'course 1'},
  //   { id: 2, name: 'course 2'},
  //   { id: 3, name: 'course 3'},
  //   { id: 4, name: 'course 4'},
  // ];

  courses;


  onAdd() {
    this.courses.push({ id: 5, name: 'course' });
  }

  onRemove(course) {
    const index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }

  loadCourses() {
    this.courses = [
      { id: 1, name: 'course' },
      { id: 2, name: 'course' },
      { id: 3, name: 'course' },
      { id: 4, name: 'course' },
    ];
  }

  trackCourse(index, course) {
    return course ? course.id : undefined;
  }


}
