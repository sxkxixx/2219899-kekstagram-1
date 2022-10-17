import {createDescription, photosAmount} from './create-data.js';
import {createUserPicture, getFilledFragment} from './draw.js';

const arrayObj = Array.from({length: photosAmount}).map((value, index) => createDescription(index + 1));
const pictureContainer = document.querySelector('.pictures');
pictureContainer.append(getFilledFragment(arrayObj, createUserPicture));
