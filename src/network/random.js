import axios from './axios'

export function getRandom(sort,format) {
  return axios({
    params: {
      sort,
      format
    }
  })
}