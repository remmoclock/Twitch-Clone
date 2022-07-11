import axios from "axios"

let api = axios.create({
  headers: {
    "Client-ID": "o6qbhh9eliz9tmeqf1ibdqfmgpss86",
    Authorization: "Bearer rk5pado0fi4a1rcp9wr9sxtvuodmma", // netlify
  },
})


// REDIRECT = "http://localhost:3000/"
// REDIRECT = "https://127.0.0.1:3000/
// REDIRECT = "https://remmo-twitch.netlify.app/"
 

//  LIEN AUTH = https://id.twitch.tv/oauth2/authorize?client_id=o6qbhh9eliz9tmeqf1ibdqfmgpss86&redirect_uri=https://remmo-twitch.netlify.app/&response_type=token
//  LIEN AUTH = https://id.twitch.tv/oauth2/authorize?client_id=o6qbhh9eliz9tmeqf1ibdqfmgpss86&redirect_uri=http://127.0.0.1/&response_type=token

export default api
