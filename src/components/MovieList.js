import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const movies = [
  {
    picture:
      "https://fr.web.img4.acsta.net/medias/nmedia/18/35/57/73/18660716.jpg",
    title: "Godfather",
    description:
      "It is the first installment in The Godfather trilogy. The story, spanning from 1945 to 1955, chronicles the Corleone family under patriarch Vito Corleone (Brando), focusing on the transformation of one of his sons, Michael Corleone (Pacino), from reluctant family outsider to ruthless mafia boss.",
    rate: "9,2",
  },
  {
    picture:
      "https://www.ecranlarge.com/media/cache/1600x1200/uploads/image/001/121/mohx8jgzideamlj1cqdzclyhmry-823.jpg",
    title: "Seven",
    description:
      "The film tells the story of David Mills (Pitt), a detective who partners with the retiring William Somerset (Freeman) to track down a serial killer (Spacey) who uses the seven deadly sins as a motif in his murders.",
    rate: "8,6",
  },
  {
    picture:
      "https://fr.web.img2.acsta.net/medias/nmedia/00/02/52/22/papillon.jpg",
    title: "Papillon",
    description:
      'Henri Charrière (Steve McQueen), a safecracker nicknamed "Papillon" because of the butterfly tattoo on his chest, is wrongly convicted of murdering a pimp. In 1933 he is sentenced to life imprisonment within the penal system in French Guiana',
    rate: "8",
  },
  {
    picture:
      "https://fr.web.img2.acsta.net/medias/nmedia/00/02/29/04/69199504_af.jpg",
    title: "The Usual Suspects",
    description:
      'It stars Stephen Baldwin, Gabriel Byrne, Benicio del Toro, Kevin Pollak, Chazz Palminteri, Pete Postlethwaite, and Kevin Spacey. The plot follows the interrogation of Roger "Verbal" Kint, a small-time con man, who is one of only two survivors of a massacre and fire on a ship docked at the Port of Los Angeles.',
    rate: "8,5",
  },
];

export default function MovieList() {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [note, setNote] = useState("");
  const [link, setLink] = useState("");
  const [films, setFilms] = useState(movies);
  

  const [searchName, setSearchName] = useState("");
  const [searchRate, setSearchRate] = useState("");
  const [srch, setSrch] = useState([]);

  const addFilm = (myfilm) => {
        setFilms([...films, myfilm]);
  };

  /*useEffect(() => {
        addFilm()
          }  ,[]);*/

  function searchFilm() {
    setSrch(
      films.filter(
        (el) =>
          el.title.toLowerCase().includes(searchName) && el.rate.includes(searchRate)
      )
    );
  }

  return (
    <div className="container-fluid contenedor text-center">
      <form className="needs-validation" noValidate>
        <div className="form-row">
          <h1>Try to filter our bib</h1>
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
          <div className="col-md-4 mb-3">
            <label htmlFor="nom"></label>
            <input
              type="text"
              className="form-control"
              value={searchRate}
              onChange={(e) => setSearchRate(e.target.value)}
              placeholder="filter by rate"
              required
            />
          </div>
        </div>
        <button
          className="btn btn-primary"
          onClick={(e) => {
            e.preventDefault();
            searchFilm();
          }}
          type="submit"
        >
          search
        </button>
      </form>
      <div className="work">
        <h1 className="text-center">Movies Bibliotheque</h1>
        <div className=" container text-center">
          {srch.length >= 1
            ? srch.map((el, i) => <MovieCard key={i} fiche={el} />)
            : films.map((el, i) => <MovieCard key={i} fiche={el} />)}
        </div>
      </div>
      <form className="needs-validation" noValidate>
        <div className="form-row">
          <div className="col-md-4 mb-3">
            <label htmlFor="prenom">Movie's title</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="type your movie here"
              required
            />
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="nom">Movie's image</label>
            <input
              type="text"
              className="form-control"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              placeholder="put your image's linke here"
              required
            />
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="pseudo">Movie's rate</label>
            <input
              type="text"
              className="form-control"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="type the rate of the movie"
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="col-md-6 mb-3">
            <label htmlFor="ville">Movie's description</label>
            <input
              type="text"
              className="form-control"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              placeholder="type the description here"
              required
            />
          </div>
        </div>
        <button
          className="btn btn-primary"
          onClick={(e) => {
            e.preventDefault();
            addFilm({
              picture: link,
              title: name,
              description: desc,
              rate: note,
            });
          }}
          type="submit"
        >
          Add new movie
        </button>
      </form>
    </div>
  );
}
