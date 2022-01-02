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
