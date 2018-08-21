import axios from 'axios'

export default class Movies {
    constructor () {
      axios.defaults.baseURL = 'http://localhost:3000/api/'
    }
  }
  
export const movies = new Movies()