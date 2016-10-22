"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
// import Swiper from 'swiper';
var Swiper = require('swiper');
function defaults(dest) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    for (var i = arguments.length - 1; i >= 1; i--) {
        var source = arguments[i] || {};
        for (var key in source) {
            if (source.hasOwnProperty(key) && !dest.hasOwnProperty(key)) {
                dest[key] = source[key];
            }
        }
    }
    return dest;
}
var KSSwiperContainer = (function () {
    function KSSwiperContainer(elementRef) {
        this.elementRef = elementRef;
    }
    KSSwiperContainer.prototype.ngOnInit = function () {
        var _this = this;
        var options = defaults({
            pagination: '.swiper-pagination',
        }, this.options);
        var nativeElement = this.elementRef.nativeElement;
        setTimeout(function () {
            _this.swiper = new Swiper(nativeElement.children[0], _this.options);
        });
    };
    KSSwiperContainer.prototype.update = function () {
        var _this = this;
        setTimeout(function () {
            _this.swiper.update();
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], KSSwiperContainer.prototype, "pager", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], KSSwiperContainer.prototype, "options", void 0);
    KSSwiperContainer = __decorate([
        core_1.Injectable(),
        core_1.Component({
            selector: 'ks-swiper-container',
            template: "<div class=\"swiper-container\">\n    <div class=\"swiper-wrapper\">\n      <ng-content></ng-content>\n    </div>\n    <div class=\"swiper-pagination\"></div>\n    <button class=\"swiper-button swiper-button-next\"></button>\n    <button class=\"swiper-button swiper-button-prev\"></button>\n  </div>"
        }),
        __param(0, core_1.Inject(core_1.ElementRef)), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], KSSwiperContainer);
    return KSSwiperContainer;
}());
exports.KSSwiperContainer = KSSwiperContainer;
var KSSwiperSlide = (function () {
    function KSSwiperSlide(elementRef, swiper) {
        this.ele = elementRef.nativeElement;
        this.ele.classList.add('swiper-slide');
        swiper.update();
    }
    KSSwiperSlide = __decorate([
        core_1.Injectable(),
        core_1.Component({
            selector: 'ks-swiper-slide',
            template: '<div><ng-content></ng-content></div>'
        }),
        __param(0, core_1.Inject(core_1.ElementRef)),
        __param(1, core_1.Host()),
        __param(1, core_1.Inject(KSSwiperContainer)), 
        __metadata('design:paramtypes', [core_1.ElementRef, KSSwiperContainer])
    ], KSSwiperSlide);
    return KSSwiperSlide;
}());
exports.KSSwiperSlide = KSSwiperSlide;
//# sourceMappingURL=ks-swiper.js.map