import React,{useState ,useEffect} from 'react'
import SrarSearch from './oneCard/MovieStar'
import StarSearch from './oneCard/StarSearch';

 const FilterFilm = ({searchFilm,searchRate}) => {
  
  
  const [searchName ,setSearchName] =useState('');
  const [inputRate,setInputRate] =useState(0);
    
        
      return (
       <div className="wrapper container-fluid contenedor text-center">
       <form className="needs-validation" noValidate>
        <div className="form-row">
          <h1>Let's Choose The Best</h1>
          <div className="col-md-4 mb-3">
            <label htmlFor="prenom"></label>
            <input
              type="text"
              className="form-control"
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
              placeholder="filter by name"
              required
            />
          </div>
        </div>
        <button
          className="btn btn-primary container mybtn"
          onClick={(e) => {
            e.preventDefault();
            searchFilm(searchName);
            setSearchName("")
          }}
          type="submit"
        >
          search
        </button>
      </form>
      <br/>
      <StarSearch searchRate ={searchRate} />
          
        </div>
    )
}

export default FilterFilm
