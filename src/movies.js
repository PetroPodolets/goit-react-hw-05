import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3"

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZDkzMGQ2ODkxOGY5ZDZmYjNjZmIwNGNjYjA1ZWYxOSIsInN1YiI6IjY2NTg1MjE4Yzk0MGNmYzVjZDc0ZTA1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.S7tupxsQ96Xlfm0z_eg5a1H6Eq6FRZa9wdPQtHw0iEg'
    }
};

export const fetchMovies = async () => {
    const response = await axios.get('/trending/movie/day?language=uk-Ua', options);
    return response.data.results;
};


export const getMovieById = async (movieId) => {
    const response = await axios.get(`/movie/${movieId}?language=uk-Ua`, options);
    return response.data;
};


export const fetchMoviesName = async (name) => {
    const response = await axios.get(`/search/movie?query=${name}&language=uk-Ua`, options);
    return response.data.results;

};

export const fetchMovieReviews = async (reviewId) => {
    const response = await axios.get(`/movie/${reviewId}/reviews`, options);
    return response.data.results;
};

export const fetchMovieCast = async (castId) => {
    const response = await axios.get(`/movie/${castId}/credits`, options);
    return response.data.cast;
};