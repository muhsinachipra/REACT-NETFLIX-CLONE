import {API_KEY} from './constants/constants'

export const banner = `trending/all/day?api_key=${API_KEY}&language=en-US`

export const originals = `trending/all/week?api_key=${API_KEY}&language=en-US`

export const actions = `discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=28`
export const adventure = `discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=12`
export const animation = `discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=16`
export const comedy = `discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=35`
export const crime = `discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=80`
export const documentary = `discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=99`
export const drama = `discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=18`
export const family = `discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=10751`
export const fantasy = `discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=14`
export const history = `discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=36`
export const horror = `discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=27`
export const romance = `discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=10749`
export const war = `discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=10752`
export const thriller = `discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=53`
