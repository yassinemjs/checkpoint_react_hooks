import React from 'react'


const MovieCard = ({fiche : {picture ,title ,description,rate}}) => {
    
    return (
    
          <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 container_foto ">
            <div className="ver_mas text-center">
              <span className="lnr lnr-eye">streaming</span>
            </div>
            <article className="text-left">
              <h2>{title}</h2>
              <h4>{description} </h4>
              <h4>rate:{rate}</h4>
            </article>
            <img src={picture} alt="" />
          </div>
        
          )
}




export default MovieCard
