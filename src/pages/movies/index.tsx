import { NextPage } from 'next'
import { PageLayout } from '~/components/layout'
import { MovieList } from '~/components/movie-list'

import { getAllMovies } from '~/services/movie'
import type { Movie } from '~/services/movie'

type BrowseMoviesProps = {
  movies: Movie[]
}

export const getServerSideProps = async () => {
  const movies = await getAllMovies()

  return { props: { movies } }
}

const BrowseMovies: NextPage<BrowseMoviesProps> = props => {
  return (
    <PageLayout title="Browse All Movies">
      <section className="p-2 md:p-4 lg:p-8 xl:p-16">
        <div className="container p-8 mx-auto bg-white">
          <h1 className="mb-4 text-2xl font-bold text-slate-800 font-heading">
            Movie List
          </h1>
          <MovieList movies={props.movies} />
        </div>
      </section>
    </PageLayout>
  )
}

export default BrowseMovies
