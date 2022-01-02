import { PageLayout } from '~/components/layout'
import { getLatestMovies } from '~/services/movie'

import type { NextPage } from 'next'
import type { Movie } from '~/services/movie'

type HomeProps = {
  movies: Movie[]
}

export const getServerSideProps = async () => {
  const movies = await getLatestMovies()

  return { props: { movies } }
}

const Home: NextPage<HomeProps> = props => {
  return (
    <PageLayout title="Movie App">
      <section className="p-2 bg-white md:p-4 lg:p-8 xl:p-16">
        <div className="container mx-auto">
          <h2 className="mb-8 text-2xl font-bold text-center text-slate-800 font-heading">
            Search Movies
          </h2>
          <form className="flex items-center gap-4">
            <input
              className="w-full px-8 py-4 rounded-full bg-slate-50"
              type="text"
              placeholder="Search..."
            />
            <input
              className="px-8 py-4 text-white rounded-full bg-rose-500 hover:bg-rose-700"
              type="submit"
              value="Search"
            />
          </form>
        </div>
      </section>
      <section className="p-2 md:p-4 lg:p-8 xl:p-16">
        <h2 className="mb-8 text-2xl font-bold text-center text-slate-800 font-heading">
          Recently Added Movies
        </h2>
        <div className="container flex flex-wrap justify-center gap-4 mx-auto">
          {props.movies.map(movie => (
            <div className="flex flex-col items-center flex-grow p-2 bg-white border rounded-md lg:p-4 border-slate-300">
              <h3 className="text-center text-slate-800 font-heading">
                {movie.title}
              </h3>
              <p className="text-sm text-slate-500">
                {movie.quality} Quality | Duration {movie.duration}
              </p>
              <p className="text-xs text-rose-500">Rating {movie.rating}</p>
              <ul className="flex flex-wrap items-center justify-center gap-2 my-4">
                {movie.genre.map(name => (
                  <li
                    key={name}
                    className="px-3 py-2 text-xs transition-colors rounded-full cursor-pointer bg-rose-100 hover:bg-rose-200 text-rose-500 hover:text-rose-700">
                    {name}
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-center gap-4">
                <a
                  className="text-xs font-bold uppercase transition-colors cursor-pointer text-rose-500 hover:text-rose-700"
                  href={movie.trailer}>
                  Check Trailer
                </a>
                <a
                  className="p-2 text-xs font-bold uppercase transition-colors rounded-md bg-rose-500 text-rose-50 hover:bg-rose-700 hover:text-white"
                  href={movie.watch}>
                  Watch Movie
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  )
}

export default Home
