import create from 'zustand';
import {devtools, persist} from 'zustand/middleware';
import { User } from '../../types/api';

const authStore = (set: any) => <AuthState>({
    token: null,
    user: null,
    setToken: (token: string | null) => set((state: AuthState) => ({ token: token })),
    setUser: (user: User | null) => set((state: AuthState) => ({ user: user })),
    logout: () => set({user: null, token: null})
})

const useAuthStore = create(
    devtools(
        persist<AuthState>(authStore, {
            name: 'auth'
        })
    )
)

export default useAuthStore;