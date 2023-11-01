// URL personalizada para o db.json, para evitar conflito com a url da aplicação React.
import axios from "axios";

export const Api = () => {
    return axios.create({
        baseURL: 'http://localhost:3333'
    });
};