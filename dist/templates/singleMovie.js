export const MovieTemplate = (movies) => {
    let template = '';
    movies.forEach((genre) => {
        template += `<div>
            <h4>${genre.title}</h4>
            <p>${genre.overview}</p>
        </div>`;
    });
    return template;
};
