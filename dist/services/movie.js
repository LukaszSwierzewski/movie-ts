var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// I know I should put this API key on .env file but then I can't send you live preview
// I setup the API call limit to make it save from calling it to many times.
const API_KEY = '90f293a092c89d7d60e8dc93f000605c';
const genresUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`;
const moviesUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
export const getGenres = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield fetch(genresUrl);
        const response = yield data.json();
        return response;
    }
    catch (error) {
        throw (error);
    }
});
export const getMovies = (ids) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield fetch(`${moviesUrl}&with_genres=${ids}`);
        const response = yield data.json();
        return response;
    }
    catch (error) {
        throw (error);
    }
});
