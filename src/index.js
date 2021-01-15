'use strict';

import 'nodelist-foreach-polyfill';
import "@babel/polyfill";
import elementClosest from  'element-closest';
elementClosest(window);
import 'formdata-polyfill';
import 'es6-promise';
import 'fetch-polyfill';
import 'regexp-polyfill';
import smoothscroll from 'smoothscroll-polyfill';
smoothscroll.polyfill();
import browser from 'cross-browser-polyfill';
browser();

import togglePopUp from './modules/togglePopUp';
import countDot from './modules/countDot';
import slider from './modules/slider';
import form from './modules/form';

//popup
togglePopUp();

countDot();

slider();

form();