import React from "react";
import Row from "./components/row";
import requests from "./request";
import "./App.css";
import Banner from "./components/banner";
import NavBar from "./components/NavBar";
function App() {
  return (
    <div className="app">
      <NavBar />
      <Banner />
      <Row title="Netfilix original" fetchUrl={requests.fetchNetflixOriginal} />
      <Row title="Trending now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedy} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorror} />
      <Row title="Action Movies" fetchUrl={requests.fetchAction} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentary} />
    </div>
  );
}

export default App;
