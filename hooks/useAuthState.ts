import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

// useAuthState:戻り値の型
export type AuthState = {
  isSignedIn: boolean;
  isLoading: boolean;
  userId: string | undefined;
  userName: string | undefined;
  avatarUrl: string | undefined;
};
// useAuthState:戻り値の初期値
const INITIAL_AUTH_STATE: AuthState = {
  isSignedIn: false,
  isLoading: true,
  userId: undefined,
  userName: undefined,
  avatarUrl: undefined,
};
// ログイン状態取得
export const useAuthState = (): AuthState => {
  const [authState, setAuthState] = useState(INITIAL_AUTH_STATE);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), (user) => {
      if (user) {
        setAuthState({
          isSignedIn: true,
          isLoading: false,
          userId: user.uid,
          userName: user.displayName || undefined,
          avatarUrl: user.photoURL || undefined,
        });
      } else {
        setAuthState({ ...INITIAL_AUTH_STATE, isLoading: false });
      }
    });

    return () => unsubscribe();
  }, []);

  return authState;
};
