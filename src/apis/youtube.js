import axios from "axios";

// const KEY='AIzaSyA5l_oFQeqhySIl-Sz5gfmtynJWVYFF55I'
 
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3"
});
