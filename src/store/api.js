import axios from 'axios'
axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? 'https://api3.yunmodel.com' : 'http://v3.yunmodel.com'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
export function fetch (url, requestClass, data) {
  return new Promise((resolve, reject) => {
    if (requestClass === 'post') {
      axios.post(url, data)
        .then(response => {
          resolve(response.data)
        })
    } else {
      axios.get(url)
        .then(response => {
          resolve(response.data)
        })
    }
  })
}

export function fetchData (data) {
  return fetch('modelCardList', 'post', data)
}
