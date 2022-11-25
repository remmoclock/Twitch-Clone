import axios from "axios";

let api = axios.create({
  headers: {
    "Client-ID": process.env.REACT_APP_ID,
    "Authorization": process.env.REACT_APP_AUTH,
  },
});

// 64lv5wcxd955625qv1ttksa0w8vlli

// RAJOUTER LES ENVS VARIABLES DANS NETLIFY

// REDIRECT = "http://localhost:3000/"
// REDIRECT = "https://127.0.0.1:3000/
// REDIRECT = "https://remmo-twitch.netlify.app/"

// Ouvrir le lien  en navigation avec le ID obtenu depuis twitch et a ajouter au lien suivant pour avoir le bearer auth
//  LIEN AUTH = https://id.twitch.tv/oauth2/authorize?client_id=64lv5wcxd955625qv1ttksa0w8vlli&redirect_uri=https://127.0.0.1:3000/&response_type=token

export default api;
