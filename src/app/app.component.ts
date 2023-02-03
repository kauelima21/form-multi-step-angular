import { Component, ElementRef, ViewChild } from '@angular/core';
import { ProgressComponent } from './components/progress/progress.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('slidePageEl') slidePageEl!: ElementRef;
  @ViewChild(ProgressComponent) bullets!: ProgressComponent;
  max = 4;
  current = 1;

  ngAfterViewInit() {}

  slidePage() {
    this.slidePageEl.nativeElement.style.marginLeft = '-25%';
    this.bullets.steps[this.current - 1].completed = true;
    this.current++;
  }

  nextPage1() {
    this.slidePageEl.nativeElement.style.marginLeft = '-50%';
    this.bullets.steps[this.current - 1].completed = true;
    this.current++;
  }

  nextPage2() {
    this.slidePageEl.nativeElement.style.marginLeft = '-75%';
    this.bullets.steps[this.current - 1].completed = true;
    this.current++;
  }

  prevPage1() {
    this.slidePageEl.nativeElement.style.marginLeft = '-0%';
    this.bullets.steps[this.current - 2].completed = false;
    this.current--;
  }

  prevPage2() {
    this.slidePageEl.nativeElement.style.marginLeft = '-25%';
    this.bullets.steps[this.current - 2].completed = false;
    this.current--;
  }

  prevPage3() {
    this.slidePageEl.nativeElement.style.marginLeft = '-50%';
    this.bullets.steps[this.current - 2].completed = false;
    this.current--;
  }

  nextPage3() {
    this.bullets.steps[this.current - 1].completed = true;
  }

  signUp(event: any) {
    event.preventDefault();
    alert('Thanks for signing up <3');
    window.location.reload();
  }
}
