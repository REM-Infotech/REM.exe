interface AuthState {
    token?: string | null, 
    setToken: (token: string | null) => void,
    user?: User | null,
    setUser: (user: User | null) => void,
    logout: () => void
}