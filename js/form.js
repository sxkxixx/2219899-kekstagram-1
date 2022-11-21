import {isEscapeKey} from './util.js';
import {validateForm, onFocusPreventClose} from './validate-form.js';
import {onFilterChange, disableSlider} from './image-effects.js';
import {onResizeButtonClick} from './image-scale.js';

const image = document.querySelector('.img-upload__preview').querySelector('img');
const effectsField = document.querySelector('.img-upload__effects');

//Отображение формы
const form = document.querySelector('.img-upload__form');
const overlay = document.querySelector('.img-upload__overlay');
const uploadButton = document.querySelector('#upload-file');
const cancelButton = document.querySelector('#upload-cancel');
const hashtagsInput = document.querySelector('.text__hashtags');
const commentInput = document.querySelector('.text__description');

const onEscapeKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    closeOverlay();
  }
};

function closeOverlay() {
  document.body.classList.remove('modal-open');
  overlay.classList.add('hidden');
  document.removeEventListener('keydown', onEscapeKeydown);
  cancelButton.removeEventListener('click', closeOverlay);
  disableSlider();
  form.reset();
}

const openOverlay = () => {
  image.removeAttribute('class');
  image.removeAttribute('style');
  document.body.classList.add('modal-open');
  overlay.classList.remove('hidden');
  document.addEventListener('keydown', onEscapeKeydown);
  cancelButton.addEventListener('click', closeOverlay);
  commentInput.onkeydown = (evt) => onFocusPreventClose(evt);
  hashtagsInput.onkeydown = (evt) => onFocusPreventClose(evt);
  effectsField.addEventListener('change', onFilterChange);
  onResizeButtonClick();
};

const renderUploadForm = () => {
  uploadButton.addEventListener('change', openOverlay);
  form.addEventListener('submit', (evt) => {
    if (!validateForm(form, hashtagsInput, commentInput)) {
      evt.preventDefault();
    }
  });
};

export {renderUploadForm};

