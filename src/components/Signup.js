import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = (props) => {

    let history = useNavigate();
    const [credential, setCredential] = useState({
        name:"",
        email: "",
        password: "",
        cpassword:"",
    });

  const handleSubmit = async (e) => {

    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        name: credential.name,
        email: credential.email,
        password: credential.password,
      }), // body data type must match "Content-Type" header
    });
    const json = await response.json();
    console.log(json);
    if(json.success){
        //redirect
        localStorage.setItem("token",json.authtoken)
        history('/login')
        props.showAlert("Successfully signed up!","success")
    }
    else{
      props.showAlert("Invalid details","danger")
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
                <h4>Sign Up</h4>
              </div>
              <form method="POST" onSubmit={handleSubmit} >
              <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="form-control form-control-sm"
                    onChange={onChange}
                    value={credential.name}
                    required
                  />
                </div>


                <div className="form-group">
                  <label htmlFor="email">Email</label>
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
                    minLength={5}
                    value={credential.password}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Confirm Password</label>
                  <input
                    type="password"
                    name="cpassword"
                    id="cpassword"
                    className="form-control form-control-sm"
                    onChange={onChange}
                    minLength={5}
                    value={credential.cpassword}
                    required
                  />
                </div>

                <br />
                <input
                  type="submit"
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
    )
}

export default Signup
