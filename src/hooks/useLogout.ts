import { useNavigate } from 'react-router-dom';
import useAuthStore from '../context/authStore';

const useLogout = () => {
    const { logout } = useAuthStore(state => ({ logout: state.logout }))
    const navigate = useNavigate();

    const logoutAction = async() => {
        logout()
        navigate('/')
    }

    return logoutAction
}

export default useLogout;