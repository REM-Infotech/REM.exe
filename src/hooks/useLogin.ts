import { useEffect } from 'react';
import { Res } from '../types/api';
import { loginAction } from '../service/api';
import useAuthStore from '../context/authStore';

type Login = (
    token: string | null
) => Promise<Res>

type UseLogin = () => Login

const useLogin: UseLogin = () => {
    const { setToken, setUser } = useAuthStore(state => ({ setToken: state.setToken, setUser: state.setUser }))

    const login: Login = async(token) => {
        const data = await loginAction(token)

        if(!data.error) {
            setToken(data.data.token)
            setUser(data.data.user)
        }
        return data
    }

    return login
}

export default useLogin;