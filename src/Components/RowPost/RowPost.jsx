import './RowPost.css'
import {useEffect, useState} from 'react'
import axios from '../../axios'
import {API_KEY, imageUrl} from '../../constants/constants'
import PropTypes from 'prop-types';
import YouTube from 'react-youtube';

function RowPost(props) {

  const [movies, setMovies] = useState([])
  const [urlId, setUrlId] = useState('')

  useEffect(() => {
    axios.get(props.url).then((response)=>{
      setMovies(response.data.results)
    })
    // .catch(err=>{
    //   alert('Network Error',err)
    // })
  },)

  const opts = {
    height: '390',
    width: '1250',
    playerVars: {
      autoplay: 1,
    },
  }

  const handleMovie = (id) => {
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
        if(response.data.results.length!==0) {
            setUrlId(response.data.results[0])
        }
    })
  }
  
  return (
    <div className="row">
        <h4 className='row_title'>{props.title}</h4>
        <div className="posters">
        {movies.map((movie)=>
          <img onClick={()=>handleMovie(movie.id)} key={movie.id} className='poster' src={`${imageUrl + movie.backdrop_path}`} alt="poster" />
        )}
        </div>
        <div>
        { urlId && <YouTube opts={opts} videoId={urlId.key}/>}
        </div>
    </div>
  )
}

RowPost.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default RowPost