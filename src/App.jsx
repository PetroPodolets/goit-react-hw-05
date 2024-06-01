import { lazy } from "react";
import { Routes, Route } from 'react-router-dom';
import "./App.css"

const Layout = lazy(() => import("./components/Layout/Layout"))
const MovieCast = lazy(() => import("./components/MovieCast/MovieCast"))
const MovieReviews = lazy(() => import("./components/MovieReviews/MovieReviews"))
const HomePage = lazy(() => import("./pages/HomePage/HomePage"))
const MoviesPage = lazy(() => import("./pages/MoviesPage/MoviesPage"))
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"))
const MovieDetailsPage = lazy(() => import("./pages/MovieDetailsPage/MovieDetailsPage"))
function App() {

  return (

    <Layout >

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/movies' element={<MoviesPage />} />
        <Route path='/movies/:movieId' element={<MovieDetailsPage />}>
          <Route path='cast' element={<MovieCast />} />
          <Route path='reviews' element={<MovieReviews />} />
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Routes>

    </Layout>
  )
}

export default App
