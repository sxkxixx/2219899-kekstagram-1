// const ALERT_SHOW_TIME = 5000;

import {closeOverlay} from './form.js';

const getRandomNum = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  return Math.floor(Math.random() * (upper - lower + 1) + lower);
};

const isRightString = (str, maxLen) => String(str).length <= maxLen;
const getRandomElement = (array) => array[getRandomNum(0, array.length - 1)];
const isEscapeKey = (evt) => evt.key === 'Escape';


const showAlert = (isError) => {
  const templateName = isError ? 'error' : 'success';
  const template = document.querySelector(`#${templateName}`).content.querySelector('section');
  const popup = template.cloneNode(true);
  popup.style.zIndex = 100;
  document.body.append(popup);
  const button = popup.querySelector('button');
  button.addEventListener('click', () => {
    popup.remove();
    closeOverlay();
  });

};

export {getRandomNum, getRandomElement, isRightString, isEscapeKey, showAlert};

