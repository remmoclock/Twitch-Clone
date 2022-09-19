import axios from "axios";

let api = axios.create({
  headers: {
    "Client-ID": "cmmxib74oxgkshq02lekbgq1lpsnx8",
    "Authorization": "Bearer vqgkdwyj04yrlhvtptan6w5iu6mxvt",
  },
});

// REDIRECT = "http://localhost:3000/"
// REDIRECT = "https://127.0.0.1:3000/
// REDIRECT = "https://remmo-twitch.netlify.app/"

// Ouvrir en navigation obtenir le ID a ajouter au lien suivant pour avoir le bearer auth
//  LIEN AUTH = https://id.twitch.tv/oauth2/authorize?client_id=cmmxib74oxgkshq02lekbgq1lpsnx8&redirect_uri=https://127.0.0.1:3000/&response_type=token

export default api;
