/* eslint-disable @angular-eslint/no-conflicting-lifecycle */
import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { ChildComponent } from '../child/child.component';

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

  @ViewChild('jqueryNeverDie', {static: true, read: ElementRef})
  jqueryContainer!: ElementRef<HTMLDivElement>

  @ViewChild(ChildComponent)
  appChild!: ChildComponent

  @Input()
  title = 'before init parent'

  constructor() {
    console.log('ParentComponent.constructor', this.jqueryContainer);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ParentComponent.OnChanges', changes, this.jqueryContainer);

  }
  ngOnInit(): void {
    console.log('ParentComponent.ngOnInit', this.jqueryContainer);

  }
  ngDoCheck(): void {
    console.log('ParentComponent.DoCheck', this.jqueryContainer);

  }
  ngAfterContentInit(): void {
    console.log('ParentComponent.AfterContentInit', this.jqueryContainer);

  }
  ngAfterContentChecked(): void {
    console.log('ParentComponent.AfterContentChecked', this.jqueryContainer);

  }
  ngAfterViewInit(): void {
    Promise.resolve().then(() => this.appChild.title = 'FOO')
    // this.appChild.title = 'FOO'
    console.log('ParentComponent.AfterViewInit', this.jqueryContainer);

  }
  ngAfterViewChecked(): void {
    console.log('ParentComponent.AfterViewChecked', this.jqueryContainer);

  }
  ngOnDestroy(): void {
    console.log('ParentComponent.OnDestroy', this.jqueryContainer);

  }

}
