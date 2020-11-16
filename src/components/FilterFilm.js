import React,{useState ,useEffect} from 'react'

 const FilterFilm = () => {
  
  const [searchName ,setSearchName] =useState('');
  const [searchRate,setSearchRate] =useState('');
  



    return (
        <div>
        <form className="needs-validation" noValidate>
        <div className="form-row">
          <h1>Try to filter our bib</h1>
          <div className="col-md-4 mb-3">
            <label htmlFor="prenom"></label>
            <input type="text" className="form-control" value={searchName} onChange ={(e) => setSearchName(e.target.value)} placeholder="filter by name" required />
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="nom"></label>
            <input type="text" className="form-control" value={searchRate} onChange ={(e) => setSearchRate(e.target.value)} placeholder="filter by rate" required />
          </div>
          </div>>
          </form>
          
        </div>
    )
}

export default FilterFilm
