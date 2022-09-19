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
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements
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
  title = 'before init parent'

  constructor() {
    console.log('ParentComponent.constructor', this.title);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ParentComponent.OnChanges', changes, this.title);

  }
  ngOnInit(): void {
    console.log('ParentComponent.ngOnInit', this.title);

  }
  ngDoCheck(): void {
    console.log('ParentComponent.DoCheck', this.title);

  }
  ngAfterContentInit(): void {
    console.log('ParentComponent.AfterContentInit', this.title);

  }
  ngAfterContentChecked(): void {
    console.log('ParentComponent.AfterContentChecked', this.title);

  }
  ngAfterViewInit(): void {
    console.log('ParentComponent.AfterViewInit', this.title);

  }
  ngAfterViewChecked(): void {
    console.log('ParentComponent.AfterViewChecked', this.title);

  }
  ngOnDestroy(): void {
    console.log('ParentComponent.OnDestroy', this.title);

  }

}
