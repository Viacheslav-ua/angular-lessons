/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @angular-eslint/no-conflicting-lifecycle */
import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
{

  @Input()
  title = ''

  constructor() {
    // console.log('ChildComponent.constructor');
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('ChildComponent.OnChanges', changes);

  }
  ngOnInit(): void {
    // console.log('ChildComponent.ngOnInit');

  }
  ngDoCheck(): void {
    // console.log('ChildComponent.DoCheck');

  }
  ngAfterContentInit(): void {
    // console.log('ChildComponent.AfterContentInit');

  }
  ngAfterContentChecked(): void {
    // console.log('ChildComponent.AfterContentChecked');

  }
  ngAfterViewInit(): void {
    // console.log('ChildComponent.AfterViewInit');

  }
  ngAfterViewChecked(): void {
    // console.log('ChildComponent.AfterViewChecked');

  }
  ngOnDestroy(): void {
    // console.log('ChildComponent.OnDestroy');

  }
}
