import React,{useState} from 'react'
import { Button,Modal } from 'react-bootstrap'




export default function AddFilm({addMovie}) {
     
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [note, setNote] = useState("");
  const [link, setLink] = useState("");
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      
      <Button variant="primary" onClick={handleShow}>
        Add New Movie
      </Button>

      <Modal  size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title >Add new Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
       <div className="container-fluid contenedor text-center">
        <form className="needs-validation" noValidate>
        <div className="form-row">
          <div className="col-md-4 mb-3">
            <label htmlFor="prenom">type your movie here</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="title"
              required
            />
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="nom">put your image's linke here</label>
            <input
              type="text"
              className="form-control"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              placeholder="link"
              required
            />
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="pseudo">type the rate of the movie</label>
            <input
              type="text"
              className="form-control"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="rate"
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="col-md-6 mb-3">
            <label htmlFor="ville">type the description here</label>
            <input
              type="text"
              className="form-control"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              placeholder="description"
              required
            />
          </div>
        </div>
        </form>
        </div>
          </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" 
          onClick={(e) => {
            e.preventDefault();
            addMovie({
              picture: link,
              title: name,
              description: desc,
              rate: note,
            });
            handleClose()
            }}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      
    </>
  );


  /*  return (
      <div className="container-fluid contenedor text-center">
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
        
          className="btn btn-primary container mybtn"
          onClick={(e) => {
            e.preventDefault();
            addMovie({
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
        )*/
}
