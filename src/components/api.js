import axios from "axios"

let api = axios.create({
  headers: {
    "Client-ID": "yjflf1qawjyhb8llxq1u3bkc9bk4lv",
    "Authorization": "Bearer 96j63bl1kgyy6tbvnta0bamn0ntsth"
  },
})

// CLIENT_ID = yjflf1qawjyhb8llxq1u3bkc9bk4lv
// REDIRECT = "http://localhost:3000/"

//  LIEN AUTH = https://id.twitch.tv/oauth2/authorize?client_id=yjflf1qawjyhb8llxq1u3bkc9bk4lv&redirect_uri=http://localhost:3000/&response_type=token

export default api
