import { AfterViewChecked, AfterViewInit, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit, AfterViewChecked{
  title = 'practice';
  previousValue?: string;
  currentValue?: string;
  fontsize: any = "43px";
  showContent = true;

  toggleContent(){
    this.showContent = !this.showContent
  }
  ngOnInit(): void {
    console.log('ngOnInit called');
  }

  ngOnChanges(): void {
    console.log('ngOnChanges called');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy called');
  }
}

  