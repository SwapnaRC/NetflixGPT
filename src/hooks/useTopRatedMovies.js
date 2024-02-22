import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { addTopRatedMovies } from "../utils/movieSlice"
import { API_OPTIONS } from "../utils/constants"

const useTopRatedMovies = () => {
    const dispatch = useDispatch()
    
    const getTopRatedMovies = async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=hi-IN&page=1', API_OPTIONS)
      const response = await data.json()
      dispatch(addTopRatedMovies(response.results))
    }
  
    useEffect(() => {
      getTopRatedMovies()
    }, [])

}
export default useTopRatedMovies