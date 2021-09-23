type genre = {
    id: string
    name: string
}

export type movie = {
    poster_path: string,
    adult: boolean,
    overview: string
    release_date: string
    genre_ids: []
    id: number,
    original_title: string,
    original_language: string,
    title: string,
    backdrop_path: string,
    popularity: number,
    vote_count: number,
    video: boolean,
    vote_average: number
}

export interface Movies {
    isFetching: boolean,
    error:  string | null,
    movies: movie[],
    genres: genre[]
}