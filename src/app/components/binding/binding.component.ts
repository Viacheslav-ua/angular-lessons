import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.scss']
})
export class BindingComponent implements OnInit {
  phone = '2346543'
  user = {
    name: 'John',
    surname: 'Fund',
  }

  boldText = `<b>I am a bold text</b>`
  login = ''
  password = ''

  constructor() { }

  get fullName() {
    return this.user.name + ' ' +this.user.surname
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.updatePhone()
    }, 3000)
  }

  updatePhone(): void {
    this.phone = Math.round(Math.random() * 10000000) + ''
  }

  onInput(event: Event, edg: number, us: any) {
    const target = event.target as HTMLInputElement
    this.phone = target.value
    console.log(
      `Name is ${us.name} ${us.surname}.
      Adg is ${edg}.
      Phone is ${this.phone}`
    )
  }

   onSubmit() {
    if (this.login && this.password) {
        //TO DO SUBMIT
      alert('You are authorized')

      this.login = this.password = ''
      return
    }
    alert('Login and Password are required fields')
  }

}
