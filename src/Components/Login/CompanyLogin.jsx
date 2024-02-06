import { Link } from "react-router-dom";
export default function CompanyLogin() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div
        className="card text-white bg-dark mb-3 p-4"
        style={{ width: "30%", height: "50%" }}
      >
        <center>
          <h1 className="p-2 fs-4">Log in Here</h1>
        </center>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        ></div>
        <div className="card-body">
          <form>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
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
          <p className="mt-2 fs-5">
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
