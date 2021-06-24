import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID xssC-DKI-UJwc86oPylMFWzoSYbBdPjYf9FQWJfTg9Q'
    }
})