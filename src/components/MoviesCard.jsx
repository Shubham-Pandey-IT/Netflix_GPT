import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MoviesCard = ({IMG_PATH}) => {
  return (
    <div className='w-48'>
        <img src={IMG_CDN_URL+IMG_PATH} alt="movies"/>
    </div>
  )
}

export default MoviesCard