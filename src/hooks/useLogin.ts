import { Res } from '../types/api';
import { loginAction } from '../service/api';
import useAuthStore from '../context/authStore';

type Login = (
    token: string | null
) => Promise<Res>

type UseLogin = () => Login

const useLogin: UseLogin = () => {
    const { 
        setToken, 
        setUser, 
        setExpTokenDate 
    } = useAuthStore(state => ({ 
        setToken: state.setToken, 
        setUser: state.setUser ,
        setExpTokenDate: state.setExpTokenDate
    }))

    const login: Login = async(token) => {
        let data = await loginAction(token)

        if(!data.error) {
            const expDate: number = data.data.exp;
            let expDateInUTC = new Date(0);
            expDateInUTC.setUTCSeconds(expDate);

            setExpTokenDate(expDateInUTC)
            setToken(data.data.token)
            setUser(data.data.user)
        }
        return data
    }

    return login
}

export default useLogin;