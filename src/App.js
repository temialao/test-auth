// pull request test

import { useState, useEffect } from "react";
import "./App.css";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./firebase";

function App() {
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (currUser) => {
      setUser(currUser);
      setIsLoading(false);
    });
  }, []);

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        regEmail,
        regPassword
      );
    } catch (err) {
      console.log(err.message);
    }
  };
  const logOut = async () => {
    await signOut(auth);
  };
  const logIn = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
    } catch (err) {
      console.log(err.message);
    }
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="App">
      <h3>Register User</h3>
      <input
        type="text"
        placeholder="Email.."
        onChange={(event) => {
          setRegEmail(event.target.value);
        }}
      />
      <input
        type="password"
        placeholder="password.."
        onChange={(event) => {
          setRegPassword(event.target.value);
        }}
      />
      <button onClick={register}>Create User</button>

      <h3>Sign In</h3>

      <input
        type="text"
        placeholder="Email.."
        onChange={(event) => {
          setLoginEmail(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="password.."
        onChange={(event) => {
          setLoginPassword(event.target.value);
        }}
      />
      <button onClick={logIn}>Sign In</button>
      <h3>User Logged in: {user?.email}</h3>
      <button onClick={logOut}>Sign Out</button>
    </div>
  );
}

export default App;
