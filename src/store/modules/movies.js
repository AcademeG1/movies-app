import axios from "@/plugins/axios";
import imdb_top250 from "@/store/mock/imdb_top250";
import mutations from "@/store/mutations";

function serializeResponce(movies) {
  console.log(movies);
  return movies.reduce((acc, movie) => {
    acc[movie.imdbID] = movie;
    return acc;
  }, {});
}

const { MOVIES } = mutations;

const moviesStore = {
  namespaced: true,
  state: {
    moviesIds: imdb_top250,
    currentPage: 1,
    moviesPerPage: 12,
    movies: {},
  },
  getters: {
    sliceIds:
      ({ moviesIds }) =>
      (from, to) =>
        moviesIds.slice(from, to),
    currentPage: ({ currentPage }) => currentPage,
    moviesPerPage: ({ moviesPerPage }) => moviesPerPage,
  },
  mutations: {
    [MOVIES](state, value) {
      state.movies = value;
    },
  },
  actions: {
    async fetchMovies({ getters, commit }) {
      const { sliceIds, moviesPerPage, currentPage } = getters;
      const from = moviesPerPage * currentPage - moviesPerPage;
      const to = moviesPerPage * currentPage;
      const moviesToFetch = sliceIds(from, to);

      const request = moviesToFetch.map((id) => axios.get(`/?i=${id}`));
      const response = await Promise.all(request);

      const movies = serializeResponce(response);
      commit(MOVIES, movies);
      // console.log(movies);
    },
  },
};

export default moviesStore;
