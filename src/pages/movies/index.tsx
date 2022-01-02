import { NextPage } from 'next'
import { PageLayout } from '~/components/layout'

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
          <ul className="flex flex-col rounded-md">
            {props.movies.map(movie => (
              <li
                key={movie.title}
                className="flex flex-wrap p-4 gap-y-2 even:bg-rose-50">
                <div className="flex flex-col w-full lg:w-3/12">
                  <span className="text-xs font-bold tracking-wider text-rose-500">
                    Title
                  </span>
                  <span className="text-sm text-slate-800">{movie.title}</span>
                </div>
                <div className="flex flex-col w-full lg:w-3/12">
                  <span className="text-xs font-bold tracking-wider text-rose-500">
                    Genre
                  </span>
                  <span className="flex flex-wrap items-center gap-2 mt-2">
                    {movie.genre.map(name => (
                      <span className="px-2 py-1 text-xs rounded-full text-rose-500 bg-rose-100">
                        {name}
                      </span>
                    ))}
                  </span>
                </div>
                <div className="flex flex-col w-1/3 lg:w-1/12">
                  <span className="text-xs font-bold tracking-wider text-rose-500">
                    Rating
                  </span>
                  <span className="text-sm text-slate-800">
                    {movie.rating || 'Unrated'}
                  </span>
                </div>
                <div className="flex flex-col w-1/3 lg:w-1/12">
                  <span className="text-xs font-bold tracking-wider text-rose-500">
                    Duration
                  </span>
                  <span className="text-sm text-slate-800">
                    {movie.duration}
                  </span>
                </div>
                <div className="flex flex-col w-1/3 lg:w-1/12">
                  <span className="text-xs font-bold tracking-wider text-rose-500">
                    Quality
                  </span>
                  <span className="text-sm text-slate-800">
                    {movie.quality}
                  </span>
                </div>
                <div className="flex flex-col w-full lg:w-3/12">
                  <span className="text-xs font-bold tracking-wider text-rose-500">
                    Action
                  </span>
                  <span className="flex items-center gap-2 mt-2">
                    <a
                      href={movie.trailer}
                      target="_blank"
                      className="p-2 text-xs font-bold uppercase transition-colors bg-white border rounded-md cursor-pointer text-rose-500 hover:text-rose-700 border-rose-500">
                      Check Trailer
                    </a>
                    <a
                      href={movie.watch}
                      target="_blank"
                      className="p-2 text-xs font-bold text-white uppercase transition-colors rounded-md cursor-pointer bg-rose-500 hover:bg-rose-700">
                      Watch Movie
                    </a>
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </PageLayout>
  )
}

export default BrowseMovies
