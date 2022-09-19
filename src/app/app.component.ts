import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-lessons'
  show = true
  array = [1, 2, 3, 4]

  modifyArray() {
    this.array.push(5)
    // this.array = [...this.array, 5]
  }
}
