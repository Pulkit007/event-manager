import axios from "axios";

const api = axios.create({
    baseURL: 'https://calm-island-56078.herokuapp.com/api',
});

export const createEvent = payload=> api.post("/event",payload);
export const getEvents = ()=>api.get("/event");