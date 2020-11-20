import React from 'react'
import MovieStar from './MovieStar'


const MovieCard = ({fiche : {picture ,title ,description,rate}}) => {
     const add = () => {} ;
    return (
    
          <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 container_foto ">
            <div className="ver_mas text-center">
              <span className="lnr lnr-eye">streaming</span>
            </div>
            <article className="text-left">
              <h2>{title}</h2>
              <h4>{description} </h4>
              <MovieStar rating ={rate} add={add}   />
            </article>
            <img src={picture} alt="" />
          </div>
        
          )
}




export default MovieCard
