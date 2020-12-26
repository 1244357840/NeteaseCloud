import axios from './host'

export function getLyric(id) {
  return axios({
    url: '/lyric',
    params: {
      id
    }
  })
}

export function getId(keywords) {
  console.log(keywords);
  return axios({
    url:'/search',
    params: {
      keywords
    }
  })
}
