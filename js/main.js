import {arrayObj} from './create-data.js';
import {getFilledFragment} from './draw.js';
import {setPhotoSettings} from './gallery.js';


const pictureContainer = document.querySelector('.pictures');
pictureContainer.append(getFilledFragment(arrayObj, setPhotoSettings));
