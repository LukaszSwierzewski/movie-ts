export const genresButton = (genresArray) => {
    let template = '';
    genresArray.forEach((genre) => {
        template += `<button genre-id="${genre.id}" class="genre-btn">${genre.name}</button>`;
    });
    return template;
};
