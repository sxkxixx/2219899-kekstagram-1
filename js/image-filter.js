import {appendThumbnails} from './gallery.js';
import {getUniqueElementsArray, debounce} from './util.js';

const RANDOM_AMOUNT = 10;

const filterSection = document.querySelector('.img-filters');
const defaultfFilter = document.querySelector('#filter-default');
const randomFilter = document.querySelector('#filter-random');
const discussedFilter = document.querySelector('#filter-discussed');


const removePictures = () => {
  const thumbnails = document.querySelectorAll('.picture');
  thumbnails.forEach((picture) => {
    picture.remove();
  });
};

const removeActiveClass = () => {
  const active = document.querySelector('.img-filters__button--active');
  active.classList.remove('img-filters__button--active');
};

const comparePicturesByComments = (pictureA, pictureB) => pictureB.comments.length - pictureA.comments.length;

const getSortedPictures = (pictures) => pictures.slice().sort(comparePicturesByComments);

const addThumbnail = (array, button) => {
  removePictures();
  removeActiveClass();
  appendThumbnails(array);
  button.classList.add('img-filters__button--active');
};

const showFilteredPictures = (pictures) => {
  appendThumbnails(pictures);
  filterSection.classList.remove('img-filters--inactive');
  defaultfFilter.addEventListener('click', debounce(() => {
    addThumbnail(pictures, defaultfFilter);
  }));
  randomFilter.addEventListener('click', debounce(() => {
    addThumbnail(getUniqueElementsArray(pictures, RANDOM_AMOUNT), randomFilter);
  }));
  discussedFilter.addEventListener('click', debounce(() => {
    addThumbnail(getSortedPictures(pictures), discussedFilter);
  }));

};

export {showFilteredPictures};
