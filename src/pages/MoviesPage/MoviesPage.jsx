import { useState, useEffect, useMemo } from "react";
import Filter from "../../components/Filter/Filter";
import MovieList from "../../components/MovieList/MovieList";
import { fetchMoviesName } from "../../movies"
import css from './MoviesPage.module.css'

import { useSearchParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";



export default function MoviesPage() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const [searchParams, setSearchParams] = useSearchParams();
    const ownerParam = searchParams.get("title") ?? "";

    const changeFilter = (newFilter) => {
        searchParams.set("title", newFilter);
        setSearchParams(searchParams);
    };


    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true);
                const data = await fetchMoviesName(ownerParam);
                setMovies(data);
            } catch (error) {
                setError(true);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [ownerParam]);

    const filteredMovies = useMemo(() => {
        return movies.filter((movie) =>
            movie.title.toLowerCase().includes(ownerParam.toLowerCase())
        );
    }, [ownerParam, movies]);

    return (
        <div>
            <div className={css.container}>
                <h2 className={css.heading}>Movies</h2>
                <Filter onFilter={changeFilter} />
            </div>
            {loading && <Loader />}
            {error && <b>Error...</b>}
            {movies && <MovieList movies={filteredMovies} />}
        </div>
    )

}