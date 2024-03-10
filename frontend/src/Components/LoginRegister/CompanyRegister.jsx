// Register.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const CompanyRegister = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    Name: "",    
    email: "",
    password: "",
    Adhar:"",
    CompName:"",
    CompAdd:"",
    ContactNumber: "",
    CompWeb:"",
    
  });

   

  const [logo,setlogo]=useState(null);

  const handleFileChange = (e) => {
    setlogo(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    const formdata=new FormData();
    formdata.append("Name",formData.Name);
    formdata.append("email",formData.email);
    formdata.append("password",formData.password);
    formdata.append("Adhar",formData.Adhar);
    formdata.append("CompName",formData.CompName);
    formdata.append("CompAdd",formData.CompAdd);
    formdata.append("ContactNumber",formData.ContactNumber);
    formdata.append("CompWeb",formData.CompWeb);
    formdata.append("logo",logo);//this is logo 

    axios.post("/postcompdata",formdata,{
      headers:{"Content-Type":"multipart/form-data"},
    }).then
    ((res)=>{
      console.log(res);
      if(res.data.Status=="Success") ;
      window.location.href="/CompanyLogin";
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

 

  return (
    <div className="p-10">
      <div className="container d-flex justify-content-center align-items-center">
        <div
          className="card p-4"
          style={{ width: "500px", background: "#333" }}
        >
          <center>
            <h3 className="text-white mb-4">Registration Form</h3>
          </center>
          <form onSubmit={handleSubmit}>
            <div className="row mb-3">
              <div className="col">
                <label className="form-label text-white">Company Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="CompName"
                  name="CompName"
                  placeholder="Company Name"
                  required
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <label className="form-label text-white">Company Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="CompAdd"
                  name="CompAdd"
                  placeholder="Street Address"
                  required
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <label className="form-label text-white">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="Name"
                  name="Name"
                  placeholder="Name"
                  required
                  onChange={handleInputChange}
                />
              </div>
              
            </div>

            <div className="row mb-3">
              <div className="col">
                <label className="form-label text-white">Aadhar Number</label>
                <input
                  type="number"
                  className="form-control"
                  id="Adhar"
                  name="Adhar"
                  placeholder="Aadhar number"
                  required
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col">
                <label className="form-label text-white">Email</label>
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
                <label className="form-label text-white">Contact Number</label>
                <input
                  type="number"
                  className="form-control"
                  id="ContactNumber"
                  name="ContactNumber"
                  placeholder="Contact Number"
                  required
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <label className="form-label text-white">Company URL</label>
                <input
                  type="text"
                  className="form-control"
                  id="CompWeb"
                  name="CompWeb"
                  placeholder="Company Official Website"
                  required
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <label htmlFor="logo" className="form-label text-white">
                  Upload Company Logo
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="logo"
                  name="logo"
                  placeholder="Upload Company logo"
                  accept=".pdf, .doc, .docx, .jpg"
                  onChange={handleFileChange}
                />
              </div>
              
            </div>
            
            <div className="row mb-3">
              <div className="col">
                <label className="form-label text-white">Password</label>
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

export default CompanyRegister;
