import React, { createContext, useContext, useEffect, useState } from 'react';

import { User } from 'typings/global';
import UserService from 'services/user';
import firebase from 'libs/firebase';
import { useRouter } from 'next/router';

interface AuthContextInterface {
  user: User | null;
  loading: boolean;
  signInWithGitHub: (redirect?: string) => any;
  signInWithGoogle: (redirect?: string) => any;
  signOut: () => any;
}

const AuthContext = createContext<AuthContextInterface>(
  {} as AuthContextInterface
);

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider: React.FC = ({ children }) => {
  const auth = useProvideAuth();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

const useProvideAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleUser = async (rawUser: firebase.User | null) => {
    if (rawUser) {
      const user = await formatUser(rawUser);
      const { token, ...userWithoutToken } = user;
      UserService.create(userWithoutToken);
      setUser(user);
      setLoading(false);
      return user;
    } else {
      setUser(null);
      setLoading(false);
      return false;
    }
  };

  const signInWithGitHub = (redirect?: string) => {
    setLoading(true);
    return firebase
      .auth()
      .signInWithPopup(new firebase.auth.GithubAuthProvider())
      .then((response) => {
        handleUser(response.user);
        if (redirect) {
          router.push(redirect);
        }
      });
  };

  const signInWithGoogle = (redirect?: string) => {
    setLoading(true);
    return firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((response) => {
        handleUser(response.user);
        if (redirect) {
          router.push(redirect);
        }
      });
  };

  const signOut = () => {
    router.push('/');
    return firebase
      .auth()
      .signOut()
      .then(() => handleUser(null));
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(handleUser);

    return () => unsubscribe();
  }, []);

  return { user, loading, signInWithGitHub, signInWithGoogle, signOut };
};

const formatUser = async (user: firebase.User): Promise<User> => {
  const token = await user.getIdToken();

  return {
    uid: user.uid,
    email: user.email,
    name: user.displayName,
    provider: user.providerData[0]?.providerId,
    avatar: user.photoURL,
    token,
  };
};
