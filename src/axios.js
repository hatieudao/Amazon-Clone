import axios from "axios";

const instance = axios.create({
    baseURL: 'https://amazon-fake-api1.herokuapp.com/'
});


export default instance;