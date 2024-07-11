import PropTypes from 'prop-types';

import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../Config/Firebase.config";
import { createContext, useEffect, useState } from 'react';

export const AuthContent = createContext();
const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {

      const [user, setUser] = useState({});
      const [isLoading, setIsLoading] = useState(true);

      // Google login
      const googleLogin = () => {
            setIsLoading(true);
            return signInWithPopup(auth, googleProvider)
      }

      // crete user
      const createUser = (email, password) => {
            setIsLoading(true);
            return createUserWithEmailAndPassword(auth, email, password)
      }

      // update profile
      const profileUpdate = (name, photo) => {
            setIsLoading(true)
            return updateProfile(auth.currentUser, {
                  displayName: name,
                  photoURL: photo
            })
      }

      // login user
      const login = (email, password) => {
            setIsLoading(true)
            return signInWithEmailAndPassword(auth, email, password)
      }

      // log out
      const logOut = () => {
            setIsLoading(true);
            return signOut(auth);
      }

      // informer
      useEffect(() => {
            const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
                  setUser(currentUser);
                  setIsLoading(false);
                  console.log('Logged In User', currentUser);

            })
            return () => {
                  return unSubscribe()
            }
      }, []);

      const authentications = {
            googleLogin,
            isLoading,
            user,
            createUser,
            profileUpdate,
            login,
            logOut
      }

      return (
            <AuthContent.Provider value={authentications}>
                  {children}
            </AuthContent.Provider>
      );
};

AuthProvider.propTypes = {
      children: PropTypes.node
}

export default AuthProvider;