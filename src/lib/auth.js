import { auth } from 'firebase';
import { createUser } from './db';
import React, { useState, useEffect, useContext, createContext } from 'react';
import firebase from './firebase';

const authContext = createContext();

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const [user, setUser] = useState(null);

  const handleUser = (rawUser) => {
    if (rawUser) {
      const user = formatUser(rawUser);
      createUser(user.uid, user);
      setUser(user);
      return user;
    } else {
      setUser(false);
      return false;
    }
  };

  function signinWithGitHub() {
    return firebase
      .auth()
      .signInWithRedirect(new firebase.auth.GithubAuthProvider())
      .then((response) => handleUser(response.user));
  }

  function signinWithGoogle() {
    return firebase
      .auth()
      .signInWithRedirect(new firebase.auth.GoogleAuthProvider())
      .then((response) => handleUser(response.user));
  }

  function signout() {
    return firebase
      .auth()
      .signOut()
      .then(() => handleUser(false));
  }

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(handleUser);

    return () => unsubscribe;
  }, []);

  return {
    user,
    signinWithGitHub,
    signinWithGoogle,
    signout,
  };
}

function formatUser(user) {
  return {
    uid: user.uid,
    email: user.email,
    name: user.displayName,
    provider: user.providerData[0].providerId,
    photoUrl: user.photoURL,
  };
}
