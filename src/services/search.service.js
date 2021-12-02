import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://127.0.0.1:8000/api/";

const getFillterData = () => {
  return axios.get(API_URL + "all");
};


export default {

    getFillterData,
};