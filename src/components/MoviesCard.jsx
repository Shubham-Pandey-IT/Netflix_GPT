import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MoviesCard = ({IMG_PATH}) => {
  if (!IMG_PATH) return null;
  return (
    <div className='w-48'>
        <img src={IMG_CDN_URL+IMG_PATH} alt="Nhi hai iska Poster"/>
    </div>
  )
}

export default MoviesCard