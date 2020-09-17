const api_key = "0c3dffc6b1bf5b02a132f5d8660fb866";

const requests = {
  fetchTrending: `/trending/all/day?api_key=${api_key}`,
  fetchNetflixOriginal: `/discover/tv?api_key=${api_key}&with_networks=213`,
  fetchTopRated: `movie/top_rated?api_key=${api_key}`,
  fetchAction: `/discover/movie?api_key=${api_key}&with_genres=28`,
  fetchComedy: `/discover/movie?api_key=${api_key}&with_genres=35`,
  fetchHorror: `/discover/movie?api_key=${api_key}&with_genres=27`,
  fetchRomance: `/discover/movie?api_key=${api_key}&with_genres=10749`,
  fetchDocumentary: `/discover/movie?api_key=${api_key}&with_genres=99`,
};

export default requests;
