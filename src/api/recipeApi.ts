import axios from "axios"

const recipesApi = axios.create({
  baseURL: "https://api.spoonacular.com",
  params: {
    apiKey: process.env.REACT_APP_API_KEY
  }
})

export default recipesApi