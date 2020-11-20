import React, { useState } from "react";
import MovieCard from "./oneCard/MovieCard";




export default function MovieList({films,newfilms}) {
  
    return (
    <div className="container-fluid contenedor text-center">
      <div className="work">
        <h1 className="text-center ">Movies Bibliotheque</h1>
        <br/>
        <div className=" container text-center">
          {(newfilms.length) ? newfilms.map((el, i) => <MovieCard key={i} fiche={el} />) :films.map((el, i) => <MovieCard key={i} fiche={el} />)}
        </div>
      </div>
      
    </div>
  );
}
