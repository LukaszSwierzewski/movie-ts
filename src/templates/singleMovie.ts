import type { SingleMovie } from "../types/types"

export const MovieTemplate = (movies: SingleMovie[]): string => {
    let template = ''
    movies.forEach((genre: SingleMovie) => {
        template += `<div>
            <h4>${genre.title}</h4>
            <p>${genre.overview}</p>
        </div>`
    });
    return template
}