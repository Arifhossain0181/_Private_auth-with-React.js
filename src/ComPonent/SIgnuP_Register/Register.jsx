import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";

const Register = () => {
    const {createUser} = useContext(AuthContext);


  const handleregister = (e) => {
    const navigate = useNavigate();
    e.preventDefault();
    const email = e.target.email.value;
    const Password = e.target.password.value;
    const Name = e.target.name.value;
    console.log(email, Password,Name);
    // create user
    createUser(email,Password)
    .then(result =>{
        console.log(result.user)
        e.target.reset();
        navigate('/');
    })
    .catch(error =>{
        console.log('ERROR',error.message)
    })
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-6xl">
          <h1>Register</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleregister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
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
                name="password"
                type="password"
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
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <h4 className="ml-4 mb-4 mr-4">
            Already have an account? Please<Link to="/login">Login</Link>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Register;
