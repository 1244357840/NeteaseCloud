const getters = {
  getList(state) {
    return state.musicList.slice(-50)
  },
  getLyric(state) {
    return state.lyricString
  }
}

export default getters
