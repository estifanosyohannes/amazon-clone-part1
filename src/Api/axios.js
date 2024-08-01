import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://amazon-api-deploy-k9m3.onrender.com",
});

export { axiosInstance };
