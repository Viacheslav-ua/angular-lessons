/* eslint-disable @angular-eslint/no-conflicting-lifecycle */
import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  ContentChildren,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  QueryList,
  SimpleChanges,
  TemplateRef
} from '@angular/core';
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

  // @ContentChild(ChildComponent, {static: true})
  // appChild?: ChildComponent

  // @ContentChildren(ChildComponent)
  // appChildren?: QueryList<ChildComponent>

  @ContentChild('ref', {static: true, read: ChildComponent})
  appChild?: ChildComponent

  @ContentChildren('ref', {read: ChildComponent})
  appChildren?: QueryList<ChildComponent>

  @ContentChildren('foo, bar, baz', {read: TemplateRef})
  templates!: QueryList<TemplateRef<{$implicit: string}>>

  @Input()
  title = 'before init parent'

  constructor() {
    console.log('ParentComponent.constructor', this.title, this.appChild);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ParentComponent.OnChanges', changes, this.title, this.appChild);

  }
  ngOnInit(): void {
    console.log('ParentComponent.ngOnInit', this.title, this.appChild);
    this.appChild?.sayHi()
  }
  ngDoCheck(): void {
    console.log('ParentComponent.DoCheck', this.title, this.appChild);

  }
  ngAfterContentInit(): void {
    console.log('PC', this.appChildren)
    console.log('Templates', this.templates);

    console.log('ParentComponent.AfterContentInit', this.title, this.appChild);
    this.appChild?.sayHi()
    if (this.appChild?.title) {
      this.appChild.title = 'FOO'
    }
  }
  ngAfterContentChecked(): void {
    console.log('ParentComponent.AfterContentChecked', this.title, this.appChild);

  }
  ngAfterViewInit(): void {
    console.log('ParentComponent.AfterViewInit', this.title, this.appChild);

  }
  ngAfterViewChecked(): void {
    console.log('ParentComponent.AfterViewChecked', this.title, this.appChild);

  }
  ngOnDestroy(): void {
    console.log('ParentComponent.OnDestroy', this.title, this.appChild);

  }

}
