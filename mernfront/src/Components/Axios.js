import axios from "axios";

const Axios = axios.create({
  baseUrl: "https://recruitmentmernstack.herokuapp.com",
});

export default Axios;
