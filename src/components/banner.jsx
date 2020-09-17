import React, { useEffect, useState } from "react";
import axios from "../axios";
import requests from "../request";
import "./banner.css";
const Banner = () => {
  const [movie, setMovie] = useState([]);
  const [delay, setDelay] = useState(0);
  useEffect(() => {
    const slider = setInterval(() => {
      async function fetchData() {
        const request = await axios.get(requests.fetchNetflixOriginal);
        const movie = request.data.results;

        setMovie(movie[Math.floor(Math.random() * movie.length)]);
        console.log(Math.floor(Math.random() * movie.length));
      }
      fetchData();
      setDelay(10000);
    }, delay);
    return () => {
      clearInterval(slider);
    };
  }, [delay]);
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "...." : str;
  }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "",
      }}
    >
      {/* ttile */}
      <h1 className="banner-title">
        {movie?.name || movie?.title || movie?.original_name}{" "}
      </h1>
      {/* 2 buttons */}
      <div className="banner-contents">
        <button className="banner-button">Play</button>
        <button className="banner-button">My List</button>
        <h1 className="banner-description">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="banner-fadeBottom"></div>
    </header>
  );
};

export default Banner;
