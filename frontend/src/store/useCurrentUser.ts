import axios from 'axios';
import { create } from 'zustand'

type User = {
    email: string,
    name: string,
}

type CurrentUserState = {
    currentUser: User | null,
    login: (email: string, name: string) => void;
    logout: () => void
}


export const useCurrentUser = create<CurrentUserState>((set) => ({
    currentUser: null,
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
        set((state) => ({
            ...state,
            currentUser: null
        }))
    }
}))
