import axios from 'axios';
import { Res } from '../types/api';

axios.defaults.baseURL = 'https://remapi.anti-duhring.repl.co';

export const loginAction = async(
    token: string | null
) => {
    let res: Res = {
        data: {
            user: null,
            token: null
        },
        error: null
    }

    let headers = {
        token: token
    }

    await axios.post(`/users/auth`, null, { headers })
    .then(response => {
        res.data = response.data
    })
    .catch(e => {
        res.error = e.response?.data.message? e.response.data.message : e.message
    })

    return res  
}