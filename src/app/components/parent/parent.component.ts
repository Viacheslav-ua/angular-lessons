/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @angular-eslint/no-conflicting-lifecycle */
import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
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
  styleUrls: ['./parent.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
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


  private _title = 'before init parent'

  private _array = [1]

  get array(): number[] {
    return this._array
  }

  @Input() set array(val: number[]) {
    this._array = val
    console.log('ParentComponent.setArray', this._array)
  }

  get title(): string {
    return this._title
  }

  @Input() set title(val: string) {
    this._title = val
    console.log('ParentComponent.setTitle', this._title)
  }

  private length = 1

  constructor(private cdr: ChangeDetectorRef) {
    // console.log('ParentComponent.constructor', this.title);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ParentComponent.OnChanges', changes, this.title);

  }
  ngOnInit(): void {
    // console.log('ParentComponent.ngOnInit', this.title);

    setTimeout(() => {
      this.title = 'foo'
      this.cdr.markForCheck()
    },1000)
  }
  ngDoCheck(): void {
    console.log('ParentComponent.DoCheck', this.title);
    if (this.length !== this.array.length) {
      console.log('Has changes')
      this.cdr.markForCheck()
      this.length = this.array.length
    }

  }
  ngAfterContentInit(): void {
    // console.log('ParentComponent.AfterContentInit', this.title);

  }
  ngAfterContentChecked(): void {
    // console.log('ParentComponent.AfterContentChecked', this.title);

  }
  ngAfterViewInit(): void {
    // console.log('ParentComponent.AfterViewInit', this.title);

  }
  ngAfterViewChecked(): void {
    // console.log('ParentComponent.AfterViewChecked', this.title);

  }
  ngOnDestroy(): void {
    // console.log('ParentComponent.OnDestroy', this.title);

  }

}
