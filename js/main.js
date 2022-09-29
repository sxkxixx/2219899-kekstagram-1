const MESSAGES = ['Всё отлично!', 'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];

const NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон',];

const DESCRIPTION = ['Это я в коридоре был, сейчас дома уже',
  'Я никогда не слушаю музыку в одиночестве. Со мной ещё 5 этажей.',
  'Страшнее фотографии в паспорте может быть только её ксерокопия.',
  'Не могу стоять, пока другие работают… Пойду полежу.',
  'Всё отлично!'];


const getRandomNum = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  return Math.floor(Math.random() * (upper - lower + 1) + lower);
};

const isRightString = (str, maxLen) => String(str).length <= maxLen;
isRightString('Линтер не любит, когда функция не вызвана', 50);
const getRandomElement = (array) => array[getRandomNum(0, array.length - 1)];


function createCommentObj(id){
  return {
    id: getRandomNum(1, 500),
    avatar: `img/avatar-${id}.svg`,
    message: getRandomElement(MESSAGES),
    name: getRandomElement(NAMES)
  };
}


function createDescription(id){
  return {
    id: id,
    url: `photos/${id}.jpg`,
    description: getRandomElement(DESCRIPTION),
    likes: getRandomNum(15, 200),
    comments: Array.from({length: getRandomNum(1, 6)}).map((value, index) => createCommentObj(index + 1))
  };
}
// eslint-disable-next-line no-unused-vars
const arrayObj = Array.from({length: 25}).map((value, index) => createDescription(index + 1));
