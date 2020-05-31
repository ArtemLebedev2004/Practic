"use strict";

let numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actor: {},
    genres: [],
    private: false
};

let watchedFilm = prompt('Один из последних просмотренных фильмов?');
let markWatchedFilm = +prompt('Какая оценка этому фильму?');
let watchedFilm2 = prompt('Один из последних просмотренных фильмов?');
let markWatchedFilm2 = +prompt('Какая оценка этому фильму?');

personalMovieDB.movies[watchedFilm] = markWatchedFilm;
personalMovieDB.movies[watchedFilm2] = markWatchedFilm2;

console.log(personalMovieDB);