const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();

const salt = 10;
const bcrypt = require("bcrypt");
const multer = require("multer");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const bodyParser = require('body-parser');

app.use(bodyParser.json());
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
app.listen(4000, () => {
    console.log("Server is running 4000");
  });

//For Company Registration
app.post("/hr-register", upload.single("logo"), (req, res) => {
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
        req.file.buffer,//we send as logo but we can use it like file becos multer
        adminId,
      ];
      console.log(values);
      db.query(sql, values, (error, response) => {
        if (error) {
          console.error(error);
          return res.json({ Error: "Inserting error in server" });
        }
        return res.json({ Status: "Success",id:response.insertId });
      });
    });
  });

  app.post("/user-register", upload.single("resume"), (req, res) => {
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
  
        return res.json({ Status: "Success" ,id: result.insertId});
      });
    });
  });
  
  
app.post("/user-login", (req, res) => { 
    const sql = "SELECT * FROM jobseeker where JsEmail=?";
    db.query(sql, [req.body.email], (err, data) => {
      if (err) return res.json({ Error: "Login error in server" });
      if (data.length > 0) {
        bcrypt.compare(
          req.body.password.toString(),
          data[0].pwd,
          (err, response) => {
            if (err)
              return res.json({ Error: "Password compare error in server" });
            if (response) {
              const id = data[0].JsId;
              const token = jwt.sign({ id, type: "user" }, "key", {
                expiresIn: "1d",
              });
              res.cookie("token", token);
              return res.json({ Status: "Success", token, info: data[0] });
            } else {
              return res.json({ Error: "Password not correct" });
            }
          }
        );
      } else {
        return res.json({ Error: "Email not exist" });
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
            const token = jwt.sign({id ,type:"hr"},"key",{expiresIn:"1d"});
            res.cookie("token",token);
            return res.json({ Status: "Success" ,token,info:result[0]});
          } else {
            return res.json({ Error: "Incorrect Password" });
          }
        });
      } else {
        return res.json({ Error: "Email not exists" });
      }
    });
  });

const VerifyUser=(req,res,next)=>
{
  const token=req.cookies.token;
  if(!token)
  {
     return res.json({Error:"You are not Authenticate"});
  }
  else{
    jwt.verify(token,"key",(err,result)=>
    {
      if(err){
        return res.json({Error:"You are not Authenticate"});
      }
      else{
        req.id=result.id;
        req.userType=result.type;
        next();
      }

    })
  }
}
app.get("/",VerifyUser,(req,res)=>{
    return res.json({Status:"Success", type:req.userType});
  })


  app.post("/job-post", VerifyUser, (req, res) => {
    const id = req.id;
    const date = new Date().toISOString().split("T")[0];
    const sql =
      "INSERT INTO job (JobTitle, JobDescr,JobExperience,MiniEducat,City,Role,Salary,JobType,PostDate,HrId,workLocation,lastDate) values(?,?,?,?,?,?,?,?,?,?,?,?)";
    const values = [
      req.body.jobTitle,
      req.body.jobDescription,
      req.body.experience,
      req.body.minimumEducation,
      req.body.city,
      req.body.role,
      req.body.salary,
      req.body.jobType,
      date,
      id,
      req.body.workLocation,
      req.body.lastDate,
    ];
    db.query(sql, values, (err, result) => {
      if (err) {
        console.log(err);
        return res.json({ Error: "Error in inserting data" });
      }
      return res.json({ Status: "Success" });
    });
  })
  
  app.get("/hr-total-post-job", VerifyUser, (req, res) => {
    const id = req.id;
    const sql =
      "select j.* ,COUNT(ja.JobId) as application from job j left join jobapplication ja on j.JobId=ja.JobId where j.HrID= ? group by j.JobId";
    db.query(sql, [id], (err, data) => {
      if (err) console.log(err);
      return res.json({ Status: "Success", jobs: data });
    });
  });

  app.get("/logout", (req, res) => {
    res.clearCookie("token");
    return res.json({ Status: "Success" });
  });
  app.post("/update-hr-profile", VerifyUser, (req, res) => {
    const id = req.id;
    const sql =
      "update hr set HrName=? ,HrEmail=?,CompADD=?,CompPhone=?,CompName=? where HrID=?";
    db.query(
      sql,
      [
        req.body.name,
        req.body.email,
        req.body.address,
        req.body.phone,
        req.body.company,
        id,
      ],
      (err, response) => {
        if (err) throw err;
        return res.json({ Status: "Success", response });
      }
    );
  });

  app.post("/updateJob", VerifyUser, (req, res) => {
    const id = req.id;
    const date = new Date().toISOString().split("T")[0];
    const sql =
      "update job set JobTitle=? ,JobDescr=?,JobExperience=?, MiniEducat=?,City=?,Role=?,Salary=?,JobType=?,PostDate=?,workLocation=? ,LastDate=? WHERE JobId = ? and HrID=?";
    const values = [
      req.body.JobTitle,
      req.body.JobDescr,
      req.body.JobExperience,
      req.body.MiniEducat,
      req.body.City,
      req.body.Role,
      req.body.Salary,
      req.body.JobType,
      date,
      req.body.workLocation,
      req.body.lastDate,
      req.body.JobId,
      id,
    ];
    db.query(sql, values, (err, result) => {
      if (err) return res.json({ Error: "not updated job" });
      return res.json({ Status: "Success" });
    });
  });
  

app.get("/AllApplicant/:id", (req, res) => {
    const { id } = req.params;
    const sql =
      "select jobseeker.* from jobseeker join jobapplication on jobseeker.JsId=jobapplication.JsId where jobapplication.JobId=?";
    db.query(sql, [id], (err, result) => {
      if (err) throw err;
      res.json({ Status: "Success", applicant: result });
    });
  });
  
  
app.post(
    "/postdata-education-user",
    upload.single("DegreeFile"),
    (req, res) => {
      const sql =
        "insert into education (JsId,DegreeName, InstituteName,StartDate,CompletionDate,DegreeFile,Percentage) values (?,?,?,?,?,?,?)";
      const values = [
        req.body.JsId,
        req.body.DegreeName,
        req.body.InstituteName,
        req.body.StartDate,
        req.body.CompletionDate,
        req.file.buffer,
        req.body.Percentage,
      ];
      console.log(values);
      db.query(sql, values, (err, result) => {
        if (err) throw err;
        return res.json({ Status: "Success" });
      });
    }
  );
  
  app.post("/postdata-experience-user", (req, res) => {
    const sql =
      "insert into experience (JsId, StartDate,EndDate,JobTitle,CompanyName,Description) values (?,?,?,?,?,?)";
    const values = [
      req.body.JsId,
      req.body.startDate,
      req.body.endDate,
      req.body.jobTitle,
      req.body.companyName,
      req.body.description,
    ];
    db.query(sql, values, (err, result) => {
      if (err) throw err;
      return res.json({ Status: "Success" });
    });
  });
  

  //For jobs data

  app.get("/allJobs", (req, res) => {
    const sql =
      "SELECT job.JobTitle, job.workLocation, job.JobType, job.Salary, HR.CompName FROM job INNER JOIN HR ON job.HrID = HR.HrID";
    db.query(sql, (err, result) => {
      if (err) throw err;
      return res.json({ Status: "Success", jobs: result });
    });
  });