"use strict";

let numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actor: {},
    genres: [],
    private: false
};

for (let i = 0; i < 2; i++) {
    let watchedFilm = prompt('Один из последних просмотренных фильмов?', ''),
        markWatchedFilm = +prompt('Какая оценка этому фильму?', '');

    if (watchedFilm != null && markWatchedFilm != null && watchedFilm != '' && markWatchedFilm != '' && watchedFilm.length <= 50 && markWatchedFilm <= 50) {
        personalMovieDB.movies[watchedFilm] = markWatchedFilm;
    } else {
        watchedFilm = prompt('Один из последних просмотренных фильмов?', ''),
        markWatchedFilm = +prompt('Какая оценка этому фильму?', '');
    }
}

console.log(personalMovieDB);