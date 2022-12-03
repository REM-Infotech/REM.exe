import useAuthStore from "../context/authStore";

const useVerifyIfTokenIsExpired = () => {
    const { expTokenDate } = useAuthStore(state => ({ expTokenDate: state.expTokenDate }))

    const verify = () => {
        const dateNow = new Date().getTime();
        const expDate = new Date(expTokenDate).getTime();
    
        if(dateNow >= expDate) {
          const logoutButton = document.querySelector('#logout') as any;
          logoutButton.click();
        }
    }

    return verify
}

export default useVerifyIfTokenIsExpired;