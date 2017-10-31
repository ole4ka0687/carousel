'use strict';
class Carousel {
    constructor(options) {
     this._el = options.el;
     this._images = options.images;

     this._template = document.querySelector('#carousel-template').innerHTML;
     this._compiledTemplate = _.template(this._template);

     this._render();

     this._shift = 0;
     this._maxShift = 7;
     this._carouselList = this._el.querySelector('.carousel__list');

     this._el.addEventListener('click', this._onButtonClick.bind(this));
    }

    move(shiftValue) {
        this._shift += shiftValue;
        this._shift = Math.max(0, this._shift);
        this._shift = Math.min(this._maxShift, this._shift);
        let marginLeft = this._shift * (-130);

        this._carouselList.style.marginLeft = marginLeft + 'px';
    }

    _render() {
        this._el.classList.add('carousel');
        this._el.innerHTML = this._compiledTemplate({
            images: this._images
        });
    }

    _onButtonClick(event) {
        let targetButton = event.target.closest(".carousel__button");
        if(!targetButton) {
            return;
        }
        if (targetButton.classList.contains("carousel__button--prev")) {
            this.move(-3);
        }
        else if (targetButton.classList.contains("carousel__button--next")) {
            this.move(3);
        }
    }
}

let imagesFromServer = [
    "https://js.cx/carousel/1.png",
    "https://js.cx/carousel/2.png",
    "https://js.cx/carousel/3.png",
    "https://js.cx/carousel/4.png",
    "https://js.cx/carousel/5.png",
    "https://js.cx/carousel/6.png",
    "https://js.cx/carousel/7.png",
    "https://js.cx/carousel/8.png",
    "https://js.cx/carousel/9.png",
    "https://js.cx/carousel/10.png"
]