import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../../ContextProvider/ContextProvider";

const Login = () => {
  const { userSignIn, signInWithGoogle } = useContext(AppContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    navigate("/profile");

    userSignIn(email, password)
      .then((result) => {
        e.target.reset();
      })
      .catch((error) => {
        console.log(error);
      });


  };
      //Google SignIn
      const handleGoogleSignIn = () => {
        signInWithGoogle()
          .then((result) => {
            console.log(result.user);
          })
          .catch((error) => {
            console.log(error);
          });
      };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-purple-500">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body" onSubmit={handleLogin}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <p>
            New here?please{" "}
            <Link to="/register">
              <a className="link text-purple-500">Register</a>
            </Link>
          </p>
          <p> <button onClick={handleGoogleSignIn}>Google</button>  </p>
          
          
        </div>
      </div>
    </div>
  );
};

export default Login;
