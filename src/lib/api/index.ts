import axios from 'axios';
import * as env from "$env/static/public";

console.log("??env", env)

const api = axios.create({
    baseURL: 'https://xuxin-server.deno.dev',
    timeout: 5000,
});

export default api;
