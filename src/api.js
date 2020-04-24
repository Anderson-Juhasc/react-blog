import axios from 'axios';

const apiPosts = 'http://www.mocky.io/v2/5be5e3fa2f000082000fc3f8'
    , apiAuthors = 'http://www.mocky.io/v2/5be5e3ae2f00005b000fc3f6'
    , getPosts = () => axios.get(apiPosts)
    , getAuthors = () => axios.get(apiAuthors)

export { getPosts, getAuthors }
