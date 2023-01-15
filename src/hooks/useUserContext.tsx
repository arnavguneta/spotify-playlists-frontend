import { useContext } from 'react';
import { UserCtx } from '../context/UserContext';

export function useUserContext() {
    return useContext(UserCtx);
}

