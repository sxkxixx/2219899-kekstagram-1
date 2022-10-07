import {createDescription, photosAmount} from './create-data.js';

// eslint-disable-next-line no-unused-vars
const arrayObj = Array.from({length: photosAmount}).map((value, index) => createDescription(index + 1));
// eslint-disable-next-line no-console
console.log(arrayObj);
