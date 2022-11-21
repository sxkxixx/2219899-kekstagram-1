import {arrayObj} from './data.js';
import {appendThumbnails} from './gallery.js';
import {renderUploadForm} from './form.js';
import {createSlider} from './image-effects.js';

appendThumbnails(arrayObj);
renderUploadForm();
createSlider();
