import axios from 'axios'

const BASE_URL = 'https://restcountries.eu/rest/v2'

const createAxiosClient = timeout => {
    const client = axios.create({
        timeout,
    })

    return {
        get: url => client.get(url),
        post: (url, data) => client.post(url, data),
    }
}

const createApi = baseUrl => client => ({
    getAllCountries: () => client.get(`${baseUrl}/all`),
})

const axiosClient = createAxiosClient(1000)

export default createApi(BASE_URL)(axiosClient)
