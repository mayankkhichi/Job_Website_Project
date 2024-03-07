// import { Link } from "react-router-dom";
// export default function CompanyLogin() {
//   return (
//     <div className="d-flex justify-content-center align-items-center vh-100">
//       <div
//         className="card text-white bg-dark mb-3 p-4"
//         style={{ width: "30%", height: "50%" }}
//       >
//         <center>
//           <h1 className="p-2 fs-4">Log in Here</h1>
//         </center>
//         <div
//           style={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         ></div>
//         <div className="card-body">
//           <form>
//             <div className="mb-3">
//               <input
//                 type="email"
//                 className="form-control"
//                 placeholder="Email"
//               />
//             </div>
//             <div className="mb-3">
//               <input
//                 type="password"
//                 className="form-control"
//                 placeholder="Password"
//               />
//               <small>
//                 <Link to="/" className="text-decoration-none">
//                   Forgot password?
//                 </Link>
//               </small>
//             </div>
//             <Link to="Hr"> <button
//               type="submit"
//               className="btn btn-dark w-100 mb-2 bg-primary"
//             >
//               LOGIN
//             </button></Link>
//           </form>
//           <p className="mt-2 fs-5">
//             Don't have an account?
//             <Link to="/CompanyRegister" className="text-decoration-none">
//               Sign Up
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

import { Link, useNavigate } from "react-router-dom";
import { useNavigation } from "../store/NavigationConext";
export default function CompanyLogin() {
  const users = [
    { id: "hr1@gmail.com", password: "123456" },
    { id: "hr2@gmail.com", password: "123456" },
  ];
  const navigate = useNavigate();
  const { toggleHR, hrLogin } = useNavigation();
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    const user = users.find((u) => u.id === email && u.password === password);
    if (user) {
      // window.location.href = "/";
      toggleHR(true);
      console.log(hrLogin);
      navigate("/Hr");
    } else {
      alert("Wrong password or Email");
    }

    e.target.elements.email.value = "";
    e.target.elements.password.value = "";
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
                name="email"
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                name="password"
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
