import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '727485743b4c441f98e058d4b32f1025'
    }
})