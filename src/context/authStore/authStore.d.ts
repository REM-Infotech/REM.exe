interface AuthState {
    token?: string | null, 
    setToken: (token: string | null) => void,
    user?: User | null,
    setUser: (user: User | null) => void,
    expTokenDate: Date | null,
    setExpTokenDate: (date: Date) => void,
    logout: () => void
}