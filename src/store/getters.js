const getters = {
  getList(state) {
    return state.musicList.slice(-50)
  }
}

export default getters
