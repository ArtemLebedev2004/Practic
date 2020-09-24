"use strict";

let personalMovieDB = {                
    count: 0,
    movies: {},
    actor: {},
    genres: [],
    private: false,
    start: function() {                      
        personalMovieDB.count = +prompt('Сколько фильмов Вы уже посмотрели?', '');
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов Вы уже посмотрели?', '');
        }
    },
    
    rememberMyFilms: function()  {
            for (let i = 0; i < 2; i++) {
                let watchedFilm = prompt('Один из последних просмотренных фильмов?', ''),
                    markWatchedFilm = +prompt('Какая оценка этому фильму?', '');
            
                if (watchedFilm != null && markWatchedFilm != null && watchedFilm != '' && markWatchedFilm != '' && watchedFilm.length <= 50 && markWatchedFilm <= 50 && markWatchedFilm != NaN) {
                    personalMovieDB.movies[watchedFilm] = markWatchedFilm;
                } else {
                   i--;
                }
            }
            
        },
                
        detectPersonalLevel: function() {
            if (personalMovieDB.count < 10) {
                console.log('Вы посмотрели слишком мало фильмов');
            } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
                console.log('Вы обычный зритель');
            } else  if (personalMovieDB.count >= 30){
                console.log('Вы киноман!');
            } else {
                console.log('Произошла ошибка!');
            }
        },

        toggleVisibleMyDB: function() {
            if (personalMovieDB.private) {
                personalMovieDB.private = false;
            } else {
                personalMovieDB = true;
            }
        },
        
        showMyDB: function(hidden) {
            if (!hidden) {
                console.log(personalMovieDB);
            }
        },
        
        writeYourGenres: function() {
            for (let i = 1; i <= 3; i++) {
                // let answerGenres = prompt(`Ваш любимый жанр под номером ${i}`); 
                // if (answerGenres != null && answerGenres !== '') {
                //     personalMovieDB.genres[i - 1] = answerGenres;
                // } else {
                //     i--;
                // }

                let answerGenres = prompt(`Введите пожалуйста Ваши любимые жанры через запятую`).toLowerCase(); 
                if (answerGenres != null && answerGenres !== '') {
                    personalMovieDB.genres = answerGenres.split(', ');
                    personalMovieDB.genres.sort();
                } else {
                    i--;
                }
            }    
            personalMovieDB.genres.forEach((item, i) => {
                console.log(`Любимый жанр ${i + 1} - это ${item}`);
            });
        },
};
 
