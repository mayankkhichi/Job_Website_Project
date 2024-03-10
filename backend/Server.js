const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();

const salt = 10;
const bcrypt = require("bcrypt");
const multer = require("multer");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cookieParser());
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
app.use(express.json());

app.use(cors({
  origin:["http://localhost:5173"],
  methods:["POST","GET"],
  credentials:true
}

));

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "123456",
  database: "jobportal",
});
db.connect((err) => {
  if (err) throw err;
  console.log("Connected");
});

//For Company Registration
app.post("/postcompdata", upload.single("logo"), (req, res) => {
  console.log("File:", req.file); // Check if the file is received
  // console.log("Body:", req.body);
  if (!req.file) return res.json({ Error: "No file uploaded" });

  bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
    if (err) return res.json({ Error: "Error in hashing password" });

    const adminId = Math.floor(Math.random() * 4) + 1;
    const sql =
      "INSERT INTO hr (HrName, HrEmail, HrPwd, AdharId, CompName, CompAdd, CompPhone, CompWeb, CompanyLogo, AdminId) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [
      req.body.Name,
      req.body.email,
      hash,
      req.body.Adhar,
      req.body.CompName,
      req.body.CompAdd,
      req.body.ContactNumber,
      req.body.CompWeb,
      req.file.buffer,
      adminId,
    ];
    console.log(values);
    db.query(sql, values, (error, response) => {
      if (error) {
        console.error(error);
        return res.json({ Error: "Inserting error in server" });
      }
      return res.json({ Status: "Success" });
    });
  });
});

//Seeker Registration
app.post("/SeekerRegi", upload.single("file"), (req, res) => {
  bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
    if (err) {
      console.error("Error Hassing password:", err);
      return res.json({ Error: "Internal Server Error" });
    }
    const sql =
      "INSERT INTO jobseeker (JsFName,JsLName,JsEmail,AdharId,DOB,Phone,Gen,Resume,JsExpYear,pwd) VALUES (?,?,?,?,?,?,?,?,?,?)";
    const resume = req.file.buffer;

    const values = [
      req.body.firstName,
      req.body.lastName,
      req.body.email,
      req.body.AdharId,
      req.body.dob,
      req.body.contactNumber,
      req.body.gender,
      resume,
      req.body.ExYear,
      hash,
    ];
    console.log(values);
    db.query(sql, values, (err, result) => {
      if (err) {
        console.error("Error on registration", err);
        return res.json({ Error: "Internal Server Error" });
      }

      return res.json({ Status: "Success" });
    });
  });
});

//jobSeeker Login
const user=false;
const UserId=null;
app.post("/SeekerLogin", (req, res) => { 
  const sql = "SELECT* FROM jobseeker where JsEmail=?";
  db.query(sql, [req.body.email], (err, result) => {
    if (err) return res.json({ Error: "error" });
    if (result.length > 0) {
      bcrypt.compare(
        req.body.password.toString(),
        data[0].pwd,
        (err, response) =>{
        if (err) return res.json({ Error: "password compare error" });
        if (response) {
          const id=data[0].Jsid;
          const token=jwt.sign({id},"key",{expiresIn:"1d"});
          res.cookie("token",token);
          return res.json({ Status: "Success", token });
        } else return res.json({ Error: "password not matched" });
      });
    } else {
      return res.json({ Error: "email not exist" });
    }
  });
});

//hrLogin
app.post("/HrLogin", (req, res) => {
  const sql = "SELECT * FROM hr where HrEmail=?";
  db.query(sql, [req.body.email], (err, result) => {
    if (err) return res.json({ Error: "Error in server" });
    if (result.length > 0) {
      const DbPassword = result[0].HrPwd;
      bcrypt.compare(req.body.password.toString(), DbPassword, (err, response) => {
        if (err) return res.json({ Status: "Password Error" });
        if (response) {
          const id=result[0].HrID;
          const token = jwt.sign({id},"key",{expiresIn:"1d"});
          res.cookie("token",token);
          return res.json({ Status: "Success" ,token,info:result});
        } else {
          return res.json({ Error: "Incorrect Password" });
        }
      });
    } else {
      return res.json({ Error: "Email not exists" });
    }
  });
});


//Job Seeker Profile
app.get(`/StudentProfile/:${UserId}`,(req,res)=>
{
  const id=UserId;
   const sql="Select * from jobseeker where JsId=?";
   db.query(sql,id,(error,result)=>
   {
        if(error)
        {
          res.json({error:"Error"});
        }
        else{
             res.send(result);
        }
   })
})

//Authenticate
const VerifyUser=(req,res,next)=>
{
  const token=req.cookies.token;
  if(!token)
  {
     return res.json({Error:"You are not Authenticate"});
  }
  else{
    jwt.verify(token,"key",(err,decoded)=>
    {
      if(err){
        return res.json({Error:"You are not Authenticate"});
      }
      else{
        req.id=decoded.id;
        next();
      }
    })
  }
}

app.get("/hr-auth",VerifyUser,(req,res)=>
{
  return res.json({Status:"Success"});
})


app.listen(4000, () => {
  console.log("Server is running");
});
