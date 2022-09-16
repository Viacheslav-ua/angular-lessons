import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.sass']
})
export class FooComponent implements OnInit {

@Input()
title!: string

  constructor() {
    console.log('constructor', this.title)

  }

  ngOnInit(): void {
    console.log('ngOnInit', this.title)

  }

}
