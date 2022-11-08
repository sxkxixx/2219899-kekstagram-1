import {isEscapeKey} from './util.js';
import {validateForm, onFocusPreventClose} from './validate-form.js';

const form = document.querySelector('.img-upload__form');
const overlay = document.querySelector('.img-upload__overlay');
const uploadButton = document.querySelector('#upload-file');
const cancelButton = document.querySelector('#upload-cancel');
const hashtagsInput = document.querySelector('.text__hashtags');
const commentInput = document.querySelector('.text__description');

const onEscapeKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    document.body.classList.remove('modal-open');
    overlay.classList.add('hidden');
    document.removeEventListener('keydown', onEscapeKeydown);
    form.reset();
  }
};

const closeOverlay = () => {
  document.body.classList.remove('modal-open');
  overlay.classList.add('hidden');
  document.removeEventListener('keydown', onEscapeKeydown);
  cancelButton.removeEventListener('click', closeOverlay);
  form.reset();
};

const openOverlay = () => {
  document.body.classList.add('modal-open');
  overlay.classList.remove('hidden');
  document.addEventListener('keydown', onEscapeKeydown);
  cancelButton.addEventListener('click', closeOverlay);
  commentInput.onkeydown = (evt) => onFocusPreventClose(evt);
  hashtagsInput.onkeydown = (evt) => onFocusPreventClose(evt);
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

