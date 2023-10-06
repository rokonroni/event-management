import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import PropTypes from "prop-types";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const GoogleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});

  // google login
  const googleLogin = () => {
    return signInWithPopup(auth, GoogleProvider);
  };
  // Sign up with email and password
  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Sign in with email and password
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //Sign out
  const logOut = () => {
    return signOut(auth);
  };

  // Setup observer
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  // value of AuthContext
  const AuthInfo = {
    user,
    googleLogin,
    signUp,
    signIn,
    logOut,
  };

  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.node,
};
export default AuthProvider;
