import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useHistory } from "react-router-dom";

import Loading from "../Loading/Loading";

import "react-toastify/dist/ReactToastify.css";
import "./Login.css";

const Login = () => {
  const history = useHistory();

  //storing the user detail for signUp....
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [isLoading, setLoading] = useState(false);

  //checking for valid email format.....
  const validateEmail = (emailAdress) => {
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailAdress.match(regexEmail)) {
      return true;
    } else {
      return false;
    }
  };

  //get data from input fields....
  let name, value;
  const handleChange = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const login = async (e) => {
    e.preventDefault();

    const { email, password } = user;
    if (!validateEmail(email)) {
      toast.info("Invalid Email Format");
    } else {
      try {
        //if all the inputs are filled up...
        if (email && password) {
          setLoading(true);
          const isLogin = await fetch("/user/api/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email,
              password,
            }),
          });

          const data = await isLogin.json();
          setLoading(false);
          if (data.message === "Login Successful") {
            toast.success("Registration Successfull!");
            history.push("/Projects");
          } else if (data.message === "invalid password") {
            toast.error("Invalid password!");
          } else {
            toast.error("Invalid Error");
          }
        } else {
          toast.dark("Fields are not properly filled!");
        }
      } catch (err) {
        console.log(err.message);
      }
    }
  };

  if (isLoading) {
    return (
      <div>
        <Loading />
        <ToastContainer
          position="top-right"
          autoClose={4000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    );
  } else {
    return (
      <div className="login-outer-section">
        <section className="login-inner-section">
          <div className="login-content">
            <div className="login-logo">
              <h1>Log In</h1>
              <p>Don't have an account? Sign Up</p>
            </div>
            <div className="login-line">
              <div></div>
              <p>or</p>
              <div></div>
            </div>
            <section className="login-input-section">
              <form className="login-form">
                <label>EMAIL</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  value={user.email}
                  onChange={handleChange}
                />
                <label>PASSWORD</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={user.password}
                  onChange={handleChange}
                />
                <div className="remember">
                  <label>Remember Me</label>
                  <p>Forgot Password</p>
                </div>

                <button onClick={login}>LOG IN</button>
              </form>
            </section>
            <small className="login-bottom-text">
              By clicking Log In, Facebook or LinkedIn you agree to our new
              T&C's
            </small>
          </div>
        </section>
        <ToastContainer
          position="top-right"
          autoClose={4000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    );
  }
};

export default Login;
