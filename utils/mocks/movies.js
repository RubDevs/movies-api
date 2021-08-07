const moviesMock = [
  {
    id: '1a6b6766-e634-4dbb-a3e4-51b0a5bc3579',
    title: "Relationship Status: It's Complicated",
    year: 2004,
    cover: 'http://dummyimage.com/174x237.png/ff4444/ffffff',
    description:
      'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
    duration: 2056,
    contentRating: 'R',
    tags: [
      'Comedy|Drama',
      'Drama|Mystery|Thriller',
      'Drama',
      'Action|Comedy|Drama|Fantasy|Mystery|Sci-Fi|War',
    ],
  },
  {
    id: '2fd7cb55-f2eb-425b-a7f0-20741911e4c3',
    title: 'The Suspicious Death of a Minor',
    year: 2003,
    cover: 'http://dummyimage.com/154x243.png/5fa2dd/ffffff',
    description:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    duration: 1951,
    contentRating: 'PG-13',
    tags: ['Drama|Thriller', 'Drama'],
  },
  {
    id: 'd41ecfff-e17b-4cee-abe9-911b66283ff2',
    title: 'Absolute Aggression',
    year: 2003,
    cover: 'http://dummyimage.com/185x142.png/dddddd/000000',
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    duration: 1951,
    contentRating: 'NC-17',
    tags: ['Drama|Thriller', 'Documentary'],
  },
  {
    id: 'c51e95ea-79ee-42d4-a05f-cb293100762e',
    title: 'Hole, The',
    year: 2009,
    cover: 'http://dummyimage.com/161x157.png/ff4444/ffffff',
    description:
      'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    duration: 1898,
    contentRating: 'PG',
    tags: ['Drama|Romance', 'Comedy|Drama', 'Drama'],
  },
  {
    id: 'df0dc868-6fc4-49f8-801d-1979a259247e',
    title: 'Flipper',
    year: 1969,
    cover: 'http://dummyimage.com/184x164.png/ff4444/ffffff',
    description:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    duration: 1890,
    contentRating: 'G',
    tags: ['Adventure|Sci-Fi'],
  },
  {
    id: '0aa7f02c-6034-4bed-b05e-c2ec066d832b',
    title: 'Casino Jack and the United States of Money',
    year: 1999,
    cover: 'http://dummyimage.com/243x151.png/ff4444/ffffff',
    description:
      'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    duration: 1889,
    contentRating: 'PG-13',
    tags: ['Drama'],
  },
  {
    id: 'b68cc9dd-e652-453a-b0ab-bc56c47c4aeb',
    title: 'Panther',
    year: 1985,
    cover: 'http://dummyimage.com/192x180.png/5fa2dd/ffffff',
    description:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    duration: 1991,
    contentRating: 'G',
    tags: ['Drama|Thriller', 'Drama', 'Horror|Thriller'],
  },
  {
    id: '5836db15-4e8d-4d4a-93c3-b11c50f4a57f',
    title: 'Spice World',
    year: 2007,
    cover: 'http://dummyimage.com/153x184.png/ff4444/ffffff',
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    duration: 2054,
    contentRating: 'PG',
    tags: ['Drama'],
  },
  {
    id: 'f66a5439-1a34-4be5-be19-d5aea276c025',
    title: 'Desi Boyz',
    year: 2002,
    cover: 'http://dummyimage.com/148x112.png/dddddd/000000',
    description:
      'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    duration: 2018,
    contentRating: 'PG-13',
    tags: ['Comedy'],
  },
  {
    id: '55d010e6-1201-4743-839f-15b6d34a58e1',
    title: "Being Elmo: A Puppeteer's Journey",
    year: 2007,
    cover: 'http://dummyimage.com/199x167.png/cc0000/ffffff',
    description:
      'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    duration: 2027,
    contentRating: 'PG',
    tags: ['Children|Comedy|Drama', 'Adventure|Children', 'Comedy|Romance'],
  },
];

function filterMovieMock(tag) {
  return moviesMock.filter((movie) => movie.tags.includes(tag));
}

class MovieServiceMock {
  async getMovies() {
    return Promise.resolve(moviesMock);
  }

  async getMovie() {
    return Promise.resolve(moviesMock[0]);
  }

  async createMovie() {
    return Promise.resolve(moviesMock[0]);
  }
}

module.exports = { moviesMock, filterMovieMock, MovieServiceMock };
