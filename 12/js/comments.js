import {
  AVATAR_COUNT_MAX,
  COMMENT_COUNT_QUANTIFIER,
  PHOTOS_COUNT_MAX,
  NAMES,
  COMMENT_MESSAGES,
} from './data';

function generateAvatar() {
  const avatar = `img/avatar-${
    Math.floor(Math.random() * AVATAR_COUNT_MAX) + 1
  }.svg`;
  return avatar;
}

function generateMessage() {
  const message =
    COMMENT_MESSAGES[Math.floor(Math.random() * COMMENT_MESSAGES.length)];
  return message;
}

function generateName() {
  const name = NAMES[Math.floor(Math.random() * NAMES.length)];
  return name;
}

function generateComments() {
  const comments = [];

  const commentCount = Math.floor(Math.random() * COMMENT_COUNT_QUANTIFIER);
  for (let commentId = 1; commentId <= commentCount; commentId++) {
    const avatar = generateAvatar();
    const message = generateMessage();
    const name = generateName();
    const comment = {
      id: commentId,
      avatar: avatar,
      message: message,
      name: name,
    };
    comments.push(comment);
  }
  return comments;
}


export function generatePhotos() {
  const photos = [];

  for (let i = 1; i <= PHOTOS_COUNT_MAX; i++) {
    const photo = {
      id: i,
      url: `photos/${i}.jpg`,
      description: `Описание фотографии ${i}`,
      likes: Math.floor(Math.random() * 186) + 15,
      comments: generateComments(),
      avatar: generateAvatar()
    };

    photos.push(photo);
  }
console.log(photos);
  return photos;
};
