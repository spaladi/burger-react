import axios from "axios";

const instance = axios.create({
  baseURL: "https://burgerbuilder-react-f1a4f.firebaseio.com/"
});

export default instance;
