import {appendThumbnails} from './gallery.js';
import {renderUploadForm} from './form.js';
import {createSlider} from './image-effects.js';
import {getData} from './api.js';

getData(appendThumbnails);
renderUploadForm();
createSlider();

