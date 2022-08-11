import { getGenres, getMovies } from './services/movie.js'
import { genresButton } from './templates/button.js'
import { MovieTemplate } from './templates/singleMovie.js'
const DOM = {
    genres: document.querySelector('.genres'),
    fetchMovie: document.querySelector('#renderMovie'),
    movies: document.querySelector('.movies')
}
const ids: string[] = []

const addClickEvent = (selector: string, attribute: string, cb: Function) => {
    const btns = document.querySelectorAll(`${selector}`)
    btns.forEach((btn) => {
        btn.addEventListener('click', (): void => {
            const genreID = btn.getAttribute(`${attribute}`)
            cb(genreID)
            btn.classList.toggle('active')
        })
    })
}

async function renderGenres() {
    const genresResponse= await getGenres()
    const genresTemplate = genresButton(genresResponse.genres)
    DOM.genres?.insertAdjacentHTML('afterbegin', genresTemplate)
    addClickEvent('.genre-btn', 'genre-id', (item: string) => {
        const index = ids.indexOf(item)
        if (index > -1) ids.splice(index, 1)
        else ids.push(item)
    })
}

async function renderMovies (idsArray: string[]) {
    const joinIds = idsArray.join(',')
    if (ids.length === 0) {
        if (DOM.movies) DOM.movies.innerHTML = 'FIRST select one or more genres' 
        return
    }
    if (DOM.movies) DOM.movies.innerHTML = ''
    const movies = await getMovies(joinIds)
    const template = MovieTemplate(movies.results)
    DOM.movies?.insertAdjacentHTML('afterbegin', template)
    
}

renderGenres()
DOM.fetchMovie?.addEventListener('click', async () => {
    await renderMovies(ids)
})