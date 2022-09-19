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
import { fromEvent, Subject, Subscription, takeUntil } from 'rxjs';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements
  OnChanges,
  OnInit,
  // DoCheck,
  // AfterContentInit,
  // AfterContentChecked,
  // AfterViewInit,
  // AfterViewChecked,
  OnDestroy
  {

  @Input()
  title = 'before init parent'

  subscription?: Subscription
  subscriptions: Subscription[] = []
  destroy$ = new Subject()

  constructor() {
    console.log('ParentComponent.constructor', this.title);
  }

  ngOnChanges(changes: SimpleChanges): void {

    console.log('ParentComponent.OnChanges', changes, this.title);
    // this.subscription = fromEvent(document, 'click').subscribe(console.log)

    // this.subscriptions.push(fromEvent(document, 'click').subscribe(console.log))

    fromEvent(document, 'click').pipe(
      takeUntil(this.destroy$)
    ).subscribe(console.log)
  }
  ngOnInit(): void {
    console.log('ParentComponent.ngOnInit', this.title);

  }
  // ngDoCheck(): void {
  //   console.log('ParentComponent.DoCheck', this.title);

  // }
  // ngAfterContentInit(): void {
  //   console.log('ParentComponent.AfterContentInit', this.title);

  // }
  // ngAfterContentChecked(): void {
  //   console.log('ParentComponent.AfterContentChecked', this.title);

  // }
  // ngAfterViewInit(): void {
  //   console.log('ParentComponent.AfterViewInit', this.title);

  // }
  // ngAfterViewChecked(): void {
  //   console.log('ParentComponent.AfterViewChecked', this.title);

  // }
  ngOnDestroy(): void {
    console.log('ParentComponent.OnDestroy', this.title);
    // this.subscription?.unsubscribe()

    // for (let s of this.subscriptions) {
    //   s.unsubscribe()
    // }

    // this.subscriptions.forEach(s => s.unsubscribe())

    this.destroy$.next(true)
    this.destroy$.complete()
  }

}
