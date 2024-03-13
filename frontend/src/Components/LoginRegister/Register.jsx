// Register.jsx
import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AllFunction } from "../store/Store";

const Register = () => {
  const navigate = useNavigate();
  const{insertId,handleInsertId}=useContext(AllFunction);
    const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contactNumber: "",
    AdharId:"",
    email: "",
    password: "",
    dob: "",
    gender: "",
    ExYear:"",
  });
 

  const[resume,setresume]=useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    const formdata=new FormData();
    formdata.append("firstName",formData.firstName);
    formdata.append("lastName",formData.lastName);
    formdata.append("contactNumber",formData.contactNumber);
    formdata.append("AdharId",formData.AdharId);
    formdata.append("email",formData.email);
    formdata.append("password",formData.password);
    formdata.append("dob",formData.dob);
    formdata.append("gender",formData.gender);
    formdata.append("ExYear",formData.ExYear);
    formdata.append("file",resume);

    console.log(formdata);
    axios.post("/user-register",formdata,{
      headers:{"Content-Type":"multipart/form-data"},
    }).then
    (
      (res)=>
      {
        if(res.data.Status=="Success") {
          handleInsertId(res.data.id);
        navigate("/login");
        }
        else alert(res.data);
      }
    );
    
  
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleFileChange = (el) => {
    const file=el.target.files[0];
    setresume(file);
    
  };

 
  
  return (
    <div className="p-10">
      <div className="container d-flex justify-content-center align-items-center">
        <div
          className="card p-4"
          style={{ width: "500px", background: "#333" }}
        >
          <h3 className="text-white mb-4">Registration Form</h3>
          <form onSubmit={handleSubmit}>
            <div className="row mb-3">
              <div className="col">
                <label htmlFor="firstName" className="form-label text-white">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  required
                  onChange={handleInputChange}
                />
              </div>
              <div className="col">
                <label htmlFor="lastName" className="form-label text-white">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                  required
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col">
                <label
                  htmlFor="contactNumber"
                  className="form-label text-white"
                >
                  Contact Number
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="contactNumber"
                  name="contactNumber"
                  placeholder="Contact Number"
                  required
                  onChange={handleInputChange}
                />
              </div>
            </div>


            <div className="row mb-3">
              <div className="col">
                <label
                  htmlFor="AdharId"
                  className="form-label text-white"
                >
                  Aadhar Number
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="AdharId"
                  name="AdharId"
                  placeholder="Aadhar Number"
                  required
                  onChange={handleInputChange}
                />
              </div>
            </div>


            <div className="row mb-3">
              <div className="col">
                <label htmlFor="email" className="form-label text-white">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Email"
                  required
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col">
                <label htmlFor="dob" className="form-label text-white">
                  Date of Birth
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="dob"
                  name="dob"
                  placeholder="Date of Birth"
                  required
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col">
                <label htmlFor="gender" className="form-label text-white">
                  Gender
                </label>
                <select
                  className="form-control"
                  id="gender"
                  name="gender"
                  required
                  onChange={handleInputChange}
                >
                  <option value="" disabled selected>
                    Select Gender
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="row mb-3">

            <div className="col">
                <label htmlFor="ExYear" className="form-label text-white">
                  Experience Year
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="ExYear"
                  name="ExYear"
                  placeholder="Enter Experience Years"
                  required
                  onChange={handleInputChange}
                />
              </div>

              <div className="col">
                <label htmlFor="resume" className="form-label text-white">
                  Upload Resume
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="resume"
                  name="resume"
                  placeholder="Upload Resume"
                  accept=".pdf, .doc, .docx"
                  onChange={handleFileChange}
                />
              </div>
             
            </div>
            <div className="row mb-3">
              <div className="col">
                <label htmlFor="password" className="form-label text-white">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Password"
                  required
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-dark w-100 mb-2 bg-primary"
            >
              REGISTER
            </button>
          </form>

          <p className="mt-2 text-white">
            Already have an account?
            <Link to="/login" className="text-decoration-none text-white">
              {" "}
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
