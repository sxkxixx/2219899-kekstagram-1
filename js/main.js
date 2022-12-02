import {renderUploadForm} from './form.js';
import {createSlider} from './image-effects.js';
import {getData} from './api.js';
import {showFilteredPictures} from './image-filter.js';

getData(showFilteredPictures);
renderUploadForm();
createSlider();
