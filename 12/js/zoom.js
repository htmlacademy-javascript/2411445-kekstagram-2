//Просмотр загруженных изображений
import { generatePhotos } from './comments';

const photo = generatePhotos(); //массив фото
const template = document
  .querySelector('#picture')
  .content.querySelector('.picture'); // внутри лежит шаблон карточки
const section = document.querySelector('.pictures');
function createsPhoto() {
  //создает фото

  for (let i = 0; i < photo.length; i++) {
    const cardSample = template.cloneNode(true);
    cardSample.dataset.pictureId = photo[i].id; //по какой фотографии кликнули
    const image = cardSample.querySelector('.picture__img');
    image.src = photo[i].url;
    image.alt = photo[i].description;
    const comments = photo[i].comments.length; //комментарии
    const cardSampleLike = photo[i].likes; //лайки
    cardSample.querySelector('.picture__comments').textContent = comments; //находим элемент тег picture_comments и присваиваем значение массива
    cardSample.querySelector('.picture__likes').textContent = cardSampleLike; //находим элемент тег picture_likes и присваиваем значение массива
    section.append(cardSample);
  }
}

createsPhoto();

export {photo};

