import type { SingleGenres } from "../types/types"

export const genresButton = (genresArray: SingleGenres[]): string => {
    let template = ''
    genresArray.forEach((genre: SingleGenres) => {
        template += `<button genre-id="${genre.id}" class="genre-btn">${genre.name}</button>`
    });
    return template
}