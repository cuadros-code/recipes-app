import axios from "axios"

const recipesApi = axios.create({
  baseURL: "https://api.spoonacular.com",
  params: {
    apiKey: 'a5166b19d42141c1ac6b54fcf751a11c'
  }
})

export default recipesApi