import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";

import { useAxiosSequre } from "../Hooks/useAxiosSecure";
import { auth } from "../firebase.config";

export const AuthContext = createContext(null);
export const AuthProvider = ({ children }) => {
  const [loading, setloading] = useState(true);
  const [user, setuser] = useState(null);
  const axiosSequre = useAxiosSequre();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = { email: userEmail };

      if (currentUser) {
        axiosSequre
          .post(`/jwt`, loggedUser)
          .then(() => {
            // console.log(res.data);
            setuser(currentUser);
            setloading(false);
          })
          .catch((err) => console.log(err));
      } else {
        axiosSequre
          .post(`/logout`, loggedUser)
          .then(() => {
            // console.log(res.data)
            setuser(null);
            setloading(false);
          })
          .catch((err) => console.log(err));
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const updateInfo = (username, photo) => {
    setloading(true);
    return updateProfile(auth.currentUser, {
      displayName: username,
      photoURL: photo,
    });
  };

  const createUser = (email, pass) => {
    setloading(true);
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  const logIn = (email, pass) => {
    setloading(true);
    return signInWithEmailAndPassword(auth, email, pass);
  };

  const logOut = () => {
    setloading(true);
    return signOut(auth);
  };

  const googleProvider = new GoogleAuthProvider();
  const googleLogIn = () => {
    setloading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const data = {
    loading,
    user,
    setuser,
    createUser,
    logIn,
    logOut,
    googleLogIn,

    updateInfo,
  };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};
AuthProvider.propTypes = {
  children: PropTypes.node,
};
