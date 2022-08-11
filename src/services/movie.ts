const API_KEY = '90f293a092c89d7d60e8dc93f000605c'

const genresUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
const moviesUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`
import type { GenresResponse, MoviesResponse } from "../types/types"

export const getGenres = async (): Promise<GenresResponse> => {
    try {
        const data = await fetch(genresUrl)
        const response: GenresResponse = await data.json()
        return response
    } catch (error) {
        throw(error)
    }
}

export const getMovies = async (ids: string): Promise<MoviesResponse> => {
    try {
        const data = await fetch(`${moviesUrl}&with_genres=${ids}`)
        const response: MoviesResponse = await data.json()
        return response
    } catch (error) {
        throw(error)
    }
}