import Vue from 'vue'

const mutations = {
  addList(state,info) {
    state.musicList.push(info)
    // console.log(state.musicList);
  }
}

export default mutations
