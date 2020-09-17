import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import axios from "../axios";
import movieTrailer from "movie-trailer";
import "./row.css";

const baseUrl = "https://image.tmdb.org/t/p/original/";
const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);
  const [videoId, setVideoId] = useState("");
  useEffect(() => {
    async function getMovies() {
      const result = await axios.get(fetchUrl);
      setMovies(result.data.results);
      return result;
    }
    getMovies();
  }, [fetchUrl]);

  const opts = {
    height: "600",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const playTrailer = (movie) => {
    if (videoId) {
      setVideoId("");
    } else {
      movieTrailer(
        movie.original_name || movie.title || movie.origanl_title || "Catch"
      )
        .then((url) => {
          console.log(movie);
          console.log("url ", url);
          const urlParams = new URLSearchParams(new URL(url).search);
          setVideoId(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row-posters">
        {movies.map((movie) => (
          <img
            onClick={() => playTrailer(movie)}
            key={movie.id}
            className="row-poster"
            src={`${baseUrl}${movie.poster_path}`}
            alt={movie.name}
          />
        ))}
      </div>
      {videoId && <YouTube videoId={videoId} opts={opts} />}
    </div>
  );
};

export default Row;
