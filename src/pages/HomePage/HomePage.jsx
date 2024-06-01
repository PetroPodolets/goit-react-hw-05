import { useEffect, useState } from "react"
import { fetchMovies } from "../../movies";
import Loader from "../../components/Loader/Loader";
import MovieList from "../../components/MovieList/MovieList";
import css from "./HomePage.module.css"

export default function HomePage() {

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, seterror] = useState(false);

    useEffect(() => {
        async function fetchMoviesEffect() {
            try {
                setLoading(true);
                const data = await fetchMovies();
                setMovies(data);
            } catch (error) {
                seterror(true)
            } finally {
                setLoading(false)
            }
        }

        fetchMoviesEffect()
    }, []);

    return (
        <div>
            <h2 className={css.homeTitle}>Trending today</h2>
            {loading && <Loader />}
            {error && <div>Error fetching movies.</div>}
            {movies.length > 0 && <MovieList movies={movies} />}
        </div>
    )


}
