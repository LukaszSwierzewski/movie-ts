export type SingleGenres = {
    id: number,
    name: string
}


export type GenresResponse = {
    genres: SingleGenres[]
}

export type SingleMovie = {
    adult: boolean,
    genre_ids: number[],
    title: string,
    overview: string,
    poster_path: string
}

export type MoviesResponse = {
    page: number,
    results: SingleMovie[],
    total_pages: number,
    total_results: number
}