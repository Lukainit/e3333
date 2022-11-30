const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '')

personalMovieDb.movies[a] = b;
personalMovieDb.movies[c] = d;


///////////////////////////////////////////////////////////////////////////////////////////////////////////////