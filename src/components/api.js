import axios from "axios"

let api = axios.create({
  headers: {
    "Client-ID": "yjflf1qawjyhb8llxq1u3bkc9bk4lv",
    Authorization: "Bearer d0n2v5v239kh1y12xbjgaxw68w3t1g", // netlify
    // Authorization: "Bearer z4ci2m5dedmn3f7x06sz99aa291vt1", // Localhost3000
  },
})

// CLIENT_ID = yjflf1qawjyhb8llxq1u3bkc9bk4lv
// REDIRECT = "http://localhost:3000/"

//  LIEN AUTH = https://id.twitch.tv/oauth2/authorize?client_id=yjflf1qawjyhb8llxq1u3bkc9bk4lv&redirect_uri=https://remmo-twitch.netlify.app/&response_type=token

export default api