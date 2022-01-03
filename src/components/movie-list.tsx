import type { Movie } from '~/services/movie'

type MovieListProps = {
  movies: Movie[] | undefined
}

export const MovieList = (props: MovieListProps) => {
  // Display error if no movies props or it has zero length
  if (!props.movies || props.movies.length === 0) {
    return (
      <div className="w-full p-4 text-center text-red-500 bg-red-100 border border-red-300 rounded-md">
        There is no movies to display
      </div>
    )
  }

  // Display movies if no errors
  return (
    <ul className="flex flex-col">
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
                <span
                  key={name}
                  className="px-2 py-1 text-xs rounded-full text-rose-500 bg-rose-100">
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
            <span className="text-sm text-slate-800">{movie.duration}</span>
          </div>
          <div className="flex flex-col w-1/3 lg:w-1/12">
            <span className="text-xs font-bold tracking-wider text-rose-500">
              Quality
            </span>
            <span className="text-sm text-slate-800">{movie.quality}</span>
          </div>
          <div className="flex flex-col w-full lg:w-3/12">
            <span className="text-xs font-bold tracking-wider text-rose-500">
              Action
            </span>
            <span className="flex items-center gap-2 mt-2">
              <a
                href={movie.trailer}
                target="_blank"
                rel="noreferrer"
                className="p-2 text-xs font-bold uppercase transition-colors bg-white border rounded-md cursor-pointer text-rose-500 hover:text-rose-700 border-rose-500">
                Check Trailer
              </a>
              <a
                href={movie.watch}
                target="_blank"
                rel="noreferrer"
                className="p-2 text-xs font-bold text-white uppercase transition-colors rounded-md cursor-pointer bg-rose-500 hover:bg-rose-700">
                Watch Movie
              </a>
            </span>
          </div>
        </li>
      ))}
    </ul>
  )
}
