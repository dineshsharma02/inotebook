import React, { useState,useContext } from "react";
import { useNavigate } from "react-router-dom";
// import alertContext from "../context/notes/alertContext";


const Login = (props) => {
  // const context = useContext(alertContext)
  // const showAlert = context
  // const alert = context
  const showAlert = props.showAlert
    let history = useNavigate();
    const [credential, setCredential] = useState({
        email: "",
        password: "",
    });

  const handleSubmit = async (e) => {

    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        email: credential.email,
        password: credential.password,
      }), // body data type must match "Content-Type" header
    });
    const json = await response.json();
    console.log(json);
    if(json.success){
        //redirect
        localStorage.setItem("token",json.authtoken)
        history('/')
        showAlert("Logged in successfully","success")

    }
    else{
        // console.log("Invalid credentials")
        // alert("Invalid credentials")
        showAlert("Invalid credentials","danger")
        // props.showAlert("Invalid credentials","danger")
    }
  };
  const onChange = (e) => {
    setCredential({ ...credential, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <div className="card mt-5 register-card">
            <div className="card-body">
              <div className="card-title py-2">
                <h4>Login</h4>
              </div>
              <form method="POST">
                <div className="form-group">
                  <label htmlFor="username">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control form-control-sm"
                    onChange={onChange}
                    value={credential.email}
                    required
                  />
                </div>
                <br />
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="form-control form-control-sm"
                    onChange={onChange}
                    value={credential.password}
                    required
                  />
                </div>
                <br />
                <input
                  type="submit"
                  onClick={handleSubmit}
                  value="Login"
                  className="btn btn-block btn-primary submit-btn"
                />
              </form>
              <br />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
