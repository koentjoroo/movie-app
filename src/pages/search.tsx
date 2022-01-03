import { GetServerSidePropsContext, NextPage } from 'next'
import { PageLayout } from '~/components/layout'
import { MovieList } from '~/components/movie-list'
import { searchMovie } from '~/services/movie'

import type { Movie } from '~/services/movie'

type SearchMoviesProps = {
  movies?: Movie[]
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const query = context.query?.q as string

  if (!query) return { props: { movies: null } }

  const movies = await searchMovie(query)

  return { props: { movies } }
}

const SearchMovies: NextPage<SearchMoviesProps> = props => {
  if (props.movies === null) {
    return (
      <PageLayout title="Whoops! - Search Movie">
        <div className="container p-8 mx-auto text-center text-slate-800">
          <p>Can not find any single movie for you</p>
          <p>Either no query was entered or no movie related to the query</p>
        </div>
      </PageLayout>
    )
  }

  return (
    <PageLayout title="Search Movie">
      <section className="p-2 md:p-4 lg:p-8 xl:p-16">
        <div className="container p-8 mx-auto bg-white">
          <h1 className="mb-4 text-2xl font-bold text-slate-800 font-heading">
            Search Result
          </h1>
          <MovieList movies={props.movies} />
        </div>
      </section>
    </PageLayout>
  )
}

export default SearchMovies
