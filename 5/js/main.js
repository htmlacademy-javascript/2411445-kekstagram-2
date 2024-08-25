function generatePhotos() {
  const photos = [];
  const commentMessages = [
    "Всё отлично!",
    "В целом всё неплохо. Но не всё.",
    "Когда Вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.",
    "Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.",
    "Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.",
    "Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!",
  ];

  const names = ["Артём", "Мария", "Алексей", "Ольга", "Дмитрий", "Екатерина"];

  for (let i = 1; i <= 25; i++) {
    const comments = [];
    const commentCount = Math.floor(Math.random() * 31);

    for (let j = 1; j <= commentCount; j++) {
      const commentId = j;
      const avatar = `img/avatar-${Math.floor(Math.random() * 6) + 1}.svg`;
      const message =
        commentMessages[Math.floor(Math.random() * commentMessages.length)];
      const name = names[Math.floor(Math.random() * names.length)];

      comments.push({
        id: commentId,
        avatar,
        message,
        name,
      });
    }

    const photo = {
      id: i,
      url: `photos/${i}.jpg`,
      description: `Описание фотографии ${i}`,
      likes: Math.floor(Math.random() * 186) + 15,
      comments,
    };

    photos.push(photo);
  }

  return photos;
}

const photos = generatePhotos();
console.log(photos);
