import axios from 'axios';
import { create } from 'zustand'

type User = {
    email: string,
    name: string,
}

type CurrentUserState = {
    currentUser: User | "",
    loading: boolean,
    handleLoading: () => void,
    login: (email: string, name: string) => void;
    logout: () => void
}


export const useCurrentUser = create<CurrentUserState>((set) => ({
    currentUser: "",
    loading: true,
    handleLoading: () => {
        set((state) => ({ ...state, loading: !state.loading }))
    },
    login: (email, name) => {
        set((state) => ({
            ...state,
            currentUser: {
                email,
                name,
            }
        }))
    },
    logout: () => {
        localStorage.removeItem('newtoken')
        set((state) => ({
            ...state,
            loading: false,
            currentUser: "",
        }))
    }
}))
