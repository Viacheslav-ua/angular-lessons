import { Component, HostBinding, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @HostBinding('class')
  hostClass = 'hidden'

  private skipClick = false

  constructor() { }

  ngOnInit(): void {
    console.log();

  }

  @HostListener('click', ['$event'])
  hostClick(event: Event) {
    event.stopPropagation()
    console.log('click', event);
  }

  // @HostListener('window:click', ['$event'])
  // windowClick(event: Event) {
  //   console.log('window:click', event);
  // }

  show(): void {
    this.hostClass = ''
    this.skipClick = true
  }

  @HostListener('window:click')
  hide(): void {
    if(this.skipClick) {
      this.skipClick = false
      return
    }
    this.hostClass = 'hidden'
  }

}
