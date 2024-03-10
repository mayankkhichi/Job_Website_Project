

import { Link, json, useNavigate } from "react-router-dom";
import { useNavigation } from "../store/NavigationConext";
import { useState } from "react";
import axios from "axios";
export default function CompanyLogin() {
  
  const navigate = useNavigate();
  const [email,Setemail]=useState("");
  const [password,Setpassword]=useState("");
  axios.defaults.withCredentials=true;

  function handleSubmit(e){
    e.preventDefault();
    console.log(email,password);
    axios.post("/HrLogin",{email,password}).then((res)=>
    {
      if(res.data.Status==="Success")
      {
           localStorage.setItem("token",res.data.token);
           window.location.href="/"
      }
      else{
          alert(res.data.Error);

      }
    })

  };


  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "475px" }}
    >
      <div className="card text-white bg-dark mb-3 p-4">
        <h1 className="p-2 fs-4 text-center">Log in Here</h1>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                
          
                onChange={(e)=>Setemail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                
                onChange={(e)=>Setpassword(e.target.value)}
              />
              <small>
                <Link to="/" className="text-decoration-none d-block pt-2">
                  Forgot password?
                </Link>
              </small>
            </div>
            <button
              type="submit"
              className="btn btn-dark w-100 mb-2 bg-primary"
            >
              LOGIN
            </button>
          </form>
          <p className="mt-2 fs-5 text-center">
            Don't have an account?
            <Link to="/companyregister" className="text-decoration-none">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
