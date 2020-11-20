import React ,{useState} from 'react'
import MovieList from './components/MovieList'
import './App.css';
import AddFilm from './components/AddFilm';
import FilterFilm from './components/FilterFilm';
import movies from './components/oneCard/InitialList' ;

function App() {
  
  const [films, setFilms] = useState(movies);
  const [newfilms ,setNewfilms] =useState ([]);
  
  function addMovie(myfilm) {
    setFilms([...films, myfilm]);
  }

  function searchFilm(film) {
    const res = films.filter( (el) => el.title.toLowerCase().includes(film)) ;
    if (res.length)
    return setNewfilms(res)
    else
    alert(`${film} doesn't exist`)
    setNewfilms([])
      }
 
    function searchRate (ind)  {
     const res =films.filter(el => el.rate >= ind)
     if (res.length)
    return setNewfilms(res)
    else
    alert(`${ind} doesn't exist`)
    setNewfilms([])
    }

  return (
    <div className="container-fluid contenedor text-center">
    <FilterFilm searchFilm={searchFilm} searchRate= {searchRate} />
    <MovieList films ={films} newfilms={newfilms}/>
    <AddFilm  addMovie ={addMovie} />
    
    
    </div>
  );
}

export default App
