import axios from "axios";

const api = axios.create({
	baseURL: "https://radiant-dusktg.herokuapp.com",
});

export default api;
