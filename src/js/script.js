import tabs from './modules/tabs';
import slider from './modules/slider';
import forms from './modules/forms';
import modal from './modules/modal';
import fullVersionForMobile from './modules/fullVersionForMobile';


window.addEventListener('DOMContentLoaded', () => {
    tabs('.tabs__tab-item', '.tabs__content', '.tabs__tabs-wrapper', 'tabs__tab-item_active', '.tabs__image');
    slider({
        nextArrow: '.reviews__arrow-next',
        prevArrow: '.reviews__arrow-prev',
        slide: '.reviews__item',
        wrapper: '.reviews__slider',
        field: '.reviews__wrapper-slider'
    });
    forms('.contact__form', '.promo__main-form');
    modal('.overlay', '.modal__close');
    fullVersionForMobile();
});