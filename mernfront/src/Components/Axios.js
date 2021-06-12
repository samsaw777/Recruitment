import axios from "axios";

const Axios = axios.create({
  baseUrl: "http://localhost:9000",
});

export default Axios;
