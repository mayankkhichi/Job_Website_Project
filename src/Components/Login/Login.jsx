import { FcGoogle } from "react-icons/fc";
import { BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useRef } from "react";
export default function Login() {
  const email = useRef();
  const password = useRef();
  function handleForm(event) {
    event.preventDefault();
    console.log(email.current.value);
    console.log(password.current.value);
  }
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div
        className="card text-white bg-dark mb-3 p-4"
        style={{ width: "30%", height: "60%" }}
      >
        <center>
          <div className="fs-5">Sign In</div>
          <div className="flex gap-10 ms-40 mt-3">
            <FcGoogle size={40} />
            <BsLinkedin size={40} />
          </div>
        </center>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "20px 0",
          }}
        >
          <div
            style={{
              borderBottom: "1px solid #ccc",
              width: "40%",
            }}
          ></div>
          <span
            style={{ padding: "0 10px", color: "#555", fontWeight: "bold" }}
          >
            OR
          </span>
          <div
            style={{
              borderBottom: "1px solid #ccc",
              width: "40%",
            }}
          ></div>
        </div>
        <div className="card-body">
          {/* --------------------form started-------------------- */}
          <form onSubmit={handleForm}>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                ref={email}
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                ref={password}
              />
              <small>
                <Link to="/" className="text-decoration-none">
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
          <p className="mt-2">
            Don't have an account?
            <Link to="/register" className="text-decoration-none">
              {" "}
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
