const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const promoAdv = document.querySelectorAll('.promo__adv img'),
      promoBg = document.querySelector('.promo__bg'),
      promoGenre = promoBg.querySelectorAll('.promo__genre'),
      promoInteractivList = document.querySelector('.promo__interactive-list');

promoAdv.forEach(item => {
    item.remove();
});
promoGenre[0].textContent = 'Драма';
promoBg.style.backgroundImage = "url('img/bg.jpg')";
promoInteractivList.innerHTML = '';
movieDB.movies.sort();

movieDB.movies.forEach((film, i) =>{
    promoInteractivList.innerHTML += `
        <li class="promo__interactive-item">${i+1} ${film}
            <div class="delete"></div>
        </li>
    `; 
}); 