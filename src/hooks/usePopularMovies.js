import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { addPopularMovies } from "../utils/movieSlice"
import { API_OPTIONS } from "../utils/constants"

const usePopularMovies = () => {
    const dispatch = useDispatch()
    
    const getPopularMovies = async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS)
      const response = await data.json()
      dispatch(addPopularMovies(response.results))
    }
  
    useEffect(() => {
      getPopularMovies()
    }, [])

}
export default usePopularMovies