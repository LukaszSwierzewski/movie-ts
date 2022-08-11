var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
import { getGenres, getMovies } from './services/movie.js';
import { genresButton } from './templates/button.js';
import { MovieTemplate } from './templates/singleMovie.js';
const DOM = {
    genres: document.querySelector('.genres'),
    fetchMovie: document.querySelector('#renderMovie'),
    movies: document.querySelector('.movies')
};
const ids = [];
const addClickEvent = (selector, attribute, cb) => {
    const btns = document.querySelectorAll(`${selector}`);
    btns.forEach((btn) => {
        btn.addEventListener('click', () => {
            const genreID = btn.getAttribute(`${attribute}`);
            cb(genreID);
            btn.classList.toggle('active');
        });
    });
};
function renderGenres() {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const genresResponse = yield getGenres();
        const genresTemplate = genresButton(genresResponse.genres);
        (_a = DOM.genres) === null || _a === void 0 ? void 0 : _a.insertAdjacentHTML('afterbegin', genresTemplate);
        addClickEvent('.genre-btn', 'genre-id', (item) => {
            const index = ids.indexOf(item);
            if (index > -1)
                ids.splice(index, 1);
            else
                ids.push(item);
        });
    });
}
function renderMovies(idsArray) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const joinIds = idsArray.join(',');
        if (ids.length === 0) {
            if (DOM.movies)
                DOM.movies.innerHTML = 'FIRST select one or more genres';
            return;
        }
        if (DOM.movies)
            DOM.movies.innerHTML = '';
        const movies = yield getMovies(joinIds);
        const template = MovieTemplate(movies.results);
        (_a = DOM.movies) === null || _a === void 0 ? void 0 : _a.insertAdjacentHTML('afterbegin', template);
    });
}
renderGenres();
(_a = DOM.fetchMovie) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => __awaiter(void 0, void 0, void 0, function* () {
    yield renderMovies(ids);
}));
