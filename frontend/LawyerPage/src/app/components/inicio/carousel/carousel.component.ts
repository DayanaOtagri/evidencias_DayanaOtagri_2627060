import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  currentIndex: number = 0;
  interval: any;

  constructor() { }

  ngOnInit(): void {
    this.startInterval();
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % 4;
  }

  prevSlide() {
    this.currentIndex = this.currentIndex === 0 ? 3 : this.currentIndex - 1;
  }

  startInterval() {
    this.interval = setInterval(() => {
      this.nextSlide();
    }, 15000); 
  }

  clearInterval() {
    clearInterval(this.interval);
  }

}
