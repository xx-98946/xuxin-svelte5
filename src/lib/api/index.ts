const baseURL = 'https://xuxin-server.deno.dev';

function api(input: string, init?: RequestInit | undefined) {
    return fetch(baseURL + input, init);
}


export default api;
