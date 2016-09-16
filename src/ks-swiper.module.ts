import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KSSwiperContainer, KSSwiperSlide } from './ks-swiper';

@NgModule({
  imports: [CommonModule],
  declarations: [KSSwiperContainer, KSSwiperSlide],
  exports: [KSSwiperContainer, KSSwiperSlide]
})
export class KSSwiperModule { }
