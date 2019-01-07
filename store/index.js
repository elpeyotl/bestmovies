export const state = () => ({
  genres: []
})

export const mutations = {
  SET_GENRES(state, genres) {
    state.genres = genres
  }
}

export const actions = {
  async nuxtServerInit({ commit }, { $axios }) {
    //get genres
    const data = await $axios.$get(
      'https://api.themoviedb.org/3/genre/movie/list?api_key=bdae388fa0f2be4b82cd430613ebbdf5'
    )
    const genres = [{ name: 'Top rated' }, ...data.genres]
    commit('SET_GENRES', genres)
  }
}
