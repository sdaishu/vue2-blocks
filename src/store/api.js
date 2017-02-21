import axios from 'axios'
export function fetch (url) {
  return new Promise((resolve, reject) => {
    axios.get(url)
      .then(response => {
        resolve(response.data)
      })
  })
}

export function fetchData (url) {
  return fetch(`${url}`)
}
