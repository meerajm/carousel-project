import React, { useState, useRef } from "react";
import "./App.css";
import "./modal.css";
import Modal from "./Modal";
import { Link } from "@reach/router";

function App() {
  const [photos, setPhotos] = useState([]);
  const [photosName, setPhotosName] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [isPhotoAvailable, setIsPhotoAvailable] = useState(true);

  function getUrl(photosName) {
    if (!photosName) {
      document.getElementById("error").innerHTML =
        "Please enter a search text.";
    } else {
      document.getElementById("error").style.visibility = "hidden";
      setLoading(true);
      fetch(
        "https://api.unsplash.com/search/photos/?client_id=O0PF3NorhgM3gfxgBhUTW0dHb0uqSZgi9h8XpoAt_2Q&per_page=5&extras=url_regular&query=" +
          photosName +
          "&format=json&nojsoncallback=1"
      ).then((res) =>
        res.json().then((data) => {
          console.log("data", data);
          var photoArray = data.results.map((pic) => {
            console.log(pic.urls.regular);
            return pic.urls.regular;
          });
          setTimeout(() => {
            setLoading(false);
          }, 2000);
          photoArray.length === 0
            ? setIsPhotoAvailable(false)
            : setIsPhotoAvailable(true);
          setPhotos(photoArray);
        })
      );
    }
  }
  function handlePhotoClick(i) {
    setCurrentPhotoIndex(i);
    setShowModal(true);
  }
  var allPhotos = photos.map((photo, i) => {
    return (
      <section key={i}>
        <img
          onClick={() => handlePhotoClick(i)}
          src={photo}
          alt="No photo available."
        />
      </section>
    );
  });

  return (
    <div className="App">
      <nav>
        <Link to="/" onClick={() => window.location.reload()}>
          <span
            style={{
              color: "brown",
              fontWeight: "bold",
              fontFamily: "-moz-initial",
              fontSize: "30px",
            }}
          >
            PhotoSearch
          </span>
        </Link>
      </nav>
      <header className="App-header">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            className="text-style"
            type="text"
            placeholder="Search for photos"
            value={photosName}
            onBlur={(e) => setPhotosName(e.target.value)}
            onChange={(e) => setPhotosName(e.target.value)}
          />
          <button
            onClick={() => {
              getUrl(photosName);
            }}
          >
            Search
          </button>
          <label className="error-style" id="error"></label>
        </form>
      </header>
      {loading ? (
        <div className="loading">
          <p>Loading...</p>
        </div>
      ) : (
        <div className="carousel">
          {showModal && (
            <Modal
              photoUrls={photos}
              currentPhotoIndex={currentPhotoIndex}
              setCurrentPhotoIndex={setCurrentPhotoIndex}
              setShowModal={setShowModal}
              showModal={showModal}
            />
          )}
          {allPhotos}
        </div>
      )}

      {!isPhotoAvailable && (
        <div className="error-style">
          Sorry, no photos available for this search.
        </div>
      )}
    </div>
  );
}

export default App;
