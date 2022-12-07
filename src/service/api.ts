import axios from 'axios';
import { Res } from '../types/api';

axios.defaults.baseURL = 'https://remapi.anti-duhring.repl.co';

export const loginAction = async(
    token: string | null
) => {
    let res: Res = {
        data: {
            user: null,
            token: null,
            exp: 0
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

export const downloadBotAction = async(
    token: string | null
) => {
    let res: any = {
        data: null,
        error: null
    }

    let headers = {
        token: token
    }

    await axios.post(`/bots/download`, null, { headers })
    .then(response => {
        res.data = response.data
    })
    .catch(e => {
        res.error = e.response?.data.message? e.response.data.message : e.message
    })

    return res 

}

export const getAllBotsAction = async() => {
    let res: any = {
        data: null,
        error: null
    }

    await axios.get(`/bots`)
    .then(response => {
        res.data = response.data
    })
    .catch(e => {
        res.error = e.response?.data.message? e.response.data.message : e.message
    })

    return res 
}