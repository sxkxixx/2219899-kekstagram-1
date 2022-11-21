import {getRandomNum, getRandomElement} from './util.js';
const photosAmount = 25;
const likesAmount = {min: 15, max: 200};

const MESSAGES = ['Всё отлично!', 'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];

const NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];

const DESCRIPTION = ['Это я в коридоре был, сейчас дома уже',
  'Я никогда не слушаю музыку в одиночестве. Со мной ещё 5 этажей.',
  'Страшнее фотографии в паспорте может быть только её ксерокопия.',
  'Не могу стоять, пока другие работают… Пойду полежу.',
  'Всё отлично!'];

const createCommentObj = (id) => ({
  id: getRandomNum(1, 500),
  avatar: `img/avatar-${id % 6 + 1}.svg`,
  message: getRandomElement(MESSAGES),
  name: getRandomElement(NAMES)
});

const createDescription = (id) => ({
  id: id,
  url: `photos/${id}.jpg`,
  description: getRandomElement(DESCRIPTION),
  likes: getRandomNum(likesAmount.min, likesAmount.max),
  comments: Array.from({length: getRandomNum(1, 12)}).map((value, index) => createCommentObj(index + 1))
});

const arrayObj = Array.from({length: photosAmount}).map((value, index) => createDescription(index + 1));
export {arrayObj};
