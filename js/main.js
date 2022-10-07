import {createDescription, photosAmount} from './create-data.js';

const arrayObj = Array.from({length: photosAmount}).map((value, index) => createDescription(index + 1));
// eslint-disable-next-line no-console
console.log(arrayObj);
