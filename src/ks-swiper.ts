declare var require;

import {Injectable, Inject, Component, ElementRef, Host, Input} from '@angular/core';

// import Swiper from 'swiper';
const Swiper = require('swiper');

function defaults(dest, ...args: any[]) {
  for (let i = arguments.length - 1; i >= 1; i--) {
    let source = arguments[i] || {};
    for (let key in source) {
      if (source.hasOwnProperty(key) && !dest.hasOwnProperty(key)) {
        dest[key] = source[key];
      }
    }
  }
  return dest;
}

@Injectable()
@Component({
  selector: 'ks-swiper-container',
  template:
  `<div class="swiper-container">
    <div class="swiper-wrapper">
      <ng-content></ng-content>
    </div>
    <div class="swiper-pagination"></div>
  </div>`
})
export class KSSwiperContainer {

  @Input() pager: any;

  @Input() options: any;

  // the underlying swiper instance
  // TODO: do not have typedefinitions yet
  // so using any
  swiper: any;

  showPager: boolean;

  constructor( @Inject(ElementRef) private elementRef: ElementRef) {
  }

  ngOnInit() {

    var options = defaults({
      pagination: '.swiper-pagination',
    }, this.options);

    const nativeElement = this.elementRef.nativeElement;
    setTimeout(() => {
      this.swiper = new Swiper(nativeElement.children[0], this.options);
    });
  }

  update() {
    setTimeout(() => {
      this.swiper.update();
    });
  }

}

@Injectable()
@Component({
  selector: 'ks-swiper-slide',
  template: '<div><ng-content></ng-content></div>'
})
export class KSSwiperSlide {

  private ele: HTMLElement;

  constructor(
    @Inject(ElementRef) elementRef: ElementRef,
    @Host() @Inject(KSSwiperContainer) swiper: KSSwiperContainer
  ) {
    this.ele = elementRef.nativeElement;
    this.ele.classList.add('swiper-slide');

    swiper.update();
  }
}
