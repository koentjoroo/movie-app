import dummy from './dummy.json'

export type Movie = {
  title: string
  genre: string[]
  rating?: string
  duration: string
  quality: string
  trailer?: string
  watch?: string
}

export const getLatestMovies = async (): Promise<Movie[]> => {
  const movies = dummy.data.slice(0, 10)
  return movies
}

export const getAllMovies = async (): Promise<Movie[]> => {
  const movies = dummy.data
  return movies
}

export const searchMovie = async (query: string): Promise<Movie[] | null> => {
  console.log('Your query is', query)
  const movies = dummy.data.slice(0, 5)
  return movies
}
