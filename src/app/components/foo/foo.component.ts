import { Component, OnInit } from '@angular/core';

interface User {
  id: number
  name: string
  template: string
}

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.scss']
})
export class FooComponent {
  condition = true
  deepObject: any = null
  users: User[] = [
    {
      id: 1,
      name: 'John Doe',
      template: 'bold',
    },
    {
      id: 2,
      name: 'Lindsay Star',
      template: 'italic',
    },
    {
      id: 3,
      name: 'Amanda Rey',
      template: 'unknown'
    }
  ]

  generateUser() {
    this.deepObject = {
      user: {
        name: 'John',
        surname: 'Doe',
      },
    }
  }

  trackBy(index: number, user: User) {
    return user.id
  }
}
