   require('es6-promise').polyfill();
   import 'nodelist-foreach-polyfill';
   
   import tabs from './modules/tabs';
   import modal from './modules/modal';
   import timer from './modules/timer';
   import cards from './modules/cards';
   import calc from './modules/calc';
   import forms from './modules/forms';
   import slider from './modules/slider';
   import {
       openModal
   } from './modules/modal';


   window.addEventListener('DOMContentLoaded', () => {

       const modalTimetId = setTimeout(() => openModal('.modal', modalTimetId), 59000);

       tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
       modal('[data-modal]', '.modal', modalTimetId);
       timer('.timer', '2021-06-11');
       cards();
       calc();
       forms('form', modalTimetId);
       slider({
           container: '.offer__slider',
           nextArrow: '.offer__slider-next',
           prevArrow: '.offer__slider-prev',
           slide: '.offer__slide',
           totalCounter: '#total',
           currentCounter: '#current',
           wrapper: '.offer__slider-wrapper',
           field: '.offer__slider-inner'
       });
   });