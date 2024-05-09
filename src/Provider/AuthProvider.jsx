import {
  GithubAuthProvider,
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
import { auth } from "../firebase.config";
import { useAxiosSequre } from "../Hooks/useAxiosSecure";

export const AuthContext = createContext(null);
export const AuthProvider = ({ children }) => {
  const [loading, setloading] = useState(true);
  const [user, setuser] = useState(null);
  const axiosSequre = useAxiosSequre();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = { email: userEmail };
      setuser(currentUser);
      setloading(false);
      if (currentUser) {
        axiosSequre
          .post(`/jwt`, loggedUser)
          .then((res) => {
            console.log(res.data);
          })
          .catch((err) => console.log(err));
      } else {
        axiosSequre
          .post(`/logout`, loggedUser)
          .then((res) => console.log(res.data))
          .catch((err) => console.log(err));
      }
    });
    return () => {
      return unsubscribe();
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
  const githubLogin = () => {
    setloading(true);
    signInWithPopup(auth, googleProvider);
  };

  const githubProvider = new GithubAuthProvider();
  const googleLogIn = () => {
    setloading(true);
    signInWithPopup(auth, githubProvider);
  };

  const data = {
    loading,
    user,
    createUser,
    logIn,
    logOut,
    googleLogIn,
    githubLogin,
    updateInfo,
  };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};
AuthProvider.propTypes = {
  children: PropTypes.node,
};
