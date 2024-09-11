import { photo as photos } from './zoom.js';

const pictureTemplate = document
  .querySelector('#picture')
  .content.querySelector('.picture');
const bigPictureNode = document.querySelector('.big-picture'); // внутри лежит шаблон карточки
const bigPictureImgNode = document.querySelector('.big-picture__img'); //Адрес изображения url
const likesCountNode = document.querySelector('.likes-count'); //Количество лайков likes
const socialShownNode = document.querySelector('.social__comment-shown-count'); // Количество показанных комментариев
const socialCommentTotalNode = document.querySelector(
  '.social__comment-total-count' // Общее количество комментариев к фотографии comments
);
const socialCommentNode = document.querySelector('.social__comments'); // Список комментариев под фотографией
const socialCaptionNode = document.querySelector('.social__caption'); // Описание фотографии description
const commentsLoaderNode = document.querySelector('.comments-loader'); // После открытия окна спрячьте блоки счётчика комментариев
const pictureContainer = document.querySelector('.pictures'); // контейнер всего
const pictureImgNode = document.querySelector('.picture__img');
const bigPictureTitleNode = document.querySelector('.big-picture__title');
const bigPicturePreviewNode = document.querySelector('.big-picture__preview');
const socialNeadereNode = document.querySelector('.social__header');

const socialPictureNode = document.querySelector('.social__picture');

// =============================================
function modalOpenHandler(evt) {
  bigPictureNode.classList.remove('hidden');
  body.classList.add('modal-open');

  const parent = pictureImgNode.parentElement;
  const bigPictureId = evt.target.parentElement.dataset.pictureId;
  const bigPhoto = photos.find((item) => item.id === Number(bigPictureId));

  const imgPhoto = bigPictureImgNode.querySelector('img');
  imgPhoto.src = bigPhoto.url;
  imgPhoto.alt = bigPhoto.description;

  const socialPicture = socialNeadereNode.querySelector('img');
  socialPicture.src = bigPhoto.avatar;

  const socialCaption = document.querySelector('.social__caption');
  socialCaption.textContent = bigPhoto.description;

  const { likes, comments } = bigPhoto;

  // Обновляем текст элементов
  document.querySelector('.picture__comments').textContent = comments.length;
  document.querySelector('.picture__likes').textContent = likes;
  document.querySelector('.likes-count').textContent = likes;

  // Обновляем счетчик комментариев
  const shownComments = Math.min(5, comments.length);
  document.querySelector('.social__comment-shown-count').textContent =
    shownComments;
  document.querySelector('.social__comment-total-count').textContent =
    comments.length;

  // Отображаем или скрываем блок с комментариями
  const commentsContainer = document.querySelector('.social__comments');
  if (comments.length === 0) {
    commentsContainer.classList.add('hidden');
  } else {
    commentsContainer.classList.remove('hidden');

    // Очищаем список комментариев
    commentsContainer.innerHTML = '';

    // Отображаем первые 5 комментариев
    for (let i = 0; i < shownComments; i++) {
      const comment = comments[i];
      const commentElement = document.createElement('li');
      commentElement.classList.add('social__comment');
      commentElement.innerHTML = `
        <img class="social__picture" src="${comment.avatar}" alt="Аватар комментатора фотографии" width="35" height="35">
        <p class="social__text">${comment.message}</p>
      `;
      commentsContainer.appendChild(commentElement);
    }

    // Добавляем кнопку "Загрузить еще"
    const loadMoreButton = document.querySelector('.comments-loader');
    loadMoreButton.classList.remove('hidden');
    let currentIndex = shownComments;

    loadMoreButton.addEventListener('click', () => {
      const remainingComments = comments.length - currentIndex;
      const additionalComments = Math.min(5, remainingComments);

      for (let i = currentIndex; i < currentIndex + additionalComments; i++) {
        const comment = comments[i];
        const commentElement = document.createElement('li');
        commentElement.classList.add('social__comment');
        commentElement.innerHTML = `
          <img class="social__picture" src="${comment.avatar}" alt="Аватар комментатора фотографии" width="35" height="35">
          <p class="social__text">${comment.message}</p>
        `;
        commentsContainer.appendChild(commentElement);
      }

      currentIndex += additionalComments;
      document.querySelector('.social__comment-shown-count').textContent =
        currentIndex;

      if (currentIndex >= comments.length) {
        loadMoreButton.classList.add('hidden');
      }
    });
  }
}

pictureContainer.addEventListener('click', modalOpenHandler);

// Получаем ссылку на тег <body>
const body = document.querySelector('body');

function modalCloseHandler(evt) {
  // Закрытие по клику на кнопку "Закрыть"
  if (evt.target.classList.contains('cancel')) {
    bigPictureNode.classList.add('hidden');
    body.classList.remove('modal-open');
  }

  // Закрытие по нажатию на клавишу Esc
  if (evt.key === 'Escape') {
    bigPictureNode.classList.add('hidden');
    body.classList.remove('modal-open');
  }
}

// Добавляем обработчик событий на окно
window.addEventListener('keydown', modalCloseHandler);
window.addEventListener('click', modalCloseHandler);
