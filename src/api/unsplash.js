import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID H1JS5sfLYm6k4PmZjFgtdoUyVL8ZzkZj2BqttGUhwRU",
  },
});
